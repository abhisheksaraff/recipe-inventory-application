const { Router } = require("express");
const recipeRouter = Router();

const recipeController = require("../controllers/recipeController");

recipeRouter.get("/new", async(req, res) => {
  //res.render("viewRecipe", { title: "New Recipe"});
});

recipeRouter.get("/:recipeID", async (req, res) => {
  const recipe = await recipeController.getRecipe(
    Number(req.params.recipeID)
  );
  res.render("viewRecipe", { title: recipe.name, recipe: recipe });
});

recipeRouter.get("/:recipeID/edit", async (req, res) => {
  const recipe = await recipeController.getRecipe(req.params.recipeID);
  res.render("editRecipe", {
    title: recipe.name,
    action: `/recipe/${recipe.id}/edit`,
    recipe: recipe,
  });
});

recipeRouter.post("/:recipeID/edit", async (req, res) => {
  const newRecipe = recipeController.cleanUpInputRecipeData(
    req.params.recipeID,
    req.body.name,
    req.body.cuisine,
    req.body.ingredients
  );

  recipeController.updateRecipe(newRecipe);
  res.redirect("/");
});

recipeRouter.get("/:recipeID/delete", async (req, res) => {
  recipeController.deleteRecipe(req.params.recipeID);
  res.redirect("/");
});

module.exports = recipeRouter;
