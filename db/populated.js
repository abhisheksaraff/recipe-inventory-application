const client = require("./client");

const createTablesSQL = `
CREATE TABLE IF NOT EXISTS cuisines (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS ingredients (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS recipes (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR (255),
cuisine_id INTEGER,
FOREIGN KEY (cuisine_id) REFERENCES cuisines(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS recipe_ingredients (
recipe_id INTEGER,
ingredient_id INTEGER,
PRIMARY KEY (recipe_id, ingredient_id),
FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE CASCADE
);
`;

const insertValuesSQL = `
-- Insert data into cuisines table
INSERT INTO cuisines (name) VALUES
('Italian'),
('Mexican'),
('Indian'),
('Chinese'),
('French'),
('Thai'),
('Japanese'),
('American'),
('Greek'),
('Spanish');

-- Insert data into ingredients table
INSERT INTO ingredients (name) VALUES
('Tomato Sauce'),
('Spaghetti'),
('Taco Shells'),
('Chicken'),
('Butter'),
('Cheese'),
('Garlic'),
('Onions'),
('Cilantro'),
('Rice'),
('Lemon'),
('Basil'),
('Beef'),
('Olives'),
('Soy Sauce'),
('Peppers'),
('Mushrooms'),
('Curry Powder'),
('Fish Sauce'),
('Cucumber');

-- Insert data into recipes table
INSERT INTO recipes (name, cuisine_id) VALUES
('Spaghetti Bolognese', 1),
('Margherita Pizza', 1),
('Tacos', 2),
('Chicken Quesadilla', 2),
('Butter Chicken', 3),
('Chicken Tikka Masala', 3),
('Spring Rolls', 4),
('Sweet and Sour Chicken', 4),
('Croissants', 5),
('Beef Wellington', 5),
('Pad Thai', 6),
('Green Curry', 6),
('Sushi', 7),
('Hamburger', 8),
('Moussaka', 9);

-- Insert data into recipe_ingredients table
-- Spaghetti Bolognese
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(1, 1),  -- Tomato Sauce
(1, 2),  -- Spaghetti
(1, 7),  -- Garlic
(1, 8),  -- Onions
(1, 12); -- Basil

-- Margherita Pizza
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(2, 1),  -- Tomato Sauce
(2, 2),  -- Spaghetti (use for pizza dough)
(2, 6),  -- Cheese
(2, 7),  -- Garlic
(2, 12); -- Basil

-- Tacos
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(3, 3),  -- Taco Shells
(3, 4),  -- Chicken
(3, 9),  -- Cilantro
(3, 8);  -- Onions

-- Chicken Quesadilla
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(4, 4),  -- Chicken
(4, 6),  -- Cheese
(4, 9),  -- Cilantro
(4, 7),  -- Garlic
(4, 8);  -- Onions

-- Butter Chicken
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(5, 4),  -- Chicken
(5, 5),  -- Butter
(5, 8),  -- Onions
(5, 18); -- Fish Sauce

-- Chicken Tikka Masala
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(6, 4),  -- Chicken
(6, 7),  -- Garlic
(6, 8),  -- Onions
(6, 18), -- Fish Sauce
(6, 19); -- Cucumber

-- Spring Rolls
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(7, 9),  -- Cilantro
(7, 10), -- Rice
(7, 6),  -- Cheese
(7, 12); -- Basil

-- Sweet and Sour Chicken
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(8, 4),  -- Chicken
(8, 7),  -- Garlic
(8, 14), -- Olives
(8, 15); -- Peppers

-- Croissants
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(9, 6),  -- Cheese
(9, 8),  -- Onions
(9, 2),  -- Spaghetti (used in dough)
(9, 5);  -- Butter

-- Beef Wellington
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(10, 13), -- Beef
(10, 6),  -- Cheese
(10, 8),  -- Onions
(10, 7);  -- Garlic

-- Pad Thai
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(11, 4),  -- Chicken
(11, 10), -- Rice
(11, 16), -- Peppers
(11, 12); -- Basil

-- Green Curry
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(12, 4),  -- Chicken
(12, 18), -- Fish Sauce
(12, 7),  -- Garlic
(12, 15); -- Peppers

-- Sushi
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(13, 4),  -- Chicken (substitute for fish in sushi rolls)
(13, 7),  -- Garlic
(13, 12), -- Basil
(13, 19); -- Cucumber

-- Hamburger
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(14, 13), -- Beef
(14, 6),  -- Cheese
(14, 8),  -- Onions
(14, 17); -- Mushrooms

-- Moussaka
INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(15, 13), -- Beef
(15, 9),  -- Cilantro
(15, 8),  -- Onions
(15, 15); -- Peppers
`;

async function main() {
  console.log("seeding");

  await client.connect();
  //await client.query(createTablesSQL);
  //await client.query(insertValuesSQL);
  await client.end();

  console.log("done");
}

main();
