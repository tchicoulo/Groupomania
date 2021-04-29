const express = require('express');
const router =  express.Router();
const auth = require('../middleware/auth');
const postCtrl = require('../controllers/post');

router.get('', auth,  postCtrl.getPosts);
router.get('/:id',  postCtrl.getOnePost);
router.post('', auth, postCtrl.createPost);
router.put('/:id', auth, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);


module.exports = router;

