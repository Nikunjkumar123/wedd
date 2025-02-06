const express = require('express')

const contactRouter = express.Router();

const {addEnq,AllEnq} = require('../controllers/contact.controller.js');

contactRouter.route('/user').post(addEnq).get(AllEnq);

module.exports = contactRouter;