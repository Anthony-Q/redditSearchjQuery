const mongoose = require('mongoose');
const db = require("./index.js");

let redditThreadSchema = new mongoose.Schema({
  threadName: String,
  threadImage: String,
  selftext: String,
  subreddit: String,
  author: String,
  datePosted: Number,
  comments: Number,
  upvotes: Number
})

let Thread = mongoose.model('Thread', redditThreadSchema);

module.exports = {Thread};