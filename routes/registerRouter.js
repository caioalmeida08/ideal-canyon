const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

router.get('/debug', registerController.debug);
router.get('/', registerController.index);
router.post('/', registerController.register);
router.put('/', registerController.update);
module.exports = router;
