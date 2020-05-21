require('./enviroment');

const mongoose = require('mongoose');

mongoose.connect(process.env.urlDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('Database is Connected'))
    .catch((err) => console.log(err))

/* Modelos */
require('../models/vacante');