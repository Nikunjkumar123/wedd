const express = require('express');

const connectionRouter = express.Router();

const {sendRqst,AcceptRequest,RejectRequest,getAllRequest,RequestForMe} = require('../controllers/connection.controller.js');

connectionRouter.route('/sendrq').post(sendRqst);
connectionRouter.route('/sendrq/accept/:id').get(AcceptRequest);
connectionRouter.route('/sendrq/:id/reject').get(RejectRequest);
connectionRouter.route('/allRequest').get(getAllRequest);
connectionRouter.route('/forme').get(RequestForMe)

module.exports = connectionRouter;