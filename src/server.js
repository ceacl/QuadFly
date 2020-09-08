const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const {mongoose}  = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/users', require('./routes/userstest.routes'));
app.use('/api/drones', require('./routes/dronemodel.routes'));
app.use('/api/sales', require('./routes/sales.routes'));
app.use('/api/cart', require('./routes/shoppingcart.routes'));
app.use('/api/custome', require('./routes/customedrone'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${(app.get('port'))}`);
});