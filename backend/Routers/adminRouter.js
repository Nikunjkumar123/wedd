const express = require('express');
const adminRouter = express.Router();

const {allUsers,addUser,updateUser,deleteUser,normaluser,premiumuser,blockUserByAdmin}=require('../controllers/admin.controller.js');

adminRouter.route('/allUsers').get(allUsers).post(addUser);
adminRouter.route('/paymentNOT').get(normaluser);
adminRouter.route('/paymentDONE').get(premiumuser);
adminRouter.route('/blockuser/:id').get(blockUserByAdmin);
adminRouter.route('/updateUser/:id').patch(updateUser).delete(deleteUser);

module.exports = adminRouter;