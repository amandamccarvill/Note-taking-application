const express = require('express');
const { register, login } = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/auth');  

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// /welcome route protected by the isAuthenticated middleware
router.get('/welcome', isAuthenticated, (req, res) => {
    if (!req.user) {
        return res.status(401).json({ error: 'User not authenticated' });
    }
    res.status(200).json({ message: `Welcome ${req.user.username}` });  
});

module.exports = router;


