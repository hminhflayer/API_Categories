const express = require('express');
const router = express.Router();

const EthnicController = require('../app/controllers/EthnicController');

router.post('/create', EthnicController.create);
router.post('/update/:code', EthnicController.update);
router.post('/delete/:code', EthnicController.delete);

router.get('/:code', EthnicController.get);
router.get('/', EthnicController.index);

module.exports = router;
