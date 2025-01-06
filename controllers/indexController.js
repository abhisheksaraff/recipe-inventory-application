const queries = require("../db/queries");

getAllRecipes = async (req, res) => {
  const allRecipes = await queries.getAllRecipes();
  res.render("index", {
    title: "Recipe Inventory Applicaiton",
    allRecipes: allRecipes,
  });
};

module.exports = { getAllRecipes };
