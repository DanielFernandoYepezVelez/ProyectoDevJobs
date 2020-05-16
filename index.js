/* Requires */
require('./config/enviroment');

/* Dependences */
const path = require('path');
const express = require('express');
const router = require('./routes/index');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

/* Initializations */
const app = express();

/* Settings */
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname + '/views/', 'layout'),
    partialsDir: path.join(__dirname + '/views/', 'partials'),
    extname: '.hbs',
    // helpers: require('./lib/handlebars')
}));
app.set('view engine', 'hbs');

/* Middlewares */


/* Routes */
app.use('/', router());

/* Static Files */
app.use(express.static(path.join(__dirname, './public/')));

/* Starting The Server */
app.listen(process.env.PORT, () => {
    console.log(`Server On Port ${process.env.PORT}`);
});