const express = require('express');
const router = express.Router();
const scooterController = require('../controllers/scooterController');

router.get('/', scooterController.findAll);

module.exports = router;
