const queries = require("../db/queries");

getProject = async (req, res) => {
  const project = await queries.getProject(Number(req.params.projectID));
  res.render("viewProject", { title: project.name, project: project });
};

getNewProject = async (req, res) => {
  res.render("editProject", {
    title: "New Project",
    action: "/project/new",
    project: { name: "", department: "", tasks: [] },
  });
};

postNewProject = async (req, res) => {
  const newProject = cleanUpInputProjectData(
    req.params.projectID,
    req.body.name,
    req.body.department,
    req.body.tasks
  );

  await queries.addProject(newProject);
  res.redirect("/");
};

getEditProject = async (req, res) => {
  const project = await queries.getProject(req.params.projectID);
  res.render("editProject", {
    title: project.name,
    action: `/project/${project.id}/edit`,
    project: project,
  });
};

postEditProject = async (req, res) => {
  const updatedProject = cleanUpInputProjectData(
    req.params.projectID,
    req.body.name,
    req.body.department,
    req.body.tasks
  );
  await queries.updateProject(updatedProject);
  res.redirect("/");
};

postDeleteProject = async (req, res) => {
  await queries.deleteProject(req.params.projectID);
  res.redirect("/");
};

function cleanUpInputProjectData(projectID, name, department, tasks) {
  return {
    id: projectID,
    name: name,
    department: department,
    tasks: tasks.split(","),
  };
}

module.exports = {
  getProject,
  getNewProject,
  postNewProject,
  getEditProject,
  postEditProject,
  postDeleteProject,
};
