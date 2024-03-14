const express = require('express');
const router = express.Router();
const { createComment, updateComment, deleteComment } = require('../controllers/commentController');


router.post('/:issueId',  createComment);
router.put('/:commentId',  updateComment);
router.delete('/:commentId',  deleteComment);

module.exports = router;
