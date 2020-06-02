const express = require('express');
const router = express.Router();

const CustomeDrone = require('../models/customeDrone');

router.get('/custome',  async (req, res) => 
{
    const customeDrone = await CustomeDrone.find();
    res.json(customeDrone);
});

router.get('/drone/:id', async (req, res) => 
{    
    const customeDrone = await CustomeDrone.find('droneid', req.params.id);
    res.json(customeDrone);
});

router.get('/user/:id', async (req, res) => 
{    
    const user = await UserTest.find('userid', req.params.id);
    res.json(user);
});

router.post('/', async (req, res) => 
{
    const {userid, droneid, description, cost} = req.body;
    const customeDrone = new CustomeDrone ({userid, droneid, description, cost});
    await customeDrone.save();
    res.json({status: 'Saved'});
});


router.put('/:id', async (req, res) => 
{
    const {userid, droneid, description, cost} = req.body;
    const newCustomeDrone = {userid, droneid, description, cost};
    await CustomeDrone.findByIdAndUpdate(req.params.id, newCustomeDrone);
    res.json('Update!');
});

router.delete('/:id', async (req, res) => 
{
    await CustomeDrone.findByIdAndRemove(req.params.id);
    res.json({status: 'Deleted '});
});


module.exports = router;