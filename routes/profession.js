const express = require('express');
const router = express.Router();

const ProfessionController = require('../app/controllers/ProfessionController');

router.post('/create', ProfessionController.create);
router.post('/update/:code', ProfessionController.update);
router.post('/delete/:code', ProfessionController.delete);

router.get('/group/:code', ProfessionController.getWithGroup);
router.get('/:code', ProfessionController.get);
router.get('/', ProfessionController.index);

module.exports = router;
