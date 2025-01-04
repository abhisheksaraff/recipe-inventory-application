const queries = require("../db/queries");

const getAllIngredients = async (req, res) => {
  req.allIngredients = await queries.getAllIngredients();
};

module.exports = { getAllIngredients };
