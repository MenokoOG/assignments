const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  issue: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Issue'
  }
});

module.exports = mongoose.model('Comment', commentSchema);
