const express = require("express");
const app = express();

// Load .env file contents
require("dotenv").config();

const indexRouter = require("./routes/indexRouter");
const recipeRouter = require("./routes/recipeRouter");

// This enables EJS as the view engine, and that our app should look for templates in the /views subdirectory.
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serves static assets with EJS is similar to how we served assets previously when working directly with HTML,
// in that we can add external files to the head of the template file using the link tag.
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);
app.use("/recipe", recipeRouter);

app.listen(process.env.PORT, () => {
  console.log(`Recipes Express app - listening on port ${process.env.PORT}`);
});
