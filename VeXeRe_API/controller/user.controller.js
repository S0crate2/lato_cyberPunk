const express = require("express");
const userService = require("../services/user.service");
const { authenticate, authorize } = require("../middlewares/auth/index");
const { uploadImage } = require("../middlewares/images/index");
const {
  validateCreateUser,
} = require("../middlewares/validation/user/createUserValidation");

const router = express.Router();

router.post("/", validateCreateUser, userService.createUser);
router.post("/login", userService.login);
router.patch("/update-password", userService.updatePassword);
router.get(
  "/me",
  authenticate,
  authorize(["Admin", "Member"]),
  userService.getMe
);
router.post(
  "/upload-avatar",
  authenticate,
  authorize(["Member"]),
  uploadImage("avatar"),
  userService.uploadAvatar
);

module.exports = router;
