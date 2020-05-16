/* =======================
            PORT
   =======================
 */
process.env.PORT = process.env.PORT || 3000;

/* =======================
        ENVIROMENT
   =======================
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let urlDB;

if (process.env.NODE_ENV === 'development') {
    urlDB =
} else {
    urlDB = process.env.MONGO_URI
}