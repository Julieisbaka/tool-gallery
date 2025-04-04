const express = require('express');
const passport = require('passport');
const router = express.Router();

// Login route
router.post('/login', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/gallery');
});

// Register route (placeholder for future implementation)
router.post('/register', (req, res) => {
    // Registration logic will go here
    res.status(501).send('Not implemented');
});

// Logout route
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Get current user
router.get('/current_user', (req, res) => {
    res.send(req.user);
});

module.exports = router;