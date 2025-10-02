const { Router } = require("express");
const projectRouter = Router();

const projectController = require("../controllers/projectController");

// Create new project
projectRouter.get("/new", projectController.getNewProject);
projectRouter.post("/new", projectController.postNewProject);

// Read / View a project
projectRouter.get("/:projectID", projectController.getProject);

// Update a project
projectRouter.get("/:projectID/edit", projectController.getEditProject);
projectRouter.post("/:projectID/edit", projectController.postEditProject);

// Delete a project
projectRouter.get("/:projectID/delete", projectController.postDeleteProject);

module.exports = projectRouter;
