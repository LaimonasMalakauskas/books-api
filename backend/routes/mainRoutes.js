const express = require('express');
const router = express.Router();
const { renderHomePage } = require('../controllers/mainController');

router.get('/', renderHomePage)

module.exports = router;
