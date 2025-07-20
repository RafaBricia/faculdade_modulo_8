const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController.js");

router.get("/tasks", taskController.getAllTasks);
router.post("/tasks", taskController.createTask);
router.delete("/tasks/:id", taskController.deleteTask);
router.put("/tasks/:id", taskController.editTask);

module.exports = router;