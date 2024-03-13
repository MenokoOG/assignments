const express = require('express');
const router = express.Router();
const { createComment, updateComment, deleteComment } = require('../controllers/commentController');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/:issueId', authenticateToken, createComment);
router.put('/:commentId', authenticateToken, updateComment);
router.delete('/:commentId', authenticateToken, deleteComment);

module.exports = router;
