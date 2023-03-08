const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

const {
  ctrllUsers: { register, login, current, logout, updateSubscription },
} = require("../../controllers");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), register); // signup

router.post("/login", validateBody(schemas.loginSchema), login); // signin

router.post("/logout", authenticate, logout);

router.get("/current", authenticate, current);
router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  updateSubscription
);

module.exports = router;
