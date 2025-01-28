const express = require('express');

const freekaViewroute = express.Router();

const {lmitedView,addlimitedView} = require('../controllers/freeView.conrtoller.js');

freekaViewroute.route('/view').post(lmitedView).get(addlimitedView);

module.exports = freekaViewroute;
