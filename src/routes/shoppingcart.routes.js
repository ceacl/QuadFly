const express = require('express');
const router = express.Router();

const ShoppingCart = require('../models/shoppingCart');

router.get('/cart',  async (req, res) => 
{
    const cart = await ShoppingCart.find();
    console.log(cart);
    res.json(cart);
});

router.get('/:id', async (req, res) => 
{    
    const cart = await ShoppingCart.findById(req.params.id);
    res.json(cart);
});

router.post('/', async (req, res) => 
{
    const {userid, productid, description } = req.body;
    const cart = new ShoppingCart ({userid, productid, description});
    await cart.save();
    res.json({status: 'Saved'});
});


router.put('/:id', async (req, res) => 
{
    const {userid, productid, description } = req.body;
    const newCart = new ShoppingCart ({userid, productid, description});
    await ShoppingCart.findByIdAndUpdate(req.params.id, newCart);
    res.json('Update!');
});

router.delete('/:id', async (req, res) => 
{
    await ShoppingCart.findByIdAndRemove(req.params.id);
    res.json({status: 'Deleted '});
});


module.exports = router;