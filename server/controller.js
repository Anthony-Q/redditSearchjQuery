const { Thread } = require("../db/model.js");

module.exports = {
    post: (req, res) => {
      new Thread({
        threadName:  req.body.threadName,
        threadImage: req.body.threadImage,
        selftext: req.body.selftext,
        subreddit: req.body.subreddit,
        author: req.body.author,
        datePosted: req.body.datePosted,
        comments: req.body.comments,
        threadImageHeight: req.body.threadImageHeight,
        threadImageWidth: req.body.threadImageWidth
      })
      .save()
      .then( data => {
        res.status(201).send(data)
      })
      .catch(err => {
        console.log("post err", err);
      })
    },
    get: (req, res) => {
      Thread.find({
        threadName:  req.query.threadName,
        threadImage: req.query.threadImage,
        selftext: req.query.selftext,
        subreddit: req.query.subreddit,
        author: req.query.author,
        datePosted: req.query.datePosted,
        comments: req.query.comments,
      })
      .then( data => {
        res.status(201).send(200);
      })
      .catch( err => {
        console.log("err", err);
      })
    }
}