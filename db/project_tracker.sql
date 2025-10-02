-- -------------------------------------------------------------
-- TablePlus 6.2.1(578)
--
-- https://tableplus.com/
--
-- Database: project_tracker
-- Generation Time: 2025-10-02
-- -------------------------------------------------------------

DROP TABLE IF EXISTS "public"."categories" CASCADE;
CREATE TABLE "public"."categories" (
    "id" int4 NOT NULL,
    "name" varchar(255),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."tasks" CASCADE;
CREATE TABLE "public"."tasks" (
    "id" int4 NOT NULL,
    "name" varchar(255),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."project_tasks" CASCADE;
CREATE TABLE "public"."project_tasks" (
    "project_id" int4 NOT NULL,
    "task_id" int4 NOT NULL,
    PRIMARY KEY ("project_id","task_id")
);

DROP TABLE IF EXISTS "public"."projects" CASCADE;
CREATE TABLE "public"."projects" (
    "id" int4 NOT NULL,
    "name" varchar(255),
    "category_id" int4,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."categories" ("id", "name") VALUES
(1, 'Frontend'),
(2, 'Backend'),
(3, 'DevOps'),
(4, 'QA'),
(5, 'Design'),
(6, 'Operations'),
(7, 'Research'),
(8, 'Sales'),
(9, 'Legal'),
(10, 'Support');

INSERT INTO "public"."tasks" ("id", "name") VALUES
(1, 'Write Documentation'),
(2, 'Develop API'),
(3, 'Create Presentation'),
(4, 'Client Meeting'),
(5, 'Prepare Budget'),
(6, 'Design Mockups'),
(7, 'Code Review'),
(8, 'Data Entry'),
(9, 'Market Analysis'),
(10, 'User Testing'),
(11, 'Onboarding'),
(12, 'Team Training'),
(13, 'Bug Fixing'),
(14, 'Legal Review'),
(15, 'Customer Support'),
(16, 'Content Writing'),
(17, 'Deploy to Server'),
(18, 'Prototype'),
(19, 'Risk Assessment'),
(20, 'Performance Review');

INSERT INTO "public"."projects" ("id", "name", "category_id") VALUES
(1, 'Website Redesign', 1),
(2, 'Mobile App Development', 1),
(3, 'Product Launch Campaign', 2),
(4, 'Social Media Strategy', 2),
(5, 'Annual Financial Audit', 3),
(6, 'Budget Forecasting', 3),
(7, 'Employee Handbook Update', 4),
(8, 'Recruitment Drive', 4),
(9, 'Brand Guidelines', 5),
(10, 'UI Overhaul', 5),
(11, 'Logistics Optimization', 6),
(12, 'Supplier Management', 6),
(13, 'AI Research Initiative', 7),
(14, 'Sales Dashboard', 8),
(15, 'Compliance Framework', 9);

INSERT INTO "public"."project_tasks" ("project_id", "task_id") VALUES
(1, 2),
(1, 6),
(1, 7),
(1, 10),
(1, 16),
(2, 2),
(2, 7),
(2, 12),
(2, 17),
(3, 3),
(3, 9),
(3, 16),
(4, 3),
(4, 9),
(4, 16),
(5, 5),
(5, 8),
(5, 19),
(6, 5),
(6, 9),
(6, 18),
(7, 11),
(7, 12),
(7, 16),
(8, 4),
(8, 12),
(8, 11),
(9, 6),
(9, 16),
(9, 3),
(10, 6),
(10, 7),
(10, 10),
(10, 13),
(11, 18),
(11, 5),
(11, 17),
(12, 8),
(12, 17),
(12, 19),
(13, 18),
(13, 19),
(13, 13),
(14, 2),
(14, 9),
(14, 10),
(15, 14),
(15, 19),
(15, 5);

ALTER TABLE "public"."project_tasks" ADD FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE CASCADE;
ALTER TABLE "public"."project_tasks" ADD FOREIGN KEY ("task_id") REFERENCES "public"."tasks"("id") ON DELETE CASCADE;
ALTER TABLE "public"."projects" ADD FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE CASCADE;
