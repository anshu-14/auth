const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const dummyRoutes = require('./dummy');

router.use('/auth', authRoutes);      // so auth routes become /api/auth/...
router.use('/dummy', dummyRoutes);    // dummy routes become /api/dummy/...

module.exports = router;
