const middleware = require("../middleware.js");
const HandleLogin = require("./handleLogin.js");
let handler = new HandleLogin();

module.exports = {
  post(req, res) {
    res.send("post==>hey");
    handler.login();
  },
  get(req, res) {
    res.send("get===>bye");
    middleware.confirmToken();
    handler.index();
  }
};
