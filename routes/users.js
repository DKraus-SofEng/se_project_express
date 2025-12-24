const router = require("express").Router();
const {
  login,
  createUser,
  getCurrentUser,
  updateCurrentUser,
} = require("../controllers/users");
const { celebrate, Joi } = require("celebrate");
const {
  validateUsersBody,
  validateSigninBody,
  validateUpdateUserBody,
} = require("../middlewares/validation");

router.post("/signin", validateSigninBody, login);
router.post("/signup", validateUsersBody, createUser);
router.get("/me", getCurrentUser);
router.patch("/me", validateUpdateUserBody, updateCurrentUser);

module.exports = router;
