const router = require("express").Router();

//req bcrypt
const bcrypt = require("bcrypt");

// req web token
const jwt = require("jsonwebtoken");

//req User
const User = require("../models/User");

//req isAuth
const isAuth = require("../middlewares/isAuth");

const {
  registerRules,
  loginRules,
  validator,
} = require("../middlewares/validator");

//router Post api/auth/register
//@desc Register new user
//@access Public

router.post("/register", registerRules(), validator, async (req, res) => {
  const { firstName, lastName, email, password,role, } = req.body;
  try {
    //simple Validation
    // if (!name || !lastName || !email || !password) {
    //     return res.status(400).json({ msg: 'Please enter all the fields !' })
    // }
    //Check for the existing user
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists !" });
    }
    //Create new User
    user = new User({ firstName, lastName, email, password,role });
    //Create Salt & hash
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    user.password = hashedPassword;
    await user.save();

    //default role 
    const roleUser = ["Student"];
    user.role = roleUser;

    //sign user
    const payload = {
      id: user._id,
    };

    const token = await jwt.sign(payload, process.env.secretOrkey, {
      expiresIn: "7 days",
    });

    res.status(200).send({ msg: "User registred with success", user, token });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
});

//router Post api/auth/login
//@desc Register new user
//@access Public

router.post("/login", loginRules(), validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    // if (!email || !password) {
    //     return res.status(400).json({ msg: 'Please enter all the fields !' })
    // }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ msg: "Bad credential !!" });
    }

    //check pawword
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Bad credential !" });
    }

    //sign user
    const payload = {
      id: user._id,
    };

    const token = await jwt.sign(payload, process.env.secretOrkey, {
      expiresIn: "7 days",
    });

    return res.send({ msg: "Logged in with success ! ", user, token });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
});

//router Post api/auth/user
//@desc get authentified user
//@access Private

router.get("/user", isAuth, async (req, res) => {
  res.status(200).send({ user: req.user });
});

module.exports = router;
