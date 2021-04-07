const express = require('express');
const router =  express.Router();
const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/commentaire');

router.get('/posts/:id/comments', auth,  commentCtrl.getComments);
router.post('/posts/:id/comments', auth, commentCtrl.createComment);
router.put('/comments/:id', auth, commentCtrl.modifyComment);
router.delete('/comments/:id', auth, commentCtrl.deleteComment);

module.exports = router; 
