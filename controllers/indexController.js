const queries = require("../db/queries");

async function getAllRecipes() {
  const allRecipes = await queries.getAllRecipes();
  return allRecipes;
}

module.exports = { getAllRecipes };
