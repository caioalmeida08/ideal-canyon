const express = require('express');
const router = express.Router();
const buyController = require('../controllers/buyController');

router.get('/', buyController.index);

module.exports = router;
