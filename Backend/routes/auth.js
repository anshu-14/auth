const express = require('express');
const authController=require('../controllers/authController')
const authMiddleware=require('../middleware/authMiddleware')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('../config/db');

const router = express.Router();

// @route POST /api/login
router.post('/login', authController.login);

//protected route before hitting the request it will go to the middleware and check for auth token 
router.get('/profile', authMiddleware,authController.profile);



module.exports = router;
