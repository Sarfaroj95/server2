const express = require('express');
const User = require('../controllers/con_user')
const router = express.Router();

router.post('/register', User.Register);

router.post('/login', User.Login);


module.exports = router;