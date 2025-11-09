// backend/db.js
import mysql from "mysql2";

export const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Deport287#",
  database: "testdb"
});
