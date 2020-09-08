import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/footerstyle.css';

class Footer extends Component 
{
    render(){
        return (
                
            <footer className="page-footer black">
              <div className="container">
                <div className="row">
                  
                  <div className="col l12 s12 center align">
                    <h5 className="white-text">QUADFLY</h5>
                  </div>

                  <div className="col s4 center align">
                    <li><Link to="/about-us" className="grey-text text-lighten-3" >Contacto</Link></li>
                  </div>
                  <div className="col s4 center align">
                    <li><Link to="privacy" className="grey-text text-lighten-3">Privacidad</Link></li>
                  </div>
                  <div className="col s4 center align">
                    <li><Link to="/workteam" className="grey-text text-lighten-3">Equipo de trabajo</Link></li>
                  </div>
                </div>
              </div>
              <div className="footer-copyright center-align">
                <div className="container">
                © 2020 Copyright, todos los derechos reservados.
                </div>
              </div>
            </footer>
            
        );
    }
}

export default Footer;