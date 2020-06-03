import React, { Component } from 'react'
import parallax1 from '../assets/Image/AboutUs/parallax1.jpg';
import parallax2 from '../assets/Image/AboutUs/parallax2.jpg';
import parallax3 from '../assets/Image/AboutUs/parallax3.jpg';
import parallax4 from '../assets/Image/AboutUs/parallax4.jpg';

class AboutUs extends Component{
    render()
    {
        return(
            <div className="container">


            <div className="parallax-container">
                <div className="parallax">
                    <img className="responsive-img" src={parallax1} alt=""/>
                </div>
            </div>


            <div className="black white-text center">
                <div className="container">
                <div className="section">
                    <h3>QUADFLY</h3>
                    <h6>Somos una empresa dedicada exclusivamente a la venta de drones de alta calidad.</h6>
                </div>
                </div>
            </div>


            <div className="parallax-container">
                <div className="parallax">
                    <img className="responsive-img" src={parallax2} alt=""/>
                </div>
            </div>
    
    
            <div className="black white-text center">
                <div className="container">
                <div className="section">
                    <h3>CLIENTE</h3>
                    <h6>Lo más importante para nuestra empresa es la satisfacción del cliente al usar nuestros productos.</h6>
                </div>
                </div>
            </div>
    
    
            <div className="parallax-container">
                <div className="parallax">
                    <img className="responsive-img" src={parallax3} alt=""/>
                </div>
            </div>
    
    
            <div className="black white-text center">
                <div className="container">
                <div className="section">
                    <h3>Vision</h3>
                    <h6>Ser la empresa preferida por los clientes, gracias a su calidad y servicio al cliente.</h6>
                </div>
                </div>
            </div>
    

            <div className="parallax-container">
                <div className="parallax">
                    <img className="responsive-img" src={parallax4} alt=""/>
                </div>
            </div>
    

            </div>
        );
    }
}

export default AboutUs;
