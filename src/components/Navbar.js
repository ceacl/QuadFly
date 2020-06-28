import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/Image/Icons/white_logo.png';
import cart from '../public/imgs/carritoNav.png';
import serch from '../public/imgs/Busca.png';

class Navbar extends Component {
    render() {
        return (

            <nav className="nav-wrapper black" id="navstyle">

                <Link to="/" className="brand-logo left hide-on-med-and-down">
                    <img className="responsive-img" src={icon} alt="" />
                </Link>

                <Link to="/" data-target="menu-responsive" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </Link>

                <div className="container">

                    <ul className="right hide-on-med-and-down black-text ">
                        <li><Link to="/mavic-mavicair">Mavic Air 2</Link></li>
                        <li><Link to="/spark-spark">Spark</Link></li>
                        <li><Link to="/products">Catalogo</Link></li>
                        <li><Link to="/comparator">Comparador</Link></li>
                        <li><Link to="/about-us">Nosotros</Link></li>
                        <li ><Link to="/sales" >
                            <img className="responsive-img" src={cart} alt="" width="50%" height="50%" />
                        </Link></li>
                    </ul>
                    <ul className="sidenav" id="menu-responsive">
                        <li><Link to="/mavic-mavicair" className="black-text">Mavic Air 2</Link></li>
                        <li><Link to="/spark-spark" className="black-text">Spark</Link></li>
                        <li><Link to="/products/" className="black-text">Catalogo</Link></li>
                        <li><Link to="/comparator" className="black-text">Comparador</Link></li>
                        <li><Link to="/about-us" className="black-text">Nosotros</Link></li>
                        <li ><Link to="/sales" className=" black-text" >Carrito de compras</Link></li>
                    </ul>

                </div>

            </nav>

        );
    }
}

export default Navbar;