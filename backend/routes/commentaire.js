const express = require('express');
const router =  express.Router();

const commentCtrl = require('../controllers/commentaire');

router.get('/:id/comments',  commentCtrl.getComments);
router.post('/:id/comment/', commentCtrl.createComment);
router.put('/comment/:id', commentCtrl.modifyComment);
router.delete('/comment/:id', commentCtrl.deleteComment);

module.exports = router; 
