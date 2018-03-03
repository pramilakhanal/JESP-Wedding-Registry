<<<<<<< HEAD
var orm = require("../config/orm.js");

 var weddingRegistry = {
  all: function(callback) {
    orm.selectAll("wedding", function(res) {
      callback(res);
    });
  },

  create: function(req, callback)
  {
  	orm.insertOne("wedding", req, function(res) {
  		callback(res);
  	});
  },

  update: function(objColVals, condition, callback) {
    orm.updateOne("wedding", objColVals, condition, function(res) {
      callback(res);
    });
  }
  
};

// Export the database functions for the controller (catsController.js).
module.exports = weddingRegistry;
=======
var orm = require('../config/orm.js');

var wedding = {
  selectAll: function(cb){
    orm.selectAll('gifts', function(res){
      cb(res);
    });
  },
  getMenu: function(cb){
    orm.selectAll('menu', function(res){
      cb(res);
    });
  },
  insertOne: function(val, cb){
    orm.insertOne('burgers', 'burger_name', val, function(res){
      cb(res);
    });
  },
  updateOne: function(colVal, conditionVal, cb){
    orm.updateOne('burgers', 'devoured', colVal, 'id', conditionVal, function(res){
      cb(res);
    });
  },
  deleteOne: function(conditionVal, cb){
    orm.deleteOne('burgers', 'id', conditionVal, function(res){
      cb(res);
    });
  }
};

module.exports = burger;
>>>>>>> b1a05e9969c28972b13c643f3155d1f21ee083c9
