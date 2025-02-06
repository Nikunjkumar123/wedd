const express = require('express');

const connectionRouter = express.Router();

const verifyToken = require('../Middleware/verifyToken.js');

const {sendRqst,AcceptRequest,RejectRequest,getAllRequest,RequestForMe,deletedRequest} = require('../controllers/connection.controller.js');

connectionRouter.route('/sendrq').post(verifyToken,sendRqst);
connectionRouter.route('/sendrq/accept/:id').get(verifyToken,AcceptRequest);
connectionRouter.route('/sendrq/:id/reject').get(verifyToken,RejectRequest);
connectionRouter.route('/allRequest').get(getAllRequest);
connectionRouter.route('/forme').get(verifyToken,RequestForMe)
connectionRouter.route('/delete/:id').delete(deletedRequest)

module.exports = connectionRouter;