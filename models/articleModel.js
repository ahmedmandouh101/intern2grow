const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A Article must have a title'],
  },
  content: {
    type: String,
    required: [true, 'A Article must have a content'],
  },
  author: {
    type: String,
    required: [true, 'A Article must have a author'],
  },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
