const express = require('express');
const {loginController,registerController,fetchAllController} = require('../controller/userController')

const {protect} = require("../middleware/authMiddleware")
const Router = express.Router();

Router.post('/login',loginController)
Router.post('/register',registerController)
// Router.get('/fetchUsers',protect,fetchAllController)

module.exports = Router