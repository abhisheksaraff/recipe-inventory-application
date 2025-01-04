const queries = require("../db/queries");

async function getAllRecipes() {
  const allRecipes = await queries.getAllRecipes();

  // formats sql output from [ { name: 'Italian' }, { name: 'Mexican' },] to['Italian',  'Mexican',]
  return allRecipes.map(recipe => recipe.name);
}

module.exports = { getAllRecipes };
