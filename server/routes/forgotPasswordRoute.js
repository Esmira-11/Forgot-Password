const express = require('express');
const { forgotPasswordController } = require('../controllers/ForgotPasswordController');


const forgotPasswordRoutes = express.Router();



forgotPasswordRoutes.post('/', forgotPasswordController.sendlink)





module.exports = {
    forgotPasswordRoutes
}