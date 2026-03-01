const express = require("express");
const { signUp, login } = require("../controllers/auth");
const router = express.Router();

router.post("/api/signup", signUp);
router.post("/api/login", login);

module.exports = router; // defualt export
