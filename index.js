const express = require("express");

const connectDB = require("./dbConnection.js");

const categoryRoutes = require("./routes/categoryRoute.js");
const productRoutes = require("./routes/productRoute.js");
const indexRoutes = require("./routes/indexRoute.js");

require("dotenv").config();

const app = express();

connectDB();

const PORT = process.env.PORT;

// Configure settings to use
app.set("view engine", "pug");

// Apply middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`Server running on  localhost:${PORT}`));

app.get("/", indexRoutes);

// app.get("/", userRoutes);

app.use("/categories", categoryRoutes);

app.use("/products", productRoutes);
