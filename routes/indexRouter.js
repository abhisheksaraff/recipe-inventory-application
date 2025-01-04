const { Router } = require("express");
const indexRouter = Router();

const indexController = require("../controllers/indexController");

indexRouter.get("/", async (req, res) => {
  const allRecipes = await indexController.getAllRecipes();
  res.render("index", {
    title: "Recipe Inventory Applicaiton",
    allRecipes: allRecipes,
  });
});

module.exports = indexRouter;
