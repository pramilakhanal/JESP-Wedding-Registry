<<<<<<< HEAD
var connection = require("../config/connection.js");


// object for all our SQL statement functions
var orm = {

	selectAll: function(tableInput, callback) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});
	},

	insertOne: function(table, insertObj, callback) {
    var queryString = "INSERT INTO " + table + " SET ?";
    connection.query(queryString, [insertObj, {reserved: false}], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  //UPDATE wedding SET reserved = false WHERE id = 1;
  	updateOne: function(table, objColVals, condition, callback) {
    var queryString = "UPDATE " + table + " SET ? WHERE ?";
    connection.query(queryString, [objColVals, condition], function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
=======
var connection = require('./connection.js');

var orm ={
  selectAll: function(table, callback){
    var queryString = 'SELECT * FROM ' + table;

    connection.query(queryString, function(err, data){
      if(err) throw err;
      callback(data);
    });
  },

  insertOne: function(table, column, burgerInput, callback){
    var queryString = 'INSERT INTO ' + table + '(' + column + ') VALUES (?)';

    connection.query(queryString, [burgerInput], function(err, data){
      if(err) throw err;
      callback(data);
    });
  },

  updateOne: function(table, col, colVal, condition, conditionVal, callback){
    var queryString = 'UPDATE ' + table + ' SET ' + col + '=?' + 'WHERE ' + condition + '=?';

    connection.query(queryString, [colVal, conditionVal], function(err, data){
      if(err) throw err;
      callback(data);
    });
  },

  deleteOne: function(table, condition, conditionVal, callback){
    var queryString = 'DELETE FROM ' + table + ' WHERE ' + condition + '=?';

    connection.query(queryString, [conditionVal], function(err, data){
      if(err) throw err;
      callback(data);
>>>>>>> b1a05e9969c28972b13c643f3155d1f21ee083c9
    });
  }
};

<<<<<<< HEAD
 module.exports = orm;
=======
module.exports = orm;
>>>>>>> b1a05e9969c28972b13c643f3155d1f21ee083c9
