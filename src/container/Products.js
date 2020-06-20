import React, { Component } from 'react'
import mavic2 from '../assets/Image/Home/banner.jpg';
import Three from '../container/ThreeContainer';

class Products extends Component {
    render() {

        return (

            <div>
      

                <div className="container">

                    <div className="row">

                        <div className="col s12 m12 l12">

                            <div className="card ">
                                <div className="card-image waves-effect">
                                    <img src={mavic2} alt="" />
                                    <span className="card-title">Mavic Air 2</span>
                                </div>

                                <div className="card-content">
                                    <span className="card-title activator black-text">Mavic Air 2</span>
                                    <p className="black-text">Capta grandiosas escenas con el mejor drone hasta la fecha</p>



                                    <a className="waves-effect waves-light btn black white-text" id="btn" >COMPRAR</a>
                                    <a className="waves-effect waves-light btn black white-text" id="btn" >VER MÁS</a>
                                    <a className="waves-effect waves-light btn black white-text" id="btn"><i className="material-icons">add_shopping_cart</i></a>

                                </div>


                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Products;