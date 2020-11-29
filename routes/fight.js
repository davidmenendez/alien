const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const fightController = require('../controllers/fight');


router.post('/bot', auth, fightController.bot);

module.exports = router;
