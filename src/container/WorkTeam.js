import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class WorkTeam extends Component
{

    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div className="container">

            <div className="row" id="r1-wt">

            <div className="col s12 m12 l12" id="r1-col1">


                <div className="col s12 m6">
                <div className="card horizontal ">

                <div className="card-image waves-effect">
                    <img src="imgs/ricardo.jpeg" alt="" className="activator" />
                    <a href="2"></a>
                </div>

                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Ricardo Ramírez Méndez</span>
                    <p>Me gusta el desarrollo web y los videojuegos</p>
                </div>

                </div>
                </div>

                <div className="col s12 m6">
                <div className="card horizontal">
                            
                    <div className="card-image waves-effect">
                        <img src="imgs/estrella.jpeg" alt="" className="activator" />
                        <a href="2"></a>
                    </div>

                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Estrella López López</span>
                        <p>Soy estudiante de la carrera Informática Empresarial y me gusta el desarrollo web</p>
                    </div>

                </div>
                </div>

            </div>

            </div>

            <div className="row" id="r1-wt">

            <div className="col s12 m12 l12" id="r1-col1">


                <div className="col s12 m6">
                <div className="card horizontal ">

                <div className="card-image waves-effect">
                    <img src="imgs/jose.jpeg" alt="" className="activator" />
                    <a href="2"></a>
                </div>

                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">José Francisco Arias</span>
                    <p>Me gustan los videojuegos, el fútbol, las películas y series. Además amo la parte técnica de las computadoras. También suelo editar fotos y videos</p>
                </div>

                </div>
                </div>

                <div className="col s12 m6">
                <div className="card horizontal">
                            
                    <div className="card-image waves-effect">
                        <img src="imgs/cesar.jpg" alt="" className="activator" />
                        <a href="2"></a>
                    </div>

                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">César Castro López</span>
                        <p>Soy desarrollador de software frontend, me gustan los deportes, la tecnología, la música y relacionarme con las personas</p>
                    </div>

                </div>
                </div>

            </div>

            </div>

            <div className="row" id="r1-wt">

            <div className="col s12 m12 l12" id="r1-col1">

                <div className="col s12 m6">
                <div className="card horizontal">
                            
                    <div className="card-image waves-effect">
                        <img src="imgs/alejandro.jpg" alt="" className="activator" />
                        <a href="2"></a>
                    </div>

                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Alejandro Rojas</span>
                        <p>Soy estudiante de la Universidad de Costa Rica en la carrera de Informática Empresarial. Me gustan los video juegos y el desarrollo de software</p>
                    </div>

                </div>
                </div>

            </div>

            </div>

            </div>
        );
    };
}

export default WorkTeam;