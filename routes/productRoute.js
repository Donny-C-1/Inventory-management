const express = require("express");

const router = express.Router();

const methodOverride = require("method-override");

const {
  displayAllProducts,
  getProduct,
  updateProduct,
  updateProduct_get,
  createProduct_get,
  deleteProduct,
  createProduct_post
} = require("../controllers/product_controller.js");

router.route("/").get(displayAllProducts);

router.route("/create").get(createProduct_get).post(createProduct_post);

router.use("/:id", methodOverride("_method", { methods: ["GET"] }));

router.route("/:id").get(getProduct).post(updateProduct).delete(deleteProduct);

router.route("/:id/update").get(updateProduct_get);

module.exports = router;
