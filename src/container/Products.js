import React, { Component } from 'react';
import axios from 'axios';
import mavic2 from '../assets/Image/Home/banner.jpg';
import mavic from '../public/imgs/Comparador y Carrito/mavic air 2.jpg';
import phantom from '../public/imgs/Comparador y Carrito/phantom.jpg';
import spark from '../public/imgs/Comparador y Carrito/spark.jpg';
import yuunec from '../public/imgs/Comparador y Carrito/yuunec.jpg';

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            quantity: 1,
            user: '5eead62677edc915e83e5022',
            drones: [{}],
            users: [{}],
            shopping: [{}],

        };
        this.createTable = this.createTable.bind(this);
        this.addCart = this.addCart.bind(this);
    };

    componentDidMount() {

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

    exit(event) {
        this.state.shopping.map((eachS, keyS) => {
            if (this.state.shopping[keyS].productid == this.state.drones[event.target.value]._id) {
                return true;
            }
        });
        return false;
    }

    addCart(event) {
        var quantity = 0;
        this.state.shopping.map((eachS, keyS) => {
            if (eachS.productid == this.state.drones[event.target.value]._id) {
                quantity = 1;
            }
        });
        if (quantity == 1) {
            this.state.shopping.map((eachS, keyS) => {
                if (eachS.productid == this.state.drones[event.target.value]._id) {
                    this.state.shopping[keyS].quantity = parseInt(this.state.shopping[keyS].quantity) + 1;
                    this.setState({ shopping: this.state.shopping });
                    axios.put(`/api/cart/updateQuantity/${((this.state.shopping[keyS].quantity))}/${eachS._id}`);
                }
            });
        } else {
            axios.post('/api/cart/', {
                userid: this.state.user,
                productid: this.state.drones[event.target.value]._id,
                description: this.state.drones[event.target.value].description,
                quantity: 1
            });
        }
        window.location.reload(true);
    }

    createTable() {

        var tempArray = [];
        var values = "";
        this.state.drones.map((each, key) => {
            values = key;
            tempArray.push(
                <div className="row">
                    <div className="col s12 m12 l12">
                        <div className="card horizontal ">
                            <div className="col s6 m6 l6 card-image waves-effect">
                                {each.nickname == "spark" &&
                                    <img src={spark} style={{ marginLeft: 60 }} width="900px" height="300px" />
                                }
                                {each.nickname == "mavicair" &&
                                    <img src={mavic} style={{ marginLeft: 60 }} width="900px" height="300px" />
                                }
                                {each.nickname == "phantom" &&
                                    <img src={phantom} style={{ marginLeft: 60 }} width="900px" height="300px" />
                                }
                                {each.nickname == "yuneec" &&
                                    <img src={yuunec} style={{ marginLeft: 60 }} width="900px" height="300px" />
                                }
                            </div>
                            <div className="col s6 m6 l6 card-content">
                                <br />
                                <span className="card-title activator black-text center-align">{each.name}</span>
                                <br />
                                <p className="black-text">{each.description}</p>
                                <br />
                                <br />
                                <a className="waves-effect waves-light btn black white-text" id="btn" >COMPRAR</a>
                                <a className="waves-effect waves-light btn black white-text" id="btn" >VER MÁS</a>
                                <li className="waves-effect waves-light btn black white-text" id="btn" value={values} onClick={this.addCart}>Añadir al carrito</li>
                            </div>
                        </div>
                    </div>
                </div>
            );

        });

        return tempArray;
    };


    render() {
        return (
            <div>
                <div className="container">
                    <div>{this.createTable()}</div>
                </div>
            </div>
        )
    }
}

export default Products;