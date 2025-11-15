const User = require("../models/user");
const handleError = require("../utils/handleError");

// GET USERS
const getUsers = (req, res) => {
  return User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => handleError(res, err, "getUsers"));
};

// POST USERS
const createUser = (req, res) => {
  const { name, avatar } = req.body;
  return User.create({ name, avatar })
    .then((user) => res.status(201).send(user))
    .catch((err) => handleError(res, err, "createUser"));
};

// GET USER
const getUser = (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .orFail()
    .then((user) => res.status(200).send(user))
    .catch((err) => handleError(res, err, "getUser"));
};

module.exports = { getUsers, createUser, getUser };
