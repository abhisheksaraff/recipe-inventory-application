const queries = require("../db/queries");

async function getRecipeByID(recipeID) {
  const recipe = await queries.getRecipeByID(recipeID);
  return recipe;
}

async function updateRecipe(recipe) {
  await queries.updateRecipe(recipe);
}

function cleanUpInputRecipeData(recipeID, name, cuisine, ingredients) {
  const newRecipe = {
    id: recipeID,
    name: name,
    cuisine: cuisine,
    ingredients: ingredients.split(','),
  };
  return newRecipe;
}

module.exports = { getRecipeByID, updateRecipe, cleanUpInputRecipeData };
