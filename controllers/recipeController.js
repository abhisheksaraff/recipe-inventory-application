const queries = require("../db/queries");

getRecipe = async (req, res) => {
  const recipe = await queries.getRecipe(Number(req.params.recipeID));
  res.render("viewRecipe", { title: recipe.name, recipe: recipe });
};

getNewRecipe = async (req, res) => {
  res.render("editRecipe", {
    title: "New Recipe",
    action: "/recipe/new",
    recipe: { name: "", cuisine: "", ingredients: [] },
  });
};

postNewRecipe = async (req, res) => {
  const newRecipe = cleanUpInputRecipeData(
    req.params.recipeID,
    req.body.name,
    req.body.cuisine,
    req.body.ingredients
  );

  await queries.addRecipe(newRecipe);
  res.redirect("/");
};

getEditRecipe = async (req, res) => {
  const recipe = await queries.getRecipe(req.params.recipeID);
  res.render("editRecipe", {
    title: recipe.name,
    action: `/recipe/${recipe.id}/edit`,
    recipe: recipe,
  });
};

postEditRecipe = async (req, res) => {
  const newRecipe = cleanUpInputRecipeData(
    req.params.recipeID,
    req.body.name,
    req.body.cuisine,
    req.body.ingredients
  );
  await queries.updateRecipe(newRecipe);
  res.redirect("/");
};

postDeleteRecipe = async (req, res) => {
  await queries.deleteRecipe(req.params.recipeID);
  res.redirect("/");
};

function cleanUpInputRecipeData(recipeID, name, cuisine, ingredients) {
  const newRecipe = {
    id: recipeID,
    name: name,
    cuisine: cuisine,
    ingredients: ingredients.split(","),
  };
  return newRecipe;
}

module.exports = {
  getRecipe,
  getNewRecipe,
  postNewRecipe,
  getEditRecipe,
  postEditRecipe,
  postDeleteRecipe,
};
