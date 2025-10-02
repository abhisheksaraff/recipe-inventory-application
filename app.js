const express = require("express");
const app = express();

// Load .env file contents
require("dotenv").config();

const indexRouter = require("./routes/indexRouter");
const projectRouter = require("./routes/projectRouter"); // updated

// This enables EJS as the view engine, and that our app should look for templates in the /views subdirectory.
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serves static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Middleware to parse URL-encoded data from HTML form submit
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/project", projectRouter); // updated

app.listen(process.env.PORT, () => {
  console.log(
    `Project Tracker Express app - listening on port ${process.env.PORT}`
  );
});
