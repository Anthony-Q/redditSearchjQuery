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
        upvotes: req.body.ups
      })
      .save()
      .then( data => {
        res.status(201).send(data)
      })
      .catch(err => {
        console.log("post err", err);
      })
    }
}