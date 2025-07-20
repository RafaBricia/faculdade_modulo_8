const express = require("express");
const router = express.Router();
const personController = require("../controller/personController.js");

router.get("/person", personController.getAllPersons);
router.post("/person", personController.createPerson);
router.delete("/person/:id", personController.deletePerson);
router.put("/person/:id", personController.editPerson);

module.exports = router;
