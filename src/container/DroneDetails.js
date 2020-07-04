import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import BuyButton from '../components/BuyButton';
//import Three from '../components/ThreeViewer';

function DroneDetails (props) {


        const [drone, setDrone] = useState(null); 
        const [droneMedia, setDroneMedia] = useState(null); 
        const nick = props.match.params.name.split('-');    
        const [isLoading, setLoading] = useState(true);      

        const loadDroneMedia = (droneNick) => 
        {

            let droneMedia;
            
            if(droneNick === "spark")
            {
                droneMedia = 
                {
                    almacenamiento: 'imgs/spark_almacenamiento.jpg',
                    bateria: 'imgs/spark_bateria.jpg',
                    camara: 'imgs/spark_cámara.jpg',
                    precio: 'imgs/spark_precio.jpg',
                    droneImg: 'imgs/spark11.jpg',
                    transmision: "imgs/spark_transmision.jpg",
                    droneVideo: 'imgs/spark_spark_video.gif' 
                };
             
                return droneMedia;

            }

            if(droneNick === "mavicair")
            {
                droneMedia = 
                {
                    almacenamiento: 'imgs/mavic_almacenamiento.jpg',
                    bateria: 'imgs/mavic_bateria.jpg',
                    camara: 'imgs/mavic_cámara.jpg',
                    precio: 'imgs/mavic_precio.jpg',
                    droneImg: 'imgs/mavic_mavic.jpg',
                    transmision: "imgs/mavic_transmision.jpg",
                    droneVideo: 'imgs/mavic_video_mavic.gif' 
                };
           
                return droneMedia;
            }

            if(droneNick === "phantom")
            {
                droneMedia = 
                {
                    almacenamiento: 'imgs/phantom_almacenamiento.jpg',
                    bateria: 'imgs/phantom_bateria.jpg',
                    camara: 'imgs/phantom_camara.jpg',
                    precio: 'imgs/phantom_precio.jpg',
                    droneImg: 'imgs/phantom_phantom.jpg',
                    transmision: "imgs/phantom_transmision.jpg",
                    droneVideo: 'imgs/phantom_video_phantom.gif' 
                };
                return droneMedia;
            }

            if(droneNick === "yuneec")
            {
                droneMedia = 
                {
                    almacenamiento: 'imgs/yuneec_almacenamiento.jpg',
                    bateria: 'imgs/yuneec_bateria.jpg',
                    camara: 'imgs/yuneec_camara.jpg',
                    precio: 'imgs/yuneec_precio.jpg',
                    droneImg: 'imgs/yuneec_mantis_g.jpg',
                    transmision: "imgs/yuneec_transmicion.jpg",
                    droneVideo: 'imgs/yuneec_video.gif' 
                };

                return droneMedia;
            }

       
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
                
            }, 5000);
            
            return () => clearInterval(timeId)          
        }, []);

        useEffect(() => {
            let dm = loadDroneMedia(nick[1]);
            setDroneMedia(dm);
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
                            <BuyButton _id={drone['_id']} isAddOrBuy="add"/>
                            <BuyButton _id={drone['_id']} isAddOrBuy="buy"/>
                            

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