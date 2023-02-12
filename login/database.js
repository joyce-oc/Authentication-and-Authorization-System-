const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "userdb1"
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error.message);
  } else {
    console.log("Connected to the database.");
  }
});

module.exports = connection;