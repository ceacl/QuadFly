import React, { Component } from 'react'
import mavic2 from '../assets/Image/Home/banner.jpg';
import top_right_card2 from '../assets/Image/DroneDetails/mavic mini.png';


class Sales extends Component {

    constructor(props) {
        super(props);
        this.state = {
            price: 0,
            quantity: 1,
            courses: [{ id: 1 }, { id: 2 }, { id: 3 }],
        };
        this.increment = this.increment.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.decrement = this.decrement.bind(this);
        this.delete = this.delete.bind(this);
        this.createTable = this.createTable.bind(this);
    };

    componentDidMount() {
    }

    increment() {
        if (this.state.quantity == "") {
            this.state.quantity = 1;
            this.setState({ quantity: this.state.quantity });
        } else {
            this.state.quantity = parseInt(this.state.quantity);
            this.setState({ quantity: this.state.quantity + 1 });
        }
    };

    changeValue(event) {
        alert(event.target.value);
        if (!isNaN(event.target.value)) {
            this.state.quantity = event.target.value;

            this.setState({ quantity: this.state.quantity });
        }
    };

    decrement() {
        if (this.state.quantity > 1) {
            this.state.quantity = parseInt(this.state.quantity);
            this.setState({ quantity: this.state.quantity - 1 });
        }
    };

    delete(event) {
        alert(event.target.value);
    };

    createTable() {

        var tempArray = [];

        this.state.courses.map((each) => {
            tempArray.push(

                <div className="card horizontal">
                    <div className="col s6 m6 l4">
                        <img src={top_right_card2} width="100%" height="100%" />
                    </div>
                    <div class="card-stacked col s6 m6 l12">
                        <div className="card-content s6 m6 l12">
                            <div className="row">
                                <h5 className="center-align">Mavic Air 2</h5>
                            </div>
                            <div className="row">
                                <div className="col s12 m12 l4">
                                    <a className="col s4 m4 l5 waves-effect waves-light" id="btnAdd" onClick={this.increment}><i className="material-icons">add</i></a>
                                    <input type="text" id="txtquantity" className="col s3 m4 l3 center-align" value={this.state.quantity} onChange={this.changeValue} />
                                    <a className="col s4 m4 l4 waves-effect waves-light" id="btnRemove" onClick={this.decrement}><i className="material-icons">remove</i></a>
                                </div>
                                <div className="col s12 m12 l4 center-align">
                                    <a className="waves-effect waves-light" id="btnDelete" onClick={this.delete}><i className="material-icons">delete</i></a>
                                </div>
                                <div className="col s12 m12 l4">
                                    <p className="center-align">Precio:</p>
                                    <p className="center-align">{this.state.price}</p>
                                </div>
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
                <div>
                    <div className="container">
                        <h1>Carrito de compras</h1>
                        <div className="row">
                            <div className="col s12 m8 l8">
                                <div>{this.createTable()}</div>
                                <br />
                                <br />
                            </div>
                            <div className="col s12 m4 l4">

                                <div className="card center-align">
                                    <h5 className="center-align">Precio total:</h5>
                                    <p className="center-align ">$2000</p>
                                    <a className="waves-effect waves-light btn black white-text" id="btn">Pagar</a>
                                </div>

                                <div className="card center-align scrollable col s12 m12 l12" >
                                    <h5 className="center-align">Sugerencias</h5>
                                    <div className="row">
                                        <div className="card horizontal">
                                            <div className="col s6 m4 l4">
                                                <img src={top_right_card2} width="100%" height="100%" />
                                            </div>
                                            <div class="card-stacked col s6 m8 l2">
                                                <div className="card-content s6 m6 l8">
                                                    <h5 className="center-align">Mavic Air 2</h5>
                                                    <p className="center-align ">$2000</p>
                                                    <a className="waves-effect waves-light btn black white-text" id="btn"><i className="material-icons">add_shopping_cart</i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="card horizontal">
                                            <div className="col s6 m4 l6">
                                                <img src={top_right_card2} width="100%" height="100%" />
                                            </div>
                                            <div class="card-stacked col s6 m8 l2">
                                                <div className="card-content s6 m6 l6">
                                                    <h5 className="center-align">Mavic Air 2</h5>
                                                    <p className="center-align ">$2000</p>
                                                    <a className="waves-effect waves-light btn black white-text" id="btn"><i className="material-icons">add_shopping_cart</i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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