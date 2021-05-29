import React from "react";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavLink, Container } from 'react-bootstrap';


function Nav(){
    return (
        <nav className="navbar navbar-expand-lg">
           
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/search">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/saved">Saved</a>
                    </li>
                </ul>
            </div>
            <div className="text-center">
            <ul className="nav navbar-nav text-center">
                    <li>
                        <h1>  
                            <span className="navbar-title" id="nav-title"> Google Book Search </span>
                        </h1>
                    </li>
                </ul>
            </div>
           
        </nav>
    );
}

export default Nav;