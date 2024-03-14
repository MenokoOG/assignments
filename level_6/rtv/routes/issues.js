const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');


router.get('/', issueController.getIssues);
router.post('/',  issueController.createIssue);
router.put('/:id/upvote',  issueController.upvoteIssue);
router.put('/:id/downvote',  issueController.downvoteIssue);
router.put('/:id', issueController.updateIssue);
router.delete('/:id', issueController.deleteIssue);

module.exports = router;
