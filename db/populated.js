const client = require("./client");

const createTablesSQL = `
CREATE TABLE IF NOT EXISTS departments (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (255),
  department_id INTEGER,
  FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS project_tasks (
  project_id INTEGER,
  task_id INTEGER,
  PRIMARY KEY (project_id, task_id),
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
);
`;

const insertValuesSQL = `
-- Departments
INSERT INTO departments (name) VALUES
('Engineering'),
('Marketing'),
('Finance'),
('HR'),
('Design'),
('Operations'),
('Research'),
('Sales'),
('Legal'),
('Support');

-- Tasks
INSERT INTO tasks (name) VALUES
('Write Documentation'),
('Develop API'),
('Create Presentation'),
('Client Meeting'),
('Prepare Budget'),
('Design Mockups'),
('Code Review'),
('Data Entry'),
('Market Analysis'),
('User Testing'),
('Onboarding'),
('Team Training'),
('Bug Fixing'),
('Legal Review'),
('Customer Support'),
('Content Writing'),
('Deploy to Server'),
('Prototype'),
('Risk Assessment'),
('Performance Review');

-- Projects
INSERT INTO projects (name, department_id) VALUES
('Website Redesign', 1),
('Mobile App Development', 1),
('Product Launch Campaign', 2),
('Social Media Strategy', 2),
('Annual Financial Audit', 3),
('Budget Forecasting', 3),
('Employee Handbook Update', 4),
('Recruitment Drive', 4),
('Brand Guidelines', 5),
('UI Overhaul', 5),
('Logistics Optimization', 6),
('Supplier Management', 6),
('AI Research Initiative', 7),
('Sales Dashboard', 8),
('Compliance Framework', 9);

-- Project ↔ Tasks
-- Website Redesign
INSERT INTO project_tasks (project_id, task_id) VALUES
(1, 2),  -- Develop API
(1, 6),  -- Design Mockups
(1, 7),  -- Code Review
(1, 10), -- User Testing
(1, 16); -- Content Writing

-- Mobile App Development
INSERT INTO project_tasks (project_id, task_id) VALUES
(2, 2),
(2, 7),
(2, 12),
(2, 17);

-- Product Launch Campaign
INSERT INTO project_tasks (project_id, task_id) VALUES
(3, 3),
(3, 9),
(3, 16);

-- Social Media Strategy
INSERT INTO project_tasks (project_id, task_id) VALUES
(4, 3),
(4, 9),
(4, 16);

-- Annual Financial Audit
INSERT INTO project_tasks (project_id, task_id) VALUES
(5, 5),
(5, 8),
(5, 19);

-- Budget Forecasting
INSERT INTO project_tasks (project_id, task_id) VALUES
(6, 5),
(6, 9),
(6, 18);

-- Employee Handbook Update
INSERT INTO project_tasks (project_id, task_id) VALUES
(7, 11),
(7, 12),
(7, 16);

-- Recruitment Drive
INSERT INTO project_tasks (project_id, task_id) VALUES
(8, 4),
(8, 12),
(8, 11);

-- Brand Guidelines
INSERT INTO project_tasks (project_id, task_id) VALUES
(9, 6),
(9, 16),
(9, 3);

-- UI Overhaul
INSERT INTO project_tasks (project_id, task_id) VALUES
(10, 6),
(10, 7),
(10, 10),
(10, 13);

-- Logistics Optimization
INSERT INTO project_tasks (project_id, task_id) VALUES
(11, 18),
(11, 5),
(11, 17);

-- Supplier Management
INSERT INTO project_tasks (project_id, task_id) VALUES
(12, 8),
(12, 17),
(12, 19);

-- AI Research Initiative
INSERT INTO project_tasks (project_id, task_id) VALUES
(13, 18),
(13, 19),
(13, 13);

-- Sales Dashboard
INSERT INTO project_tasks (project_id, task_id) VALUES
(14, 2),
(14, 9),
(14, 10);

-- Compliance Framework
INSERT INTO project_tasks (project_id, task_id) VALUES
(15, 14),
(15, 19),
(15, 5);
`;

async function main() {
  console.log("seeding");

  await client.connect();
  await client.query(createTablesSQL);
  await client.query(insertValuesSQL);
  await client.end();

  console.log("done");
}

main();
