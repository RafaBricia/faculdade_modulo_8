const express = require("express");
const router = express.Router();
const profileController = require("../controller/profileController.js");

router.get("/profile", profileController.getAllProfiles);
router.post("/profile", profileController.createProfile);
router.delete("/profile/:id", profileController.deleteProfile);
router.put("/profile/:id", profileController.editProfile);

module.exports = router;
