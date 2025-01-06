# recipe-inventory-application

Welcome to the Recipe Management App! This project is designed to showcase a full-stack web application using Express and PostgreSQL. It demonstrates relational database design, CRUD operations, and intuitive user interfaces. Perfect for culinary enthusiasts and a solid demonstration of web development skills for recruiters.

## Features

Recipe Inventory: Add, update, view, and delete recipes.
Relational Database Design: Strongly enforced relationships and constraints ensure data integrity.
Responsive Design: Optimized user interface for different devices using EJS templates.

## Technology Stack

Backend: Node.js, Express.js
Frontend: EJS templating engine with css styling
Database: PostgreSQL
Deployment: Deployed on Render
Version Control: Git and GitHub

## Database Schema

The app uses a relational database schema with the following tables:

Cuisines
id: Primary Key
name: Name of the cuisine (e.g., Italian, Mexican)

Ingredients
id: Primary Key
name: Name of the ingredient (e.g., Tomato, Basil)

Recipes
id: Primary Key
name: Name of the recipe (e.g., Spaghetti Bolognese)
cuisine_id: Foreign Key referencing cuisines(id)

Recipe_Ingredients
recipe_id: Foreign Key referencing recipes(id)
ingredient_id: Foreign Key referencing ingredients(id)
Composite Primary Key: (recipe_id, ingredient_id)

Constraints:
Deleting a cuisine automatically deletes associated recipes (ON DELETE CASCADE).
Deleting a recipe automatically removes its associations in recipe_ingredients.

## Application Routes

Public Routes

GET / - Home page with a list of all recipes.
GET /recipe/:id - View details of a specific recipe, including its ingredients and cuisine.

CRUD Operations

Create:
GET /recipe/new - Form to create a new recipe.
POST /recipe/new - Submit a new recipe to the database.

Update:
GET /recipe/:id/edit - Form to edit an existing recipe.
POST /recipe/:id/edit - Update recipe details in the database.

Delete:
POST /recipe/:id/delete - Delete a recipe.

## Setup Instructions

### Prerequisites

Node.js (v16+)
PostgreSQL
Git

### Installation

#### Clone the repository:
git clone https://github.com/abhisheksaraff/recipe-inventory-application.git
cd recipe-management-app

#### Install dependencies:
npm install

#### Set up environment variables:
Create a .env file with the following:
PORT=3000
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/recipes_db

#### Initialize the database:
npm run db:init

#### Run the app:
npm start
Seed the Database

#### Populate the database with dummy data:
npm run db/populated.js

## Future Improvements

User Authentication: Allow users to save personal recipe collections.
Search Functionality: Add search by ingredient or cuisine.
Enhanced Styling: Improve the design with a custom CSS framework.
API Endpoints: Expose endpoints for external applications to interact with the data.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for enhancements or bug fixes.

#### Thank you for checking out the Recipe Management App! We hope it inspires your culinary and coding adventures.