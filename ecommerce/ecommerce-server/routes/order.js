const express = require("express");
const checkAuthentication = require("../middlewares/checkAuthentication");
const router = express.Router();

router.post("/api/orders", checkAuthentication, async (req, res) => {
  res.send("");
});

module.exports = router; // defualt export
