const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShoppingCart = new Schema({

    userid: {type: String, required:true},
    productid: {type:String, required: true},
    description: {type:String , required:false}

}); 

module.exports = mongoose.model('ShoppingCart', ShoppingCart);
