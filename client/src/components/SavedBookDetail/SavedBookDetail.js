import React from "react";
import './style.css'

const SavedBookDetail = props => {
  return (
    <span>
      <div className="row" style={{marginBottom:20}}>
        <div className="col-8">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.authors}</h6>
        </div>
        <div className="col-4">
        <button onClick={props.handleDelete} className="button" >
          Delete Book
        </button>
        <button className="button">
          <a href= {props.link} className="card-link">View Book</a></button>
        </div>
      </div>
      <div className="row">
          <div className="col-2 text-center">
              <img src={props.image} alt="..." className="img-thumbnail" />
          </div>
          <div className="col-10">
              <p className="card-text">{props.description}</p>
          </div>
      </div>
      <hr style={{ clear: "both"}} />
    </span>
  );
}

export default SavedBookDetail;
