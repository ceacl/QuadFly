import React, { Component } from 'react'
import axios from 'axios';
import mavic2 from '../assets/Image/Home/banner.jpg';
import top_right_card2 from '../assets/Image/DroneDetails/mavic mini.png';
import mavic from '../public/imgs/Comparador y Carrito/mavic air 2.jpg';
import phantom from '../public/imgs/Comparador y Carrito/phantom.jpg';
import spark from '../public/imgs/Comparador y Carrito/spark.jpg';
import yuunec from '../public/imgs/Comparador y Carrito/yuunec.jpg';

class Sales extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            user: '5eead62677edc915e83e5022',
            quantity: 1,
            drones: [{}],
            users: [{}],
            shopping: [{}],

        };
        this.increment = this.increment.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.decrement = this.decrement.bind(this);
        this.delete = this.delete.bind(this);
        this.createTable = this.createTable.bind(this);
        this.total = this.total.bind(this);
        this.createSug = this.createSug.bind(this);
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



    increment(event) {
        this.state.shopping.map((each, key) => {
            if (key == event.target.value) {
                if (this.state.shopping[key].quantity == "") {
                    this.state.shopping[key].quantity = 1;
                    this.setState({ shopping: this.state.shopping });
                    axios.put(`/api/cart/updateQuantity/${this.state.shopping[key].quantity}/${each._id}`);
                } else {
                    this.state.shopping[key].quantity = parseInt(this.state.shopping[key].quantity) + 1;
                    this.setState({ shopping: this.state.shopping });
                    axios.put(`/api/cart/updateQuantity/${this.state.shopping[key].quantity}/${each._id}`);
                }
            }
        });

    };

    changeValue(event) {

        $(document).ready(function () {
            M.updateTextFields();
        });

        this.state.drones.map((each, key) => {
            if (key == event.target.value) {
                if (!isNaN(event.target.value)) {
                    this.state.drones[key].quantity = event.target.value;
                    this.setState({ drones: this.state.drones });
                }
            }
        });
    };

    decrement(event) {
        this.state.shopping.map((each, key) => {
            if (key == event.target.value) {
                if (this.state.shopping[key].quantity > 1) {
                    this.state.shopping[key].quantity = parseInt(this.state.shopping[key].quantity) - 1;
                    this.setState({ shopping: this.state.shopping });
                    axios.put(`/api/cart/updateQuantity/${this.state.shopping[key].quantity}/${each._id}`);
                }
            }
        });
    };

    delete(event) {
        this.state.shopping.map((each, key) => {

            if (key == event.target.value) {
                axios.delete('/api/cart/' + each._id);
            }
        });
        window.location.reload(true);
    };

    total(event) {

        var subtatal = 0;

        this.state.shopping.map((eachTo, keyTo) => {
            this.state.drones.map((eachT, keyT) => {
                if (eachT._id == this.state.shopping[keyTo].productid) {
                    subtatal = subtatal + (parseInt(this.state.drones[keyT].price) * parseInt(this.state.shopping[keyTo].quantity));
                }

            });
        });

        this.state.total = subtatal;
    };
    addCart(event) {

        axios.post('/api/cart/', {
            userid: this.state.user,
            productid: this.state.drones[event.target.value]._id,
            description: this.state.drones[event.target.value].description,
            quantity: 1
        });

        window.location.reload(true);
    }


    createTable() {

        var tempArray = [];
        var values = "";
        this.state.shopping.map((eachC, keyC) => {
            this.state.drones.map((each, key) => {
                values = keyC;
                if (each._id == this.state.shopping[keyC].productid) {
                    tempArray.push(
                        <div className="card horizontal ">
                            <div className="col s6 m6 l4">
                                {each.nickname == "spark" &&
                                    <img src={spark} width="100%" height="100%" />
                                }
                                {each.nickname == "mavicair" &&
                                    <img src={mavic} width="100%" height="100%" />
                                }
                                {each.nickname == "phantom" &&
                                    <img src={phantom} width="100%" height="100%" />
                                }
                                {each.nickname == "yuneec" &&
                                    <img src={yuunec} width="100%" height="100%" />
                                }
                            </div>
                            <div class="card-stacked col s6 m6 l12">
                                <div className="card-content s6 m6 l12">
                                    <div className="row">
                                        <h5 className="center-align">{each.name}</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col s12 m12 l4">
                                            <li className="col s4 m4 l4 waves-effect waves-light center-align" id="btnRemove" value={values} onClick={this.decrement}>-</li>
                                            <input type="text" id="txtquantity" className="col s3 m4 l4 center-align" value={eachC.quantity} onChange={this.changeValue} />
                                            <li className="col s4 m4 l4 waves-effect waves-light center-align" id="btnAdd" value={values} onClick={this.increment}>+</li>
                                        </div>
                                        <div className="col s12 m12 l4 center-align" >
                                            <li className="waves-effect waves-light btn" value={values} onClick={this.delete}>Eliminar</li>
                                        </div>
                                        <div className="col s12 m12 l4">
                                            <p className="center-align">Precio:</p>
                                            <p className="center-align">$ {(this.state.shopping[keyC].quantity * this.state.drones[key].price)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
            });
        });
        this.total();
        return tempArray;
    };

    createSug() {
        var tempArray = [];
        var values = "";
        var quantity = 0;
        this.state.drones.map((each, key) => {
            this.state.shopping.map((eachC, keyC) => {

                if (each._id == this.state.shopping[keyC].productid) {
                    quantity = 1
                }
            });
            if (quantity != 1) {
                values = key;
                tempArray.push(
                    <div className="row">
                        <div className="card horizontal">
                            <div className="col s6 m4 l4">
                                {each.nickname == "spark" &&
                                    <img src={spark} width="120px" height="120px" style={{ marginTop: 30 }} />
                                }
                                {each.nickname == "mavicair" &&
                                    <img src={mavic} width="120px" height="120px" style={{ marginTop: 30 }} />
                                }
                                {each.nickname == "phantom" &&
                                    <img src={phantom} width="120px" height="120px" style={{ marginTop: 30 }} />
                                }
                                {each.nickname == "yuneec" &&
                                    <img src={yuunec} width="120px" height="120px" style={{ marginTop: 30 }} />
                                }
                            </div>
                            <div class="card-stacked col s6 m8 l2">
                                <div className="card-content s6 m6 l8">
                                    <h5 className="center-align">{each.name}</h5>
                                    <p className="center-align ">$ {this.state.drones[key].price}</p>
                                    <li className="waves-effect waves-light btn black white-text" id="btn" value={values} onClick={this.addCart}>Añadir</li>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            quantity = 0;
        });
        return tempArray;
    }

    render() {
        return (
            <div>
                <div>
                    <div className="container">
                        <h3>Carrito de compras</h3>
                        <div className="row">
                            <div className="col s12 m7 l8">
                                <div>{this.createTable()}</div>
                                <br />
                                <br />
                            </div>
                            <div className="col s12 m5 l4">

                                <div className="card center-align">
                                    <h5 className="center-align">Precio total:</h5>
                                    <p className="center-align ">$ {this.state.total}</p>
                                    <a className="waves-effect waves-light btn black white-text" id="btn">Pagar</a>
                                </div>

                                <div className="card center-align scrollable col s12 m12 l12" >
                                    <h5 className="center-align">Sugerencias</h5>
                                    <div>{this.createSug()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Sales;