const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');
const authenticateToken = require('../middleware/authenticateToken');

router.get('/', issueController.getIssues);
router.post('/', authenticateToken, issueController.createIssue);
router.put('/:id/upvote', authenticateToken, issueController.upvoteIssue);
router.put('/:id/downvote', authenticateToken, issueController.downvoteIssue);
router.put('/:id', authenticateToken, issueController.updateIssue);
router.delete('/:id', authenticateToken, issueController.deleteIssue);

module.exports = router;
