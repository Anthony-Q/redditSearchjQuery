const middleware = require("../middleware.js");

module.exports = {
  post(req, res) {
    res.send("post==>hey");
  },
  get(req, res) {
    res.send("get==>hello");
  }
};
