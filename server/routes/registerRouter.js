const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

router.get('/debug', registerController.debug);
router.post('/', registerController.create);
router.put('/', registerController.update);
router.delete('/', registerController.delete);

module.exports = router;
