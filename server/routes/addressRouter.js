const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

router.get('/', addressController.findOne);
router.post('/', addressController.create);
module.exports = router;
