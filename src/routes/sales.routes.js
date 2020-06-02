const express = require('express');
const router = express.Router();

const Sales = require('../models/sales');

router.get('/sales',  async (req, res) => 
{
    const sales = await Sales.find();
    res.json(sales);
});


router.get('/user/:id', async (req, res) => 
{    
    const sales = await Sales.find('userid', req.params.id);
    res.json(sales);
});

router.post('/', async (req, res) => 
{
    const {userid, productid, description, subtotal, total} = req.body;
    const sale = new Sales ({userid, productid, description, subtotal, total});
    await sale.save();
    res.json({status: 'Saved'});
});



router.put('/:id', async (req, res) => 
{
    const {userid, productid, description, subtotal, total} = req.body;
    const newSale = new Sales ({userid, productid, description, subtotal, total});
    await Sales.findByIdAndUpdate(req.params.id, newSale);
    res.json('Update!');
});

router.delete('/:id', async (req, res) => 
{
    await Sales.findByIdAndRemove(req.params.id);
    res.json({status: 'Deleted '});
});


module.exports = router;