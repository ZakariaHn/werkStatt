const router = require("express").Router();
const verify = require("../validation/verifyToken");

const {
  getMe,
  registerUser,
  loginUser,
} = require("../controllers/authController");

router.route("/me").get(verify, getMe);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
