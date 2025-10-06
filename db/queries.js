const pool = require("./pool");

async function getAllProjects() {
  const { rows } = await pool.query(`
    SELECT
      projects.id AS id, 
      projects.name AS name, 
      projects.category_id AS category_id,
      categories.name AS category
    FROM projects
    JOIN categories
      ON projects.category_id = categories.id;
  `);
  return rows;
}

async function getProject(projectID) {
  const projectResult = await pool.query(`
    SELECT
    projects.id AS id, 
    projects.name AS name, 
    categories.name AS category 
    FROM projects 
    JOIN categories 
    ON projects.category_id = categories.id
    WHERE projects.id = ${projectID};
  `);
  const project = projectResult.rows[0];

  const tasksResult = await pool.query(`
    SELECT 
    tasks.name AS name
    FROM 
    project_tasks
    JOIN 
    tasks 
    ON 
    project_tasks.task_id = tasks.id
    WHERE 
    project_tasks.project_id = ${projectID};
  `);

  const tasks = tasksResult.rows.map((task) => task.name);
  project.tasks = tasks;

  return project;
}

async function addProject(project) {
  await pool.query(`
   INSERT INTO projects (name, category_id) 
   VALUES ('${project.name}', ${await getCategoryID(project.category)});
  `);

  project.tasks.forEach(async (task) => {
    await pool.query(`
      INSERT INTO project_tasks (project_id, task_id)
      VALUES (${await getProjectID(project)}, ${await getTaskID(task)})
    `);
  });
}

async function updateProject(project) {
  await pool.query(`
    UPDATE projects
    SET name = '${project.name}', category_id = ${await getCategoryID(
    project.category
  )}
    WHERE id = ${project.id};
  `);

  await pool.query(`
    DELETE FROM project_tasks
    WHERE project_id = ${project.id};  
  `);

  project.tasks.forEach(async (task) => {
    await pool.query(`
      INSERT INTO project_tasks (project_id, task_id)
      VALUES (${project.id}, ${await getTaskID(task)})
    `);
  });
}

async function getProjectID(project) {
  const { rows } = await pool.query(`
    SELECT id
    FROM projects
    WHERE name = '${project.name}';
  `);

  return rows[0].id;
}

async function getTaskID(task) {
  const { rows } = await pool.query(`
    SELECT id
    FROM tasks
    WHERE name = '${task}';
  `);

  if (rows.length > 0) return rows[0].id;
  else {
    await pool.query(`
      INSERT INTO tasks (name)
      VALUES ('${task}');
    `);

    const { rows } = await pool.query(`
      SELECT id
      FROM tasks
      WHERE name = '${task}';
    `);

    return rows[0].id;
  }
}

async function getCategoryID(category) {
  const { rows } = await pool.query(`
    SELECT id
    FROM categories
    WHERE name = '${category}';
  `);

  if (rows.length > 0) return rows[0].id;
  else {
    await pool.query(`
      INSERT INTO categories (name)
      VALUES ('${category}');
    `);

    const { rows } = await pool.query(`
      SELECT id
      FROM categories
      WHERE name = '${category}';
    `);
    return rows[0].id;
  }
}

async function deleteProject(projectID) {
  await pool.query(`
    DELETE 
    FROM projects
    WHERE id = ${projectID};
  `);
}

async function cleanUpOrphanCategories() {
  await pool.query(`
    DELETE 
    FROM categories 
    WHERE id NOT IN (SELECT projects.category_id AS id FROM projects);
  `);
}

async function cleanUpOrphanTasks() {
  await pool.query(`
    DELETE
    FROM tasks 
    WHERE id NOT IN (SELECT project_tasks.task_id  FROM project_tasks);
  `);
}

module.exports = {
  getAllProjects,
  getProject,
  addProject,
  updateProject,
  deleteProject,
};
