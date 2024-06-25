const Category = require("../models/category");

const Product = require("../models/product");

const asyncHandler = require("express-async-handler");

// @desc Display Create Product Form
// @route GET /products/create
// @access Private
exports.createProduct_get = asyncHandler(async (req, res) => {
  res.locals.categories = await Category.find({});
  res.render("product_form");
});

// @desc Handle the Create Product Process
// @route POST /products/create
// @access Private
exports.createProduct_post = asyncHandler(async (req, res) => {
  await Product.create({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    quantity: req.body.quantity
  });
  res.redirect(303, "/products");
});

// @desc Display All Products
// @route GET /products
// @access Public
exports.displayAllProducts = asyncHandler(async (req, res, next) => {
  res.locals.products = await Product.find({}).populate("category").exec();
  res.render("product_list");
});

// @desc Display Single Product With ID
// @route GET /products/:id
// @access Public
exports.getProduct = asyncHandler(async (req, res) => {
  res.locals.product = await Product.findById(req.params.id)
    .populate("category")
    .exec();
  res.render("product_details");
});

// @desc Display Update Product Form
// @route GET /products/:id/update
// @access Private
exports.updateProduct_get = asyncHandler(async (req, res) => {
  const [product, categories] = await Promise.all([
    Product.findById(req.params.id).populate("category").exec(),
    Category.find({}).exec()
  ]);
  res.locals = { product, categories };
  res.render("product_form");
});

// @desc Handle Updating the Product
// @route PUT /product/:id
// @access Private
exports.updateProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    _id: req.params.id,
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    quantity: req.body.quantity
  });
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    product
  );
  res.redirect(303, updatedProduct.url);
});

// @desc Delete a Product With Id
// @route DELETE /product/:id
// @access Private
exports.deleteProduct = asyncHandler(async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect(307, "/products");
});
