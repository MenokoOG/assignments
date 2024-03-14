const Issue = require('../models/issue');

async function getIssues(req, res) {
  try {
    const issues = await Issue.find().sort({ upvotes: -1 });
    res.status(200).json(issues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createIssue(req, res) {
  try {
    const { title, description } = req.body;
    const issue = new Issue({ title, description, user: req.user.userId });
    await issue.save();
    res.status(201).json(issue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function upvoteIssue(req, res) {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    if (issue.upvoters.includes(req.user.userId)) {
      return res.status(400).json({ message: 'Already upvoted' });
    }
    issue.upvotes++;
    issue.upvoters.push(req.user.userId);
    await issue.save();
    res.status(200).json(issue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function downvoteIssue(req, res) {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    if (issue.downvoters.includes(req.user.userId)) {
      return res.status(400).json({ message: 'Already downvoted' });
    }
    issue.downvotes++;
    issue.downvoters.push(req.user.userId);
    await issue.save();
    res.status(200).json(issue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateIssue(req, res) {
  try {
    const { title, description } = req.body;
    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    issue.title = title;
    issue.description = description;
    await issue.save();
    res.status(200).json(issue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteIssue(req, res) {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    await issue.remove();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getIssues,
  createIssue,
  upvoteIssue,
  downvoteIssue,
  updateIssue,
  deleteIssue,
};
