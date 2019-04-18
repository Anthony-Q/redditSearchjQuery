const jwt = require("jsonwebtoken");
const middleware = require("../middleware.js");
const config = require("../config.js");

class HandleLogin {
  login(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let pracUsername = "admin";
    let pracPassword = "password";

    if (username && password) {
      if (username === pracUsername && password === pracPassword) {
        let token = jwt.sign({ username: username }, config.secret, {
          expiresIn: "24h"
        });
        res.json({
          success: true,
          message: "Authentication Successful",
          token: token
        });
      } else {
        res.send(403).json({
          success: false,
          message: "Incorrect Username or Password"
        });
      }
    } else {
      res.send(400).json({
        success: false,
        message: "Authentication failed"
      });
    }
  }
  index(req, res) {
    res.json({
      success: true,
      message: "Index"
    });
  }
}

module.exports = HandleLogin;
