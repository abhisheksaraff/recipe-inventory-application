const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  // OR
  // connectionString: `postgresql://${process.env.DB_USER}:<${process.env.DB_PASSWORD}>@${process.env.DB_HOST}:process.env.DB_PORT/${process.env.DB_NAME}`,
});

module.exports = client;
