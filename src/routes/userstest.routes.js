const express = require('express');
const router = express.Router();

const UserTest = require('../models/userTest');

router.get('/',  async (req, res) => 
{
    const users = await UserTest.find();
    console.log(users);
    res.json(users);
});

router.get('/:id', async (req, res) => 
{    
    const user = await UserTest.findById(req.params.id);
    res.json(user);
});

router.post('/', async (req, res) => 
{
    const {username, password} = req.body;
    const user = new UserTest ({username, password});
    await user.save();
    res.json({status: 'User Saved'});
});

router.put('/:id', async (req, res) => 
{
    const {username, password} = req.body;
    const newUser = {username, password};
    await UserTest.findByIdAndUpdate(req.params.id, newUser);
    res.json('User update!');
});

router.delete('/:id', async (req, res) => 
{
    await UserTest.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Deleted '});
});


module.exports = router;