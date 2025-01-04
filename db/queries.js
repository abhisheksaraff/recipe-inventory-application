const pool = require("./pool");

async function getAllRecipes() {
  const { rows } = await pool.query("SELECT * FROM recipes");
  return rows;
}

async function getAllIngredients() {
  const { rows } = await pool.query("SELECT * FROM ingredients");
  return rows;
}

async function getAllCuisines() {
  const { rows } = await pool.query("SELECT * FROM cuisines");
  return rows;
}

module.exports = {
  getAllRecipes,
  getAllIngredients,
  getAllCuisines,
};
