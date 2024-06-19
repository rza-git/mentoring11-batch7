const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController.js");

router.get("/games", gameController.findAll)
router.get("/games/:id", gameController.findOne)
router.post("/games", gameController.create)
router.delete("/games/:id", gameController.destroy)


module.exports = router;