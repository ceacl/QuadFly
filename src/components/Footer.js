import React, { Component } from 'react';
import '../styles/footerstyle.css';

class Footer extends Component 
{
    render(){
        return (
                
            <footer className="page-footer black">
              <div className="container">
                <div className="row">
                  
                  <div className="col l12 s12">
                    <h5 className="white-text">QUADFLY</h5>
                  </div>

                  <div className="col s3">
                    <li><a className="grey-text text-lighten-3" href="#/about-us">Contacto</a></li>
                  </div>
                  <div className="col s3">
                    <li><a className="grey-text text-lighten-3" href="#!">Privacidad</a></li>
                  </div>
                  <div className="col s3">
                    <li><a className="grey-text text-lighten-3" href="#!">Comunidad</a></li>
                  </div>
                  <div className="col s3">
                    <li><a className="grey-text text-lighten-3" href="#!">Equipo de trabajo</a></li>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <div className="container">
                © 2020 Copyright, todos los derechos reservados.
                </div>
              </div>
            </footer>
            
        );
    }
}

export default Footer;