const queries = require("../db/queries");

getAllProjects = async (req, res) => {
  const allProjects = await queries.getAllProjects();
  res.render("index", {
    title: "Project Tracker",
    allProjects: allProjects,
  });
};

module.exports = { getAllProjects };