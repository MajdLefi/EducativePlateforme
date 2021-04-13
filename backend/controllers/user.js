const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUsers = async (req, res) => {
  try {
    const findUsers = await User.find();
    res.status(200).json(findUsers);
  } catch (error) {
    console.error(error);
  }
};

exports.getCurrent = async (req, res) => {
  const userID = req.params.userID;
  User.findById(userID)
    .then((user) => res.json(user))
    .catch((err) =>
      res.status(404).json({ msg: "No user found with that ID" })
    );
};

exports.addUser = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists !" });
    }
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      role
    });
    const salt = 10; //hash level
    const hashedPassword = await bcrypt.hash(password, salt); //hash password
    newUser.password = hashedPassword;

    const roleUser = ["Student"];
    newUser.role = roleUser;

    const imgUser =
      "https://cdn.emojidex.com/emoji/seal/male_student%28ye%29.png?1481996885";
    newUser.imgProfile = imgUser;

    const addedUser = await newUser.save();
    const payload = {
      id: newUser._id,
    };
    res.status(200).send({ msg: "User registred with success", addedUser });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
};

exports.editUser = (req, res) => {
  const userID = req.params.userID;
  User.findByIdAndUpdate(userID, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ msg: "User Not Found " });
      }
      res.send(user);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR edit" }));
};

exports.deleteUser = (req, res) => {
  const id = req.params.userID;
  User.findByIdAndDelete(id) //findOneAndDelete( {_id : value of the id }  )
    .then((user) => {
      if (!user) {
        return res.status(404).send({ msg: "User Not Found " });
      }
      res.send(user);
    })
    .catch((err) => res.status(400).send({ msg: "Error Remove user " }));
};
