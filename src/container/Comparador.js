import React, { Component } from 'react';
import Select from "react-select";
import axios from 'axios';
import mavic2 from '../assets/Image/Home/banner.jpg';
import top_right_card2 from '../assets/Image/DroneDetails/mavic mini.png';


class Comparator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drone1: [{
                camera: "N/A",
                batery: "N/A",
                storage: "N/A",
                videoTransmission: "N/A",
                focusTrack: "N/A",
                gimbal: "N/A",
                avoidObstacles: "N/A",
                description: "N/A",
                price: "0",
            }],
            drone2: [{
                camera: "N/A",
                batery: "N/A",
                storage: "N/A",
                videoTransmission: "N/A",
                focusTrack: "N/A",
                gimbal: "N/A",
                avoidObstacles: "N/A",
                description: "N/A",
                price: "0",
            }],
            user: '5eead62677edc915e83e5022',
            drones: [{}],
            users: [{}],
            shopping: [{}],

        };

        this.droneSelector1 = this.droneSelector1.bind(this);
        this.droneSelector2 = this.droneSelector2.bind(this);
        this.addCart1 = this.addCart1.bind(this);
        this.addCart2 = this.addCart2.bind(this);


    };

    componentDidMount() {

        document.getElementById("btnAdd1").style.display = "none";
        document.getElementById("btnAdd2").style.display = "none";

        axios.get('/api/cart/cart')
            .then(response => {
                this.state.shopping = response.data;
                this.setState({
                    shopping: response.data
                });
            });

        axios.get('/api/drones/drones')
            .then(response => {
                this.state.drones = response.data;
                this.setState({
                    drones: response.data
                });
            });
    }

    droneSelector1(event) {
        document.getElementById("btnAdd1").style.display = "block";
        axios.get('/api/drones/nick/' + event.value).then(response => {
            this.state.drone1 = response.data;
            this.setState({
                drone1: response.data
            });
        });
    }

    droneSelector2(event) {
        document.getElementById("btnAdd2").style.display = "block";
        axios.get('/api/drones/nick/' + event.value).then(response => {
            this.state.drone2 = response.data;
            this.setState({
                drone2: response.data
            });
        });
    }

    addCart1() {
        var quantity = 0;
        this.state.shopping.map((eachS, keyS) => {
            if (eachS.productid == this.state.drone1[0]._id) {
                quantity = 1;
            }
        });
        if (quantity == 1) {
            this.state.shopping.map((eachS, keyS) => {
                if (eachS.productid == this.state.drone1[0]._id) {
                    this.state.shopping[keyS].quantity = parseInt(this.state.shopping[keyS].quantity) + 1;
                    this.setState({ shopping: this.state.shopping });
                    axios.put(`/api/cart/updateQuantity/${((this.state.shopping[keyS].quantity))}/${eachS._id}`);
                    this.props.history.push(`/sales`);
                }
            });
        } else {
            axios.post('/api/cart/', {
                userid: this.state.user,
                productid: this.state.drone1[0]._id,
                description: this.state.drone1[0].description,
                quantity: 1
            });
            this.props.history.push(`/sales`);
        }
    }

    addCart2() {
        var quantity = 0;
        this.state.shopping.map((eachS, keyS) => {
            if (eachS.productid == this.state.drone2[0]._id) {
                quantity = 1;
            }
        });
        if (quantity == 1) {
            this.state.shopping.map((eachS, keyS) => {
                if (eachS.productid == this.state.drone2[0]._id) {
                    this.state.shopping[keyS].quantity = parseInt(this.state.shopping[keyS].quantity) + 1;
                    this.setState({ shopping: this.state.shopping });
                    axios.put(`/api/cart/updateQuantity/${((this.state.shopping[keyS].quantity))}/${eachS._id}`);
                    this.props.history.push(`/sales`);
                }
            });
        } else {
            axios.post('/api/cart/', {
                userid: this.state.user,
                productid: this.state.drone2[0]._id,
                description: this.state.drone2[0].description,
                quantity: 1
            });
            this.props.history.push(`/sales`);
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h4>Comparador de drones</h4>
                    <div className="card">
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <p className="card-title center-align">Drone</p>
                                <div className="col s5 m5 l5 center-align">
                                    <Select
                                        onChange={this.droneSelector1}
                                        isDisabled={this.state.buttonDisabled}
                                        options={this.state.drones.map(function (json) {
                                            return {
                                                label: json.name,
                                                value: json.nickname
                                            };
                                        })}
                                    />
                                    <br />
                                    <img className="card-panel" src={top_right_card2} width="100%" height="100%" />
                                </div>
                                <div className="col s2 m2 l2 center-align">

                                </div>
                                <div className="col s5 m5 l5 center-align">
                                    <Select
                                        onChange={this.droneSelector2}
                                        isDisabled={this.state.buttonDisabled}
                                        options={this.state.drones.map(function (json) {
                                            return {
                                                label: json.name,
                                                value: json.nickname
                                            };
                                        })}
                                    />
                                    <br />
                                    <img className="card-panel" src={top_right_card2} width="100%" height="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row">
                            <div className="col s12 m12 l12">

                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>{this.state.drone1[0].camera}</p>
                                </div>
                                <div className="col s2 m2 l2 center-align">
                                    <p className="card-title center-align">Cámara</p>
                                    <i className="material-icons medium" >photo_camera</i>

                                </div>
                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>{this.state.drone2[0].camera}</p>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>{this.state.drone1[0].batery}</p>
                                </div>
                                <div className="col s2 m2 l2 center-align">
                                    <p className="card-title center-align">Batería</p>
                                    <i className="material-icons medium">battery_charging_full</i>
                                </div>
                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>{this.state.drone2[0].batery}</p>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>{this.state.drone1[0].storage}</p>
                                </div>
                                <div className="col s2 m2 l2 center-align">
                                    <p className="card-title center-align">Memoria</p>
                                    <i className="material-icons medium">sd_storage</i>
                                </div>
                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>{this.state.drone2[0].storage}</p>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>{this.state.drone1[0].videoTransmission}</p>
                                </div>
                                <div className="col s2 m2 l2 center-align">
                                    <p className="card-title center-align">Video</p>
                                    <i className="material-icons medium">videocam</i>
                                </div>
                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>{this.state.drone2[0].videoTransmission}</p>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="row">
                            <div className="col s12 m12 l12">

                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>{this.state.drone1[0].focusTrack}</p>
                                </div>
                                <div className="col s2 m2 l2 center-align">
                                    <p className="card-title center-align">Enfoque</p>
                                    <i className="material-icons medium">center_focus_strong</i>
                                </div>
                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>{this.state.drone2[0].focusTrack}</p>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>{this.state.drone1[0].gimbal}</p>
                                </div>
                                <div className="col s2 m2 l2 center-align">
                                    <p className="card-title center-align">Estabilidad</p>
                                    <i className="material-icons medium">flight</i>
                                </div>
                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>{this.state.drone2[0].gimbal}</p>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>{this.state.drone1[0].avoidObstacles}</p>
                                </div>
                                <div className="col s2 m2 l2 center-align">
                                    <p className="card-title center-align">Esquiva Obstáculos</p>
                                    <i className="material-icons medium">alt_route</i>
                                </div>
                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>{this.state.drone2[0].avoidObstacles}</p>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>{this.state.drone1[0].description}</p>
                                </div>
                                <div className="col s2 m2 l2 center-align">
                                    <p className="card-title center-align">Descripción</p>
                                    <i className="material-icons medium">description</i>
                                </div>
                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>{this.state.drone2[0].description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>${this.state.drone1[0].price}</p>
                                </div>
                                <div className="col s2 m2 l2 center-align">
                                    <p className="card-title center-align">Precio</p>
                                    <i className="material-icons medium">attach_money</i>
                                </div>
                                <div className="col s5 m5 l5 center-align">
                                    <p style={{ paddingTop: 60 }}>${this.state.drone2[0].price}</p>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <div className="col s5 m5 l5 center-align">
                                    <a className="waves-effect waves-light btn black white-text" id="btnAdd1" onClick={this.addCart1}><i className="material-icons">add_shopping_cart</i></a>
                                </div>
                                <div className="col s2 m2 l2 center-align">
                                </div>
                                <div className="col s5 m5 l5 center-align">
                                    <a className="waves-effect waves-light btn black white-text" id="btnAdd2" onClick={this.addCart2}><i className="material-icons">add_shopping_cart</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comparator;