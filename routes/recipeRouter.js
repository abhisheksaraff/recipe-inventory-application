const { Router } = require("express");
const recipeRouter = Router();

const recipeController = require("../controllers/recipeController");

recipeRouter.get("/new", recipeController.getNewRecipe);
recipeRouter.post("/new", recipeController.postNewRecipe);

recipeRouter.get("/:recipeID", recipeController.getRecipe);
recipeRouter.get("/:recipeID/edit", recipeController.getEditRecipe);
recipeRouter.post("/:recipeID/edit", recipeController.postEditRecipe);

recipeRouter.get("/:recipeID/delete", recipeController.postDeleteRecipe);

module.exports = recipeRouter;
