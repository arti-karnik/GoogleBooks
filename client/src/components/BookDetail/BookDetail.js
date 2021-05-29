import React from "react";
import { Card } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import './style.css'

const BookDetail = props => {
  function IsImage(props) {
    const isImageExists = props.isImage;
    if (isImageExists) {
      return <img className="image-icon" src={props.image} alt={props.image} />
      ;
    }
    return <img className="image-icon" src="./No-image-found.png" alt={props.image} />
    ;
  }

  
  return (
    <React.Fragment id="card">
      <div className="row">
        <div className="col-8">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.authors}</h6>
        </div>
        <div className="col-4">
        <button onClick={props.handleSave} className="button" >
          Save Book
        </button>
        <button className="button">
          <a href= {props.link} className="card-link">View Book</a></button>
        </div>
      </div>
      <div className="row">
          <div className="col-2 text-left">
            <IsImage image={props.image}></IsImage>
          </div>
          <div className="col-10">
              <p className="card-text">{props.description}</p>
          </div>
      </div>
      <hr style={{ clear: "both"}} />
    </React.Fragment>
  );
}
export default BookDetail;
