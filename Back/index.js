const express = require('express');
const morgan = require('morgan');
const path = require('path');
const res = require('express/lib/response')
const app = express();
require('dotenv').config();
const cors = require('cors');

// Midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', require('./routes/users'));


// Monte de servidor
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('Server is running on port', app.get('port'));
});