const mongoose = require('mongoose');
const { Schema } = mongoose;

const DroneModel = new Schema({

    name: {type: String, required:true},
    camera: {type:String, required: true},
    storage: {type: String, required:true},
    batery:{type: String, required:true},
    videoTransmission:{type:String, required:true},
    focusTrack:{type:String, required:true},
    gimbal:{type:String, required:true},
    avoidObstacles:{type:String, required:true},
    description:{type:String},
    price:{type:String, required:true}

}); 

module.exports = mongoose.model('DroneModel', DroneModel);
