const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  price: { type: Number, required: true },
  quantity: { type: Number }
});

productSchema.virtual("url").get(function () {
  return "/products/" + this._id;
});

module.exports = mongoose.model("Product", productSchema);
