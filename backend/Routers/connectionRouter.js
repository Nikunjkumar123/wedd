const express = require('express');

const connectionRouter = express.Router();

const {sendRqst,AcceptRequest,RejectRequest} = require('../controllers/connection.controller.js');

connectionRouter.route('/sendrq').post(sendRqst);
connectionRouter.route('/sendrq/accept/:id').get(AcceptRequest);
connectionRouter.route('/sendrq/:id/reject').get(RejectRequest);

module.exports = connectionRouter;