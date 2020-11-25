const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/user');


router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/', auth, userController.getUser);
router.get('/findUser', auth, userController.findUser);

module.exports = router;
