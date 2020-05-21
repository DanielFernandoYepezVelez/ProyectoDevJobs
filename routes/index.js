const { Router } = require('express');
const router = Router();

const homeController = require('../controllers/homeController');

module.exports = () => {
    router.get('/', homeController.mostrarTrabajos);
    return router;
}