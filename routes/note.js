const express = require('express');
const router = express.Router();

const NewsController = require('../app/controllers/NotesController');

router.get('/', NewsController.getAll);
router.get('/get/:slug', NewsController.getOne);

module.exports = router;