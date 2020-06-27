import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Three from '../components/ThreeViewer';
import card4 from '../assets/Image/DroneDetails/mavic_air_2.jpg';
import video1 from '../assets/Image/DroneDetails/video_mavic.gif';
import imgspark from '../public/imgs/spark/spark11.jpg';

function DroneDetails (props) {


        const [drone, setDrone] = useState(null); 
        const [droneMedia, setDroneMedia] = useState(null); 
        const nick = props.match.params.name.split('-');    
        const [isLoading, setLoading] = useState(true);      

        const loadDroneMedia = (droneNick) => 
        {

            let droneMedia;

            console.log("hola");
            
            if(droneNick === "spark")
            {
                droneMedia = 
                {
                    almacenamiento: 'imgs/spark/almacenamiento.jpg',
                    bateria: 'imgs/spark/bateria.jpg',
                    camara: 'imgs/spark/cámara.jpg',
                    precio: 'imgs/spark/precio.jpg',
                    droneImg: 'imgs/spark/spark11.jpg',
                    transmision: "imgs/spark/transmision.jpg",
                    droneVideo: 'imgs/spark/spark_video.gif' 
                };
                console.log("spark");
                return droneMedia;

            }

            if(droneNick === "mavicair")
            {
                droneMedia = 
                {
                    almacenamiento: 'imgs/mavic/almacenamiento.jpg',
                    bateria: 'imgs/mavic/bateria.jpg',
                    camara: 'imgs/mavic/cámara.jpg',
                    precio: 'imgs/mavic/precio.jpg',
                    droneImg: 'imgs/mavic/mavic.jpg',
                    transmision: "imgs/mavic/transmision.jpg",
                    droneVideo: 'imgs/mavic/video_mavic.gif' 
                };
                console.log("mavic");
                return droneMedia;
            }

            if(droneNick === "phantom")
            {
                droneMedia = 
                {
                    almacenamiento: 'imgs/phantom/almacenamiento.jpg',
                    bateria: 'imgs/phantom/bateria.jpg',
                    camara: 'imgs/phantom/camara.jpg',
                    precio: 'imgs/phantom/precio.jpg',
                    droneImg: 'imgs/phantom/phantom.jpg',
                    transmision: "imgs/phantom/transmision.jpg",
                    droneVideo: 'imgs/phantom/video_phantom.gif' 
                };
                console.log("phantom");
                return droneMedia;
            }

            if(droneNick === "yuneec")
            {
                droneMedia = 
                {
                    almacenamiento: 'imgs/yuneec/almacenamiento.jpg',
                    bateria: 'imgs/yuneec/bateria.jpg',
                    camara: 'imgs/yuneec/camara.jpg',
                    precio: 'imgs/yuneec/precio.jpg',
                    droneImg: 'imgs/yuneec/yuneec_mantis_g.jpg',
                    transmision: "imgs/yuneec/transmición.jpg",
                    droneVideo: 'imgs/yuneec/yuneec_video.gif' 
                };
                console.log("yunnec");
                return droneMedia;
            }

            console.log("fin");
       
        }

        const loadDroneDetails = () => 
        {
            fetch('api/drones/nick/'+nick[1])
            .then(function(response) {
            return response.json();
            })
            .then(function(data) { 
            setDrone(data[0]); 
            setLoading(false);
            });

            
        }
        
        
        
        useEffect(() => {
            
            const timeId = setInterval(() => {
                loadDroneDetails();
                console.log("print");
                
            }, 5000);
            
            return () => clearInterval(timeId)          
        });

        useEffect(() => {
            let dm = loadDroneMedia(nick[1]);
            setDroneMedia(dm);
            console.log(dm);
        },[]);

        return (
            isLoading 
            ? <Loading/>
            : <div>

            <div className="container"> 
                <div className="col s12 m12 l12">
                    <img src={droneMedia['droneVideo']} className="responsive-img" alt="" id="bannerMavicAir" width="100%"/>
                </div>

                <div className="row" id="r1">

                <div className="col s12 m12 l12" id="r1-col1">


                    <div className="col s12 m6">
                    <div className="card horizontal ">

                    <div className="card-image waves-effect">
                        <img src={droneMedia['droneImg']} alt="" className="activator" />
                        <a href="2"></a>
                    </div>

                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{drone['name']}<i className="material-icons right">more_vert</i></span>
                    </div>

                    <div className="card-reveal">
                              <span className="card-title grey-text text-darken-4">{drone['name']}<i className="material-icons right">close</i></span>
                        <p>{drone['description']}</p>
                    </div>

                    </div>
                    </div>

                    <div className="col s12 m6">
                    <div className="card horizontal">
                                
                        <div className="card-image waves-effect">
                            <img src={droneMedia['bateria']} alt="" className="activator" />
                            <a href="2"></a>
                        </div>

                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Bateria<i className="material-icons right">more_vert</i></span>
                        </div>

                        <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Bateria<i className="material-icons right">close</i></span>
                            <p>{drone['batery']}</p>
                        </div>
                    </div>
                    </div>

                </div>
                
                </div>

                <div className="row" id="r2">

                <div className="col s12 m12 l12" id="r1-col1">


                    <div className="col s12 m6">
                    <div className="card horizontal ">

                    <div className="card-image waves-effect">
                        <img src={droneMedia['almacenamiento']} alt="" className="activator" />
                        <a href="2"></a>
                    </div>

                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Almacenamiento<i className="material-icons right">more_vert</i></span>
                    </div>

                    <div className="card-reveal">
                              <span className="card-title grey-text text-darken-4">Almacenamiento<i className="material-icons right">close</i></span>
                        <p>{drone['storage']}</p>
                    </div>

                    </div>
                    </div>

                    <div className="col s12 m6">
                    <div className="card horizontal">
                                
                        <div className="card-image waves-effect">
                            <img src={droneMedia['camara']} alt="" className="activator" />
                            <a href="2"></a>
                        </div>

                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Camara<i className="material-icons right">more_vert</i></span>
                        </div>

                        <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Camara<i className="material-icons right">close</i></span>
                            <p>{drone['camera']}</p>
                            <p>Gimbal: {drone['gimbal']}</p>
                        </div>
                    </div>
                    </div>

                </div>
                
                </div>

                <div className="row" id="r3">

                <div className="col s12 m12 l12" id="r1-col1">


                    <div className="col s12 m6">
                    <div className="card horizontal ">

                    <div className="card-image waves-effect">
                        <img src={droneMedia['transmision']} alt="" className="activator" />
                        <a href="2"></a>
                    </div>

                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Transmisión<i className="material-icons right">more_vert</i></span>
                    </div>

                    <div className="card-reveal">
                              <span className="card-title grey-text text-darken-4">Transmisión<i className="material-icons right">close</i></span>
                              <p>{drone['videoTransmission']}</p>
                              <span className="card-title grey-text text-darken-4">Focus Track<i className="material-icons right">close</i></span>
                              <p>{drone['focusTrack']}</p>
                              <span className="card-title grey-text text-darken-4">Evación de obstaculos<i className="material-icons right">close</i></span>
                              <p>{drone['avoidObstacles']}</p>
                    </div>

                    </div>
                    </div>

                    <div className="col s12 m6">
                    <div className="card horizontal">
                                
                        <div className="card-image waves-effect">
                            <img src={droneMedia['precio']} alt="" className="activator" />
                            <a href="2"></a>
                        </div>

                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Precio</span>
                            <span className="card-title activator grey-text text-darken-4">${drone['price']}</span>
                        </div>

                    </div>
                    </div>

                </div>
                
                </div>

            </div>
            </div> 
        );
        
}

export default DroneDetails;