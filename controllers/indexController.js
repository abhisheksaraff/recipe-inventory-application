const queries = require("../db/queries");

function getColorFromId(id) {
  if (!id) return '#ccc'; // fallback if no category
  const hue = (id * 137) % 360;
  return `hsl(${hue}, 60%, 50%)`;
}

getAllProjects = async (req, res) => {
  const allProjects = await queries.getAllProjects();

  allProjects.forEach((project) => {
    project.color = getColorFromId(project.category_id);
  });

  res.render("index", {
    title: "Project Tracker",
    allProjects,
  });
};

module.exports = { getAllProjects };
