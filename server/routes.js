const router = require('express').Router();
const controller = require('./controller.js');

router 
  .route("/redditThread")
  .post(controller.post);


module.exports = router;