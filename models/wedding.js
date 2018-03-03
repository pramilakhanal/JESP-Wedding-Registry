
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

