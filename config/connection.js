// Eric Goldstein, Pramila Khanal, Sam Bouzroud, Jeffrey Phelps - 
//  DU Web Dev Bootcamp 2017/2018 - Mod-17 Homework - Project 2//

// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "bergerd306",
  database: "wedding_db"
});
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;