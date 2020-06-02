const mongoose = require('mongoose');
const { Schema } = mongoose;

const CustomeDrone = new Schema({

    userid: {type: String, required:true},
    droneid: {type:String, required: true},
    description: {type:String, required: true},
    cost:{type:Number, required:true},

}); 

module.exports = mongoose.model('CustomeDrone', CustomeDrone);
