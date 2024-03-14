const Comment = require('../models/comment');
const Issue = require('../models/issue');

async function createComment(req, res) {
  try {
    const { text } = req.body;
    const comment = new Comment({ text, user: req.user.userId, issue: req.params.issueId });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateComment(req, res) {
  try {
    const { commentId } = req.params;
    const { text } = req.body;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    comment.text = text;
    await comment.save();
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteComment(req, res) {
  try {
    const { commentId } = req.params;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    await comment.remove();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createComment,
  updateComment,
  deleteComment,
};
