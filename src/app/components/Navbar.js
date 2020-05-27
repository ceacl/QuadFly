import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class Navbar extends Component 
{
    render(){
        return (
               
        <div id="divnav" className=""> 
            
            <nav className="navbar navbar-expand-lg divnav">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
            <div className="collapse navbar-collapse">
            
            <a className="navbar-brand">
                <img src="assets/icon/iconpng.png" width="100" height="80" alt="Quadfly"/>
            </a>
            <ul className="navbar-nav mr-auto mt-4 mt-lg-0 justify-content-center">
                
                <li className="nav-item mr-sm-2 ">
                    <a className="navbtn nav-link">Phantom </a>
                </li>
                
                <li className="nav-item mr-sm-2">
                    <Link to="/DroneDetails.js" className="navbtn nav-link">Maverick Air</Link>
                </li>
                
                <li className="nav-item mr-2">
                    <a className="navbtn nav-link"> Maverick Spark</a>
                </li>

                <li className="nav-item mr-sm-2">
                    <a className="navbtn nav-link" id="#navbtn"> Products</a>
                </li>

                <li className="nav-item mr-sm-2">
                    <a className="navbtn nav-link" id="#navbtn"> About Us</a>
                </li>
            </ul>
      
            <form className="form-inline">
                <input id="inputSearch" className="form-control mr-sm-2" type="search" placeholder="Search"/>
                <button className="btn btn-outline-dark my-2 my-sm-0 mr-2" type="submit">Search</button>
            </form>         
            
            <button className="btn btn-outline-dark my-2 my-sm-0 mr-2" type="submit">Sign Up</button>

            </div>
            </nav>
        
        </div>
            
        );
    }
}

export default Navbar;