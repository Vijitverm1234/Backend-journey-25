const express = require('express');
const router = express.Router();
const { handleCreateUserSignup, handleCreateUserSignin } = require('../controller/user');

router.get('/signup', (req, res) => {
    return res.render("signup");
});
router.get('/signin', (req, res) => {
    return res.render("login");
});

// Fix: Removed "/user" prefix, as it's already in app.js
router.post('/signup', handleCreateUserSignup);
router.post('/signin', handleCreateUserSignin);


module.exports = router;
