import React, {Component} from 'react';
import  { Link } from 'react-router-dom'
import axios from 'axios';
const user = '5eead62677edc915e83e5022';
let buttonState;
let shoppingCart; 
let cartid;
let quantity;

class BuyButton extends Component 
{

    constructor(props)
    {
        super(props);
       
            this.state = {
                total: 0,
                quantity: 1,
                userBuy: '5eead62677edc915e83e5022',
                droneId: props._id,
                isAddOrBuy: props.isAddOrBuy
            }
            
            buttonState = props.isAddOrBuy;
            this.addCart = this.addCart.bind(this);
            this.incrementQuantity = this.incrementQuantity.bind(this);
        
    };

    componentDidMount()
    {
        let usid = this.state.userBuy;

        fetch('api/cart/cart/'+usid)
        .then(function(response) {
        return response.json();
        })
        .then(function(data) 
        {  
        shoppingCart = data;
        });
    }

    incrementQuantity(q) {return parseInt(q) + 1;}

    addCart(e) 
    {
        if(buttonState === "add")
        {
            e.preventDefault();
        }
        
        let swapped = false; 

        for(let i = 0; i < shoppingCart.length; i++)
        {
            
             if(this.state.droneId === shoppingCart[i]['productid'])
                {
                    swapped = true;
                    cartid = shoppingCart[i]['_id']
                    quantity = shoppingCart[i]['quantity']
                }   
        }

        if(swapped)
        {
            axios.put(`/api/cart/updateQuantity/${this.incrementQuantity(quantity)}/${cartid}`)
            .then( function (response) {
                M.toast({html: 'Agregado al carrito de compras!'});
 
            })
            .catch(err => console.error(err))

        }else{
            
            fetch('/api/cart/', {
                method: 'POST',
                body: JSON.stringify({ userid: this.state.userBuy,
                                       productid: this.state.droneId,
                                       description: 'Add from DroneDetails',
                                       quantity: 1
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Agregado al carrito de compras!'});
     
            })
            .catch(err => console.error(err));   
        }  
    } 
    
    render(){
        return(
        (this.state.isAddOrBuy === "buy")
        ?<Link to="/sales" className="waves-effect waves-light btn black white-text" id="btn" onClick={this.addCart}>Comprar </Link>
        :<a className="waves-effect waves-light btn black white-text" id="btn" onClick={this.addCart}>Añadir a carro</a>
        );
    }
}

export default BuyButton;