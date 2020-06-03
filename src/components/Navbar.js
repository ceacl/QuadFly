import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/Image/Icons/white_logo.png';

class Navbar extends Component {
    render() {
        return (

            <nav className="nav-wrapper black" id="navstyle">

                <div className="container">

                    <Link to="/" className="brand-logo left hide-on-med-and-down">
                        <img className="responsive-img" src={icon} alt="" />
                    </Link>

                    <Link to="/" data-target="menu-responsive" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </Link>

                    <ul className="right  hide-on-med-and-down black-text ">
                        <li><Link to="/mavicair/1">Mavic Air 2</Link></li>
                        <li><Link to="/spark/2">Spark</Link></li>
                        <li><Link to="/phantom/3">Phantom</Link></li>
                        <li><Link to="/products">Catalogo</Link></li>
                        <li><Link to="/about-us">Nosotros</Link></li>
                    </ul>
                    <ul className="sidenav" id="menu-responsive">
                        <li><Link to="/mavicair/1" className="black-text">Mavic Air 2</Link></li>
                        <li><Link to="/spark/2" className="black-text">Spark</Link></li>
                        <li><Link to="/phantom/1" className="black-text">Phantom</Link></li>
                        <li><Link to="/products" className="black-text">Catalogo</Link></li>
                        <li><Link to="/about-us" className="black-text">Nosotros</Link></li>
                    </ul>

                </div>

            </nav>

        );
    }
}

export default Navbar;