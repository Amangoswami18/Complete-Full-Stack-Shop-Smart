const express = require('express');
const router = express.Router();
const { login, logout, checkSession } = require('../controllers/authController');
const { isAuthenticated } = require('../middleware/auth');

// Public routes
router.post('/login', login);

// Protected routes
router.post('/logout', isAuthenticated, logout);
router.get('/check', checkSession);

module.exports = router;
