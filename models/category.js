const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true },
  description: String
});

categorySchema.virtual("url").get(function () {
  return `/categories/${this._id}`;
});

module.exports = mongoose.model("Category", categorySchema);
