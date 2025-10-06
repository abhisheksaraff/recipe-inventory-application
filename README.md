# Project Management App

[comment]: <([![Website](https://img.shields.io/badge/Website-yourapp.com-blue)](https://yourapp.com)>

[![Node.js](https://img.shields.io/badge/Node.js-green?logo=node.js)](https://nodejs.org/) [![Express](https://img.shields.io/badge/Express.js-black?logo=express)](https://expressjs.com/) [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-blue?logo=postgresql)](https://www.postgresql.org/) [![EJS](https://img.shields.io/badge/EJS-red?logo=ejs)](https://ejs.co/) [![JavaScript](https://img.shields.io/badge/JavaScript-yellow?logo=javascript)](https://www.javascript.com/) [![HTML5](https://img.shields.io/badge/HTML5-orange?logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![GitHub](https://img.shields.io/badge/GitHub-black?logo=github)](https://github.com/)

## Project Overview

The **Project Management App** helps teams organize projects, departments, and tasks efficiently. Users can:

- Manage projects and assign them to departments
- Link multiple tasks to projects
- Maintain relational data integrity with cascading deletes
- Track department and task assignments

---

## Tech Stack

- **Node.js + Express.js** – Backend server and API
- **PostgreSQL** – Relational database with enforced constraints
- **EJS** – Templating engine for rendering UI
- **dotenv** – Environment variable management
- **Git + GitHub** – Version control

---

## Project Setup

### 1. Clone Repository

`bash`
```
git clone <your-repo-link>
cd project-management-app
```

### 2. Install Dependencies

`bash`
```
npm install
```

### 3. Environment Variables

Create a `.env` file:

`env`
```
PORT=3000
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/project_management_db
```

### 4. Seed Database

Populate departments, tasks, projects, and project-task associations:

`bash`
```
node seed.js
```

### 5. Run the App

`bash`
```
npm start
```

---

## Key Features

- **Projects:** Create, view, edit, and delete projects
- **Departments:** Assign projects to departments
- **Tasks:** Link multiple tasks to projects
- **Relational Integrity:** Cascading deletes maintain clean data
- **Responsive UI:** EJS templates for device-friendly layout

---

## Database Schema

- **Departments**: `id`, `name`
- **Tasks**: `id`, `name`
- **Projects**: `id`, `name`, `department_id` (FK → Departments)
- **Project_Tasks**: `project_id`, `task_id` (Composite PK, FK → Projects & Tasks)

---

## Future Improvements

- Add **User Authentication** and project ownership
- **Task Status Tracking:** Pending, In-Progress, Completed
- **Search & Filter Projects** by department or task
- Integrate **React or Tailwind CSS** for modern UI
- Add **API endpoints** for external integrations

---

## Project Structure (Selected)

```
/app
/server.js
/seed.js
/db
/client.js
/routes
/projects.js
/tasks.js
/departments.js
/public
/demo.gif
.env
package.json
```

---

## Conclusion

This Project Management App demonstrates **full-stack development**, **PostgreSQL relational design**, **cascading relationships**, and **project-task management**. It’s optimized for maintainability and scalability in real-world team environments.
