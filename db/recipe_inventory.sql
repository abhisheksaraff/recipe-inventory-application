-- -------------------------------------------------------------
-- TablePlus 6.2.1(578)
--
-- https://tableplus.com/
--
-- Database: recipe_inventory
-- Generation Time: 2025-02-14 01:49:52.4650
-- -------------------------------------------------------------


DROP TABLE IF EXISTS "public"."cuisines";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."cuisines" (
    "id" int4 NOT NULL,
    "name" varchar(255),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."ingredients";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."ingredients" (
    "id" int4 NOT NULL,
    "name" varchar(255),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."recipe_ingredients";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."recipe_ingredients" (
    "recipe_id" int4 NOT NULL,
    "ingredient_id" int4 NOT NULL,
    PRIMARY KEY ("recipe_id","ingredient_id")
);

DROP TABLE IF EXISTS "public"."recipes";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."recipes" (
    "id" int4 NOT NULL,
    "name" varchar(255),
    "cuisine_id" int4,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."cuisines" ("id", "name") VALUES
(1, 'Italian'),
(2, 'Mexican'),
(3, 'Indian'),
(4, 'Chinese'),
(5, 'French'),
(6, 'Thai'),
(7, 'Japanese'),
(8, 'American'),
(9, 'Greek'),
(10, 'Spanish');

INSERT INTO "public"."ingredients" ("id", "name") VALUES
(1, 'Tomato Sauce'),
(2, 'Spaghetti'),
(3, 'Taco Shells'),
(4, 'Chicken'),
(5, 'Butter'),
(6, 'Cheese'),
(7, 'Garlic'),
(8, 'Onions'),
(9, 'Cilantro'),
(10, 'Rice'),
(11, 'Lemon'),
(12, 'Basil'),
(13, 'Beef'),
(14, 'Olives'),
(15, 'Soy Sauce'),
(16, 'Peppers'),
(17, 'Mushrooms'),
(18, 'Curry Powder'),
(19, 'Fish Sauce'),
(20, 'Cucumber'),
(21, 'Tea');

INSERT INTO "public"."recipe_ingredients" ("recipe_id", "ingredient_id") VALUES
(1, 1),
(1, 2),
(1, 7),
(1, 8),
(1, 12),
(2, 1),
(2, 2),
(2, 6),
(2, 7),
(2, 12),
(3, 3),
(3, 4),
(3, 8),
(3, 9),
(4, 4),
(4, 6),
(4, 7),
(4, 8),
(4, 9),
(5, 4),
(5, 5),
(5, 8),
(5, 18),
(6, 4),
(6, 7),
(6, 8),
(6, 18),
(6, 19),
(7, 6),
(7, 9),
(7, 10),
(7, 12),
(8, 4),
(8, 7),
(8, 14),
(8, 15),
(9, 2),
(9, 5),
(9, 6),
(9, 8),
(10, 6),
(10, 7),
(10, 8),
(10, 13),
(11, 4),
(11, 10),
(11, 12),
(11, 16),
(12, 4),
(12, 7),
(12, 15),
(12, 18),
(13, 4),
(13, 7),
(13, 12),
(13, 19),
(14, 6),
(14, 8),
(14, 13),
(14, 17),
(15, 8),
(15, 9),
(15, 13),
(15, 15);

INSERT INTO "public"."recipes" ("id", "name", "cuisine_id") VALUES
(1, 'Spaghetti Bolognese', 1),
(2, 'Margherita Pizza', 1),
(3, 'Tacos', 2),
(4, 'Chicken Quesadilla', 2),
(5, 'Butter Chicken', 3),
(6, 'Chicken Tikka Masala', 3),
(7, 'Spring Rolls', 4),
(8, 'Sweet and Sour Chicken', 4),
(9, 'Croissants', 5),
(10, 'Beef Wellington', 5),
(11, 'Pad Thai', 6),
(12, 'Green Curry', 6),
(13, 'Sushi', 7),
(14, 'Hamburger', 8),
(15, 'Moussaka', 9);

ALTER TABLE "public"."recipe_ingredients" ADD FOREIGN KEY ("recipe_id") REFERENCES "public"."recipes"("id") ON DELETE CASCADE;
ALTER TABLE "public"."recipe_ingredients" ADD FOREIGN KEY ("ingredient_id") REFERENCES "public"."ingredients"("id") ON DELETE CASCADE;
ALTER TABLE "public"."recipes" ADD FOREIGN KEY ("cuisine_id") REFERENCES "public"."cuisines"("id") ON DELETE CASCADE;
