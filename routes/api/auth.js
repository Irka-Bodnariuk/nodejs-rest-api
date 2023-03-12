const express = require("express");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const {
  ctrllUsers: {
    register,
    login,
    current,
    logout,
    updateSubscription,
    updateAvatar,
  },
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
router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
