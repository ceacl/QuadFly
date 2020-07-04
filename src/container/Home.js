import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/Image/Home/banner.jpg';
import top_left_card from '../assets/Image/Home/top_left_card.jpg';
import top_right_card1 from '../assets/Image/Home/top_right_card1.jpg';
import top_right_card2 from '../assets/Image/Home/top_right_card2.jpg';
import bottom_card from '../assets/Image/Home/bottom_card.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>


                <div className="col s12 m12 16">
                    <img src={banner} className="responsive-img" alt="" id="bannerHome" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6 l6">
                            <div className="card">
                                <div className="card-image">
                                    <Link to="about-us" className="waves-effect" href="about_us.html">
                                        <img src={top_left_card} alt="" />
                                        <p className="card-title">Conoce más sobre QUADFLY</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l6">
                            <div className="card">
                                <div className="card-image waves-effect">
                                    <Link to="mavic-mavicair" className="waves-effect">
                                        <img src={top_right_card1} alt="" />
                                        <span className="card-title">MAVIC AIR 2</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l6">

                            <div className="card">
                                <div className="card-image waves-effect">
                                    <Link to="spark-spark" className="waves-effect">
                                        <img src={top_right_card2} alt="" />
                                        <span className="card-title">Capta increíbles escenas con el Spark.</span>
                                    </Link>
                                </div>
                            </div>

                        </div>


                        <div className="col s12 m12 l12">

                            <div className="card">
                                <div className="card-image waves-effect">
                                    <Link to="products" className="waves-effect">
                                        <img src={bottom_card} alt="" />
                                        <span className="card-title">Descubre nuestro catálogo.</span>
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
