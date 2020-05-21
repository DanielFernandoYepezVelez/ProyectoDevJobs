/* Requires */
require('./config/enviroment');
require('./config/database');

/* Dependences */
const path = require('path');
const express = require('express');
const router = require('./routes/index');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

/* Initializations */
const app = express();

/* Settings */
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname + '/views/', 'layout'),
    partialsDir: path.join(__dirname + '/views/', 'partials'),
    extname: '.hbs',
    helpers: require('./helpers/handlebars') // Los helpers se comunican directamente con las vistas .hbs antes de su salida de dicha vista
}));
app.set('view engine', 'hbs');

/* Middlewares */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    key: 'firmandoLaSession',
    resave: false,
    saveUninitialized: false
}));

/* Routes */
app.use('/', router());

/* Static Files */
app.use(express.static(path.join(__dirname, './public')));

/* Starting The Server */
app.listen(process.env.PORT, () => {
    console.log(`Server On Port ${process.env.PORT}`);
});