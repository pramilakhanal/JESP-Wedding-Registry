<<<<<<< HEAD
// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "wedding_db"
});

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
=======
var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Memememe1',
    database : 'wedding_db'
  });
};

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };

  console.log('connected as id ' + connection.threadId);

});

module.exports = connection;
>>>>>>> b1a05e9969c28972b13c643f3155d1f21ee083c9
