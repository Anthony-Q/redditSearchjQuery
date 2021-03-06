const mongoose = require('mongoose');
const db = require("./index.js");

let redditThreadSchema = new mongoose.Schema({
  threadName: String,
  threadImage: String,
  threadUrl: String,
  selftext: String,
  subreddit: String,
  author: String,
  datePosted: String,
  comments: Number,
  threadImageHeight: Number,
  threadImageWidth: Number
})

let Thread = mongoose.model('Thread', redditThreadSchema);


let recentSearch = new mongoose.Schema({
  oldSearch: String
})

let RecentSearch = mongoose.model("RecentSearch", recentSearch);

module.exports = {Thread, RecentSearch};