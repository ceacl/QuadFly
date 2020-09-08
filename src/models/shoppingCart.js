const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShoppingCart = new Schema({

    userid: {type:String, required:true},
    productid: {type:String, required: true},
    description: {type:String , required:false},
    quantity: {type:String , required:true}

}); 

module.exports = mongoose.model('ShoppingCart', ShoppingCart);
