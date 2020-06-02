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

router.post('/', async (req, res) => 
{
    const {name, camera, storage, batery, videoTransmission,
           focusTrack, gimbal, avoidObstacles, description, price} = req.body;
           
    const drone = new droneModel ({name, camera, storage, batery, videoTransmission,
                                   focusTrack, gimbal, avoidObstacles, description, price});
    
    await drone.save();
    res.json({status: 'Drone Saved'});
});

router.put('/:id', async (req, res) => 
{
    const  {name, camera, storage, batery, videoTransmission,
           focusTrack, gimbal, avoidObstacles, description, price} = req.body;

    const newDrone = {name, camera, storage, batery, videoTransmission,
                     focusTrack, gimbal, avoidObstacles, description, price};

    await droneModel.findByIdAndUpdate(req.params.id, newDrone);
    res.json('Drone update!');
});

router.delete('/:id', async (req, res) => 
{
    await droneModel.findByIdAndRemove(req.params.id);
    res.json({status: 'Drone Deleted '});
});


module.exports = router;