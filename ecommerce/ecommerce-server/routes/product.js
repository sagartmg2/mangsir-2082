const express = require("express");
const checkAuthentication = require("../middlewares/checkAuthentication");

const router = express.Router();

router.get("/api/products", (req, res) => {
  res.send("list of products");
});

// route level middelware
router.post("/api/products", checkAuthentication, (req, res) => {
  console.log("create products");
  res.send("create products");
});

// edit
// delete

module.exports = router;
