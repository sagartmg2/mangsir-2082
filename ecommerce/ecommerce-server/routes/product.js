const express = require("express");
const checkAuthentication = require("../middlewares/checkAuthentication");
const { createProduct, fetchProducts } = require("../controllers/product");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

// const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.get("/api/products", fetchProducts);

// route level middelware
router.post("/api/products", checkAuthentication, upload.array("images", 12), createProduct);
// edit
// delete

module.exports = router;
