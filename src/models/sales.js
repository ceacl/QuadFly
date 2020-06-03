const mongoose = require('mongoose');
const { Schema } = mongoose;

const Sales = new Schema({

    userid: {type: String, required:true},
    productid: {type:String, required: true},
    description: {type:String},
    subtotal:{type:Number, required:true},
    total:{type:Number, required:true}
    
}); 

module.exports = mongoose.model('Sales', Sales);
