const pool = require("./pool");

async function getAllRecipes() {
  const { rows } = await pool.query(`
      SELECT
      recipes.id AS id, 
      recipes.name AS name, 
      cuisines.name AS cuisine 
      FROM recipes 
      JOIN cuisines 
      ON recipes.cuisine_id = cuisines.id;
    `);
  return rows;
}

async function getRecipeByID(recipeID) {
  const recipeResult = await pool.query(`
    SELECT
    recipes.id AS id, 
    recipes.name AS name, 
    cuisines.name AS cuisine 
    FROM recipes 
    JOIN cuisines 
    ON recipes.cuisine_id = cuisines.id
    WHERE recipes.id = ${recipeID};
  `);
  const recipe = recipeResult.rows[0];

  const ingredientsResult = await pool.query(`
    SELECT 
    ingredients.name AS name
    FROM 
    recipe_ingredients
    JOIN 
    ingredients 
    ON 
    recipe_ingredients.ingredient_id = ingredients.id
    WHERE 
    recipe_ingredients.recipe_id = ${recipeID};
  `);

  // cleans up ingredients result from an array of objects to array of strings of ingredients
  const ingredients = ingredientsResult.rows.map(
    (ingredient) => ingredient.name
  );

  recipe.ingredients = ingredients;

  return recipe;
}

async function updateRecipe(recipe) {
  await pool.query(`
    UPDATE recipes
    SET name = '${recipe.name}', cuisine_id = ${await getCuisineID(recipe.cuisine)}
    WHERE id = ${recipe.id};
  `);

  await pool.query(`
    DELETE FROM recipe_ingredients
    WHERE recipe_id = ${recipe.id};  
  `);

  recipe.ingredients.forEach(async (ingredient) => {
    await pool.query(`
      INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
      VALUES (${recipe.id}, ${await getIngredientID(ingredient)})
    `);
  });
}

async function getIngredientID(ingredient) {
  // Check if exists
  const { rows } = await pool.query(`
    SELECT id
    FROM ingredients
    WHERE name = '${ingredient}';
  `);

  // if exists
  if (rows.length > 0) return rows[0].id;
  // if doesn't exist
  else {
    await pool.query(`
      INSERT INTO ingredients (name)
      VALUES ('${ingredient}');
    `);

    const { rows } = await pool.query(`
      SELECT id
      FROM ingredients
      WHERE name = '${ingredient}';
    `);

    return rows[0].id;
  }
}

async function getCuisineID(cuisine) {
  // Check if exists
  const { rows } = await pool.query(`
    SELECT id
    FROM cuisines
    WHERE name = '${cuisine}';
  `);

  // if exists
  if (rows.length > 0) return rows[0].id;
  // if doesn't exist
  else {
    await pool.query(`
      INSERT INTO cuisines (name)
      VALUES ('${cuisine}');
    `);

    const { rows } = await pool.query(`
      SELECT id
      FROM cuisines
      WHERE name = '${cuisine}';
    `);

    return rows[0].id;
  }
}

module.exports = {
  getAllRecipes,
  getRecipeByID,
  updateRecipe,
};
