const express = require("express");
const { signUp, login, getUserInfo } = require("../controllers/auth");
const checkAuthentication = require("../middlewares/checkAuthentication");
const router = express.Router();

router.post("/api/signup", signUp);
router.post("/api/login", login);
router.get("/api/me",checkAuthentication, getUserInfo);

module.exports = router; // defualt export
