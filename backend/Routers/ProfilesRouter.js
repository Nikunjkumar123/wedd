const express = require('express');

const ProfilesRouter = express.Router();

const {oppUsers,filteredData,getSingleUser,allCities} = require('../controllers/Profiles.controller.js');

ProfilesRouter.route('/opposite/users').get(oppUsers);
ProfilesRouter.route('/profiles/filter').post(filteredData);
ProfilesRouter.route('/single/user/:id').get(getSingleUser);
ProfilesRouter.route('/city/for/option').get(allCities);

module.exports = ProfilesRouter;