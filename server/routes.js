const router = require("express").Router();
const controller = require("./controller.js");
const loginController = require("./loginController.js");
const HandleLogin = require("./handleLogin.js");
const middleware = require("../middleware.js");

let handler = new HandleLogin();
router.route("/redditThread").post(controller.post);
router
  .route("/login")
  .post(loginController.post)
  .get(loginController.get);

module.exports = router;
