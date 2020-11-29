const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/user');


router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/', auth, userController.user);
router.get('/search', auth, userController.search);
router.get('/profile', auth, userController.profile);

module.exports = router;
