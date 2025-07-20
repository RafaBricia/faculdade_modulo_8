const express = require("express");
const router = express.Router();
const projectController = require("../controller/projectController.js");

router.get("/project", projectController.getAllProjects);
router.post("/project", projectController.createProject);
router.delete("/project/:id", projectController.deleteProject);
router.put("/project/:id", projectController.editProject);

module.exports = router;
