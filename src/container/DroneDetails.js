import React, { Component } from 'react';

import card4 from '../assets/Image/DroneDetails/mavic_air_2.jpg';
import video1 from '../assets/Image/DroneDetails/video_mavic.gif';


class DroneDetails extends Component {
    render() {
        return (
            <div>
                <div className="container">

                    <div className="col s12 m12 l12">
                        <img src={video1} className="responsive-img" alt="" id="bannerMavicAir" />
                    </div>


                    <div className="row">





                        <div className="col s12 m6">
                            <div className="card horizontal">
                                <div className="card-image waves-effect">
                                    <img src={card4} alt="" className="activator" />
                                </div>


                                <div className="card-content">
                                    <span className="card-title activator black-text">Mavic Air 2<i className="material-icons right">more_vert</i></span>

                                    <p className="black-text">Capta grandiosas escenas con el mejor drone hasta la fecha</p>
                                </div>

                                <div className="card-reveal">
                                    <span className="card-title black-text">Mavic Air 2<i className="material-icons right">close</i></span>
                                    <p className="black-text">Mavic Air lleva la potencia y la portabilidad al siguiente nivel, ofreciendo características avanzadas en un formato compacto. Las funciones de disparo inteligentes y la excelente calidad de imagen ponen al alcance las obras maestras aéreas. Un vuelo más seguro e inteligente le permite mejorar su juego mientras disfruta plenamente del proceso creativo.</p>
                                </div>
                            </div>
                        </div>






                        <div className="col s12 m6">
                            <div className="card horizontal">
                                <div className="card-image waves-effect">
                                    <img src={card4} alt="" className="activator" />
                                </div>


                                <div className="card-content">
                                    <span className="card-title activator black-text">Bateria<i className="material-icons right">battery_charging_full</i></span>

                                    <p className="black-text">Posee una autonomia de hasta 34 minutos por carga.</p>
                                </div>

                                <div className="card-reveal">
                                    <span className="card-title black-text">Bateria<i className="material-icons right">close</i></span>
                                    <p className="black-text">Su autonomía por carga es de 34 minutos, carga suficiente para poder realizar tomas increíbles. </p>
                                </div>
                            </div>
                        </div>




                        <div className="col s12 m6">
                            <div className="card horizontal">
                                <div className="card-image waves-effect">
                                    <img src={card4} alt="" className="activator" />
                                </div>


                                <div className="card-content">
                                    <span className="card-title activator black-text">Bateria<i className="material-icons right">battery_charging_full</i></span>
                                    <p className="black-text">Posee una autonomia de hasta 34 minutos por carga.</p>
                                </div>

                                <div className="card-reveal">
                                    <span className="card-title black-text">Bateria<i className="material-icons right">close</i></span>
                                    <p className="black-text">Su autonomía por carga es de 34 minutos, carga suficiente para poder realizar tomas increíbles. </p>
                                </div>
                            </div>
                        </div>



                        <div className="col s12 m6">
                            <div className="card horizontal">
                                <div className="card-image waves-effect">
                                    <img src={card4} alt="" className="activator" />
                                </div>


                                <div className="card-content">
                                    <span className="card-title activator black-text">Mavic Air 2<i className="material-icons right">more_vert</i></span>

                                    <p className="black-text">Capta grandiosas escenas con el mejor drone hasta la fecha</p>
                                </div>

                                <div className="card-reveal">
                                    <span className="card-title black-text">Mavic Air 2<i className="material-icons right">close</i></span>
                                    <p className="black-text">Mavic Air lleva la potencia y la portabilidad al siguiente nivel, ofreciendo características avanzadas en un formato compacto. Las funciones de disparo inteligentes y la excelente calidad de imagen ponen al alcance las obras maestras aéreas. Un vuelo más seguro e inteligente le permite mejorar su juego mientras disfruta plenamente del proceso creativo.</p>
                                </div>
                            </div>
                        </div>





                    </div>

                </div>
            </div>
        )
    }
}

export default DroneDetails;