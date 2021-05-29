import React, { Component} from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
// import { Input, Btn } from "../components/Form"
import API from "../../utils/API"
import Card from "../../components/Card/Card";
import SearchForm from "../../components/SearchForm/SearchForm";
import BookDetail from "../../components/BookDetail/BookDetail";
import ReactDom from 'react-dom';
import Popup from 'react-popup';
class Main extends Component {
    state = {
        books : [],
         title: ""
    };

    handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name] : value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        API.searchBooks(this.state.title)
            .then(res => {
                console.log(res.data.totalItems)
                if (res.data.totalItems > 0) {

                    this.setState({
                        books : res.data.items ,
                        title : ""
                    }); 
                    console.log(this.state.books[0].volumeInfo.readingModes.image)

                }else {
                    this.setState({
                        books : [] ,
                        title : ""
                    }); 
                }
                           
            })
            .catch(err => console.log(err)) ;               
    }

    handleSave = bookData => {
        API.saveBook(bookData)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    
    render(){
        return(
            <Container >
                
            <Row>
                <Col size="12"> 
                <SearchForm
                        value={this.state.title}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />          
                </Col>
            </Row>
            <Row fluid>
                <Col size="md-12">
                    {this.state.books.length ? (
                    <Card heading="Search Results">
                        {this.state.books.map(book => (

                        <BookDetail key={book.id}
                            title = {book.volumeInfo.title}
                            authors = {book.volumeInfo.authors}
                            image =   {book.volumeInfo.imageLinks ?  book.volumeInfo.imageLinks.thumbnail : ""}
                            description = {book.volumeInfo.description}
                            link = {book.volumeInfo.infoLink}
                            isImage ={book.volumeInfo.readingModes.image}
                            handleSave = {()=> this.handleSave({
                            title: book.volumeInfo.title,
                            authors : book.volumeInfo.authors,
                            description : book.volumeInfo.description,
                            link : book.volumeInfo.infoLink
                            })}
                        />
                        ))}
                    </Card>
                    ) : (
                    <Card heading="Search Results">
                       No Results
                    </Card>
                    )}
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Main;