const express = require('express');
const myprofileRouter=express.Router();

const {myProfile,updateMyProfile}=require('../controllers/profile.controller.js');

myprofileRouter.route('/viewProfile').get(myProfile).patch(updateMyProfile);

module.exports=myprofileRouter;