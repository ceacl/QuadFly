import React, { Component } from 'react';
import axios from 'axios';
import mavic2 from '../assets/Image/Home/banner.jpg';

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
            if (key % 2) {
                tempArray.push(
                    <div className="row">
                        <div className="col s12 m12 l12">
                            <div className="card horizontal">
                                <div className="card-image waves-effect">
                                    <img src={mavic2} />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator black-text">{each.name}</span>
                                    <p className="black-text">{each.description}</p>
                                    <a className="waves-effect waves-light btn black white-text" id="btn" >COMPRAR</a>
                                    <a className="waves-effect waves-light btn black white-text" id="btn" >VER MÁS</a>
                                    <li className="waves-effect waves-light btn black white-text" id="btn" value={values} onClick={this.addCart}>Añadir al carrito</li>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else {
                tempArray.push(
                    <div className="row">
                        <div className="col s12 m12 l12">
                            <div className="card horizontal black white-text">
                                <div className="card-image waves-effect">
                                    <img src={mavic2} />
                                </div>
                                <div className="card-content">
<span className="card-title activator white-text">{each.name}</span>
                                    <p className="black-text white-text">{each.description}</p>
                                    <a className="waves-effect waves-light btn white black-text" id="btn" >COMPRAR</a>
                                    <a className="waves-effect waves-light btn white black-text" id="btn" >VER MÁS</a>
                                                                        <li className="waves-effect waves-light btn white black-text" id="btn" value={values} onClick={this.addCart}>Añadir al carrito</li>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
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