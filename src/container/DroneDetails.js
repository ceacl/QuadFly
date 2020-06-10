import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import card4 from '../assets/Image/DroneDetails/mavic_air_2.jpg';
import video1 from '../assets/Image/DroneDetails/video_mavic.gif';

function DroneDetails (props) {

        
        const nick = props.match.params.name.split('-');    
        const [isLoading, setLoading] = useState(true);
        const [drone, setDrone] = useState(null)

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
                
            }, 10000);
            
            return () => clearInterval(timeId)          
        });


        return (
            
            isLoading 
            ? <Loading/>
            :

            <div>
            <div className="container"> 
             
                <div className="col s12 m12 l12">
                    <img src={video1} className="responsive-img" alt="" id="bannerMavicAir" width="100%" />
                </div>


                <div className="row">
 

                    <div className="col s12 m6">
                    <div className="card horizontal">

                        <div className="card-content">
                            <span className="card-title activator black-text">{drone['name']}<i className="material-icons right">more_vert</i></span>
                            <p className="black-text">{drone['description']}</p>
                        </div>

                    </div>
                    </div>


                    <div className="col s12 m6">
                    <div className="card horizontal">
                                
                        <div className="card-content">
                            <span className="card-title activator black-text">Bateria<i className="material-icons right">battery_charging_full</i></span>
                            <p className="black-text">{drone['batery']}</p>
                        </div>

                    </div>
                    </div>

                </div>

                <div className="col s12 m12 l12">
                    <img src={video1} className="responsive-img" alt="" id="bannerMavicAir" width="100%" />
                </div>

                <div className="row">
 

                <div className="col s12 m6">
                <div className="card horizontal">
                            
                    <div className="card-content">
                        <span className="card-title activator black-text">Camara<i className="material-icons right">more_vert</i></span>
                        <p className="black-text">{drone['camera']}</p>
                    </div>

                </div>
                </div>


                <div className="col s12 m6">
                <div className="card horizontal">
                

                    <div className="card-content">
                        <span className="card-title activator black-text">Transimision de video<i className="material-icons right">battery_charging_full</i></span>
                        <p className="black-text">{drone['videoTransmission']}</p>
                    </div>

                </div>
                </div>

                </div>

                <div className="col s12 m12 l12">
                    <img src={video1} className="responsive-img" alt="" id="bannerMavicAir" width="100%"/>
                </div>

                <div className="row">
 

                <div className="col s12 m6">
                <div className="card horizontal">
                            
                   
                    <div className="card-content">
                        <span className="card-title activator black-text">Almacenamiento<i className="material-icons right">more_vert</i></span>
                        <p className="black-text">{drone['storage']}</p>
                    </div>

                </div>
                </div>


                <div className="col s12 m6">
                <div className="card horizontal">
                            
                    <div className="card-content">
                        <span className="card-title activator black-text">Precio:<i className="material-icons right">battery_charging_full</i></span>
                        <p className="black-text">{"$"+drone['price']}</p>
                    </div>

                </div>
                </div>

                </div>

            
            
            
            
            
            
            
            </div> 
            </div> 
        );
        
}

export default DroneDetails;