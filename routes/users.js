const router = require("express").Router();
const {
  login,
  createUser,
  getCurrentUser,
  updateCurrentUser,
} = require("../controllers/users");
const { celebrate, Joi } = require("celebrate");

router.post(
  "/signin",
  celebrate({
    body: Joi.object()
      .keys({
        email: Joi.string().required().email(),
        password: Joi.string().required(),
      })
      .unknown(true),
  }),
  login
);
router.post(
  "/signup",
  celebrate({
    body: Joi.object()
      .keys({
        name: Joi.string().required().min(2).max(30),
        avatar: Joi.string().uri(),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6),
      })
      .unknown(true),
  }),
  createUser
);
router.get("/me", getCurrentUser);
router.patch(
  "/me",
  celebrate({
    body: Joi.object()
      .keys({
        name: Joi.string().min(2).max(30),
        avatar: Joi.string().uri(),
      })
      .unknown(true),
  }),
  updateCurrentUser
);

module.exports = router;
