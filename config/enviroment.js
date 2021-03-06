/* 
=======================
        PORT
=======================
*/
process.env.PORT = process.env.PORT || 3000;

/* 
=======================
      ENVIROMENT
=======================
*/
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/* 
==========================
  Base De Datos
==========================
*/
let urlDB = '';

if (process.env.NODE_ENV === 'development') {
    urlDB = 'mongodb://localhost:27017/devJobs';
} else {
    urlDB = process.env.MONGO_URI
}

process.env.urlDB = urlDB;