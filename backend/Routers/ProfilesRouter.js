const express = require('express');

const ProfilesRouter = express.Router();

const {oppUsers,filteredData} = require('../controllers/Profiles.controller.js');

ProfilesRouter.route('/opposite/users').get(oppUsers);
ProfilesRouter.route('/profiles/filter').post(filteredData);

module.exports = ProfilesRouter;