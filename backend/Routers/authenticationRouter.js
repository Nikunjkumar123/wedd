const express = require('express');
const authenticationRouter = express.Router();
const {RegisterUser,LoginUser,LogoutUser,forgotPasswordUser,verifyTokenOTP,updatePasswordOTP} = require('../controllers/auth.controllers.js');

authenticationRouter.route('/register').post(RegisterUser);
authenticationRouter.route('/Login').post(LoginUser);
authenticationRouter.route('/Logout').get(LogoutUser);
authenticationRouter.route('/forgotPassword').post(forgotPasswordUser);
authenticationRouter.route('/verifyToken').post(verifyTokenOTP);
authenticationRouter.route('/updatePassword').post(updatePasswordOTP);

module.exports=authenticationRouter;