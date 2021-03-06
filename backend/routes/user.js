const express = require('express');
const router =  express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const rateLimit = require('../middleware/express-rate-limit');

router.post('', userCtrl.signup);
router.post('/login', rateLimit, userCtrl.login);
router.get('', auth, userCtrl.getUsers);
router.delete('/:id', auth, userCtrl.deleteUser);


module.exports = router;

