const { Router } = require("express");
const recipeRouter = Router();

recipeRouter.get("/:RecipeId", (req, res) => {
  res.render("viewRecipe", { title: req.params.RecipeId });
});

recipeRouter.get("/:RecipeId/edit", (req, res) => {
  res.render("editRecipe", { title: req.params.RecipeId });
});

recipeRouter.post("/:RecipeId/edit", (req, res) => {
  res.send("Edit Recipe");
});

recipeRouter.post("/:RecipeId/delete", (req, res) => {
  res.send("Delete Recipe");
});

module.exports = recipeRouter;
