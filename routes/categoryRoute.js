const express = require("express");

const methodOverride = require("method-override");

const {
  getCategory,
  displayCategories,
  createCategory_get,
  createCategory_post,
  updateCategory_get,
  updateCategory_post,
  deleteCategory
} = require("../controllers/category_controller.js");

const router = express.Router();

router.route("/").get(displayCategories);

router.route("/create").get(createCategory_get).post(createCategory_post);

router.use("/:id", methodOverride("_method", { methods: ["GET"] }));

router
  .route("/:id")
  .get(getCategory)
  .post(updateCategory_post)
  .delete(deleteCategory);

router.route("/:id/update").get(updateCategory_get);

module.exports = router;
