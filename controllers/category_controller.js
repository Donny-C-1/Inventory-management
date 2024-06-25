const asyncHandler = require("express-async-handler");

const Category = require("../models/category");

// @desc Display Create Category Form
// @route GET /categories/create
// @access Private
exports.createCategory_get = (req, res) => {
  res.render("category_form");
};

// @desc Handle the Create Product Process
// @route POST /product/create
// @access Private
exports.createCategory_post = asyncHandler(async (req, res) => {
  await Category.create({
    name: req.body.name,
    description: req.body.description
  });
  res.redirect(303, "/categories");
});

// @desc Display All Categories
// @route GET /categories
// @access Public
exports.displayCategories = asyncHandler(async (req, res) => {
  res.locals.categories = await Category.find({});
  res.render("category_list");
});

// @desc Display Single Category With ID
// @route GET /categories/:id
// @access Public
exports.getCategory = asyncHandler(async (req, res) => {
  res.locals.category = await Category.findById(req.params.id).exec({});
  res.render("category_details");
});

// @desc Display Update Category Form
// @route GET /categories/:id/update
// @access Private
exports.updateCategory_get = asyncHandler(async (req, res) => {
  res.locals.category = await Category.findById(req.params.id);
  res.render("category_form");
});

// @desc Handle Updating the Category
// @route POST /categories/:id
// @access Private
exports.updateCategory_post = asyncHandler(async (req, res) => {
  const category = new Category({
    _id: req.params.id,
    name: req.body.name,
    description: req.body.description
  });
  const updatedCategory = await Category.findByIdAndUpdate(
    req.params.id,
    category
  );
  res.redirect(303, updatedCategory.url);
});

// @desc Delete a Category With Id
// @route DELETE /product/:id
// @access Private
exports.deleteCategory = asyncHandler(async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.redirect(307, "/categories");
});
