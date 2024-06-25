const express = require("express");
const { homePage } = require("../controllers/index_controller");

const router = express.Router();

router.route("/").get(homePage);

module.exports = router;
