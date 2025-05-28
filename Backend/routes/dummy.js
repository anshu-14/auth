const express = require('express');
const router = express.Router();
const dummyController=require('../controllers/dummyController')
const authMiddleware=require('../middleware/authMiddleware')
router.get('/data',authMiddleware,dummyController.dummyController);

module.exports = router;