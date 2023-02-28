const express = require("express");

const {
  ctrlUsers: { register, login },
} = require("../../controllers");

const { validateBody } = require("../../middlewares");

const { schemasUser } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemasUser.registerSchema), register);

router.post("/login", validateBody(schemasUser.loginSchema), login);

module.exports = router;
