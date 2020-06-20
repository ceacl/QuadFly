const express = require('express');
const router = express.Router();

const droneModel = require('../models/droneModel');

router.get('/drones',  async (req, res) => 
{
    const drones = await droneModel.find();
    res.json(drones);
});


router.get('/:id', async (req, res) => 
{    
    const drones = await droneModel.findById(req.params.id);
    res.json(drones);
});

router.get('/nick/:nickname', async (req, res) => 
{    
    const drones = await droneModel.find({'nickname':req.params.nickname});
    res.json(drones);
});


router.post('/', async (req, res) => 
{
    const {name, nickname, camera, storage, batery, videoTransmission,
           focusTrack, gimbal, avoidObstacles, description, price, quantity} = req.body;
           
    const drone = new droneModel ({name, nickname, camera, storage, batery, videoTransmission,
                                   focusTrack, gimbal, avoidObstacles, description, price, quantity});
    
    await drone.save();
    res.json({status: 'Drone Saved'});
});

router.put('/:id', async (req, res) => 
{
    const  {name, nickname, camera, storage, batery, videoTransmission,
           focusTrack, gimbal, avoidObstacles, description, price, quantity} = req.body;

    const newDrone = {name, nickname, camera, storage, batery, videoTransmission,
                     focusTrack, gimbal, avoidObstacles, description, price, quantity};

    await droneModel.findByIdAndUpdate(req.params.id, newDrone);
    res.json('Drone update!');
});

router.put('/updateQuantity/:quantity/:id', async (req, res) => {
    droneModel.findByIdAndUpdate(req.params.id,{quantity: req.params.quantity}).then(result => res.json(result));
  });

router.delete('/:id', async (req, res) => 
{
    await droneModel.findByIdAndRemove(req.params.id);
    res.json({status: 'Drone Deleted '});
});


module.exports = router;