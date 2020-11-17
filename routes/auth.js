const router = require("express").Router();
const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const verify = require("../validation/verifyToken");
const {
  registerValidation,
  loginValidation,
} = require("../validation/joi_validation");

router.route("/me").get(verify, (req, res) => {
  User.findById(req.user.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/register", async (req, res) => {
  console.log("registering");
  //Validate input data using a separate joi validation file
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if user already exists
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already exists !");

  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //Create and save user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    const savedUser = await user.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.SECRET_TOKEN);

    const srcPath = path.join(__dirname, "../public/uploads", "user_0.jpg");
    const destPath = path.join(
      __dirname,
      "../public/uploads",
      savedUser._id + ".jpg"
    );

    fs.copyFileSync(srcPath, destPath);

    res.send({ _id: savedUser._id, token: token });
  } catch (error) {
    res.status(400).send(error);
  }
});

// router.get('/me', authMiddleware, authController) //useEffect in appJs to check if logged in

router.post("/login", async (req, res) => {
  //Validate input data using a separate joi validation file
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //Check if email already exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email does not exist !");
  //Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid password !");
  try {
    const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN);
    console.log(user);
    res.send({ _id: user._id, token: token });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
