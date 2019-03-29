const mongoose = require('mongoose');
const db = require('./index.js');

let redditThreadSchema = new mongoose.Schema({
  threadName: String,
  threadImage: String,
  selftext: String,
  subreddit: String,
  author: String,
  date: Number,
  comments: Number,
})

let Thread = mongoose.model('Thread', redditThreadSchema);

module.exports = Thread;