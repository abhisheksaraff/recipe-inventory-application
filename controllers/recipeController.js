const queries = require("../db/queries");

async function getRecipe(recipeID) {
  const recipe = await queries.getRecipe(recipeID);
  return recipe;
}

async function addRecipe(recipe) {
  await queries.addRecipe(recipe);
}

async function updateRecipe(recipe) {
  await queries.updateRecipe(recipe);
}

async function deleteRecipe(recipeID) {
  await queries.deleteRecipe(recipeID);
}

function cleanUpInputRecipeData(recipeID, name, cuisine, ingredients) {
  const newRecipe = {
    id: recipeID,
    name: name,
    cuisine: cuisine,
    ingredients: ingredients.split(","),
  };
  return newRecipe;
}

module.exports = { getRecipe, addRecipe, updateRecipe, deleteRecipe, cleanUpInputRecipeData };
