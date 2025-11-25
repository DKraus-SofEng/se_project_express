/* eslint-disable consistent-return */
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const handleError = require("../utils/handleError");

const { JWT_SECRET } = require("../utils/config");

// GET CURRENT USER
const getCurrentUser = (req, res) => {
  const userId = req.user._id;
  User.findById(userId)
    .orFail()
    .then((user) => res.status(200).send(user))
    .catch((err) => handleError(res, err, "getCurrentUser"));
};

// POST USER
const createUser = (req, res) => {
  const { name, avatar, email, password } = req.body;
  // console.log("createUser called", req.body);
  bcrypt
    .hash(password, 10)
    .then((hash) => User.create({ name, avatar, email, password: hash }))
    .then((user) => {
      const userObj = user.toObject();
      delete userObj.password; // Removes password before sending
      res.status(201).send(userObj);
    })

    .catch((err) => {
      if (err.code === 11000) {
        return res.status(409).send({ message: "Email already exists" });
      }
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Invalid user data" });
      }
      return handleError(res, err, "createUser");
    });
};
// LOGIN
const login = (req, res) => {
  const { email, password } = req.body;
  // Check for missing fields
  if (!email || !password) {
    return res.status(400).send({ message: "Email and password are required" });
  }

  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: "7d",
      });
      res.send({ token });
    })
    .catch(() =>
      res.status(401).send({ message: "Incorrect email or password" })
    );
};

// UPDATE USER
const updateCurrentUser = (req, res) => {
  const userId = req.user._id;
  const { name, avatar } = req.body;

  User.findByIdAndUpdate(
    userId,
    { name, avatar },
    { new: true, runValidators: true }
  )
    .orFail()
    .then((user) => res.status(200).send(user))
    .catch((err) => handleError(res, err, "updateCurrentUser"));
};

module.exports = { createUser, getCurrentUser, login, updateCurrentUser };
