var express = require('express');
var wedding = require('../models/wedding.js');
var router = express.Router();

// Create all our routes

router.get("/", function(req, res) {
	wedding.all(function(data) {
		var weddingInfo = {
			wedding: data
		};

		console.log(weddingInfo);

		res.render("index", weddingInfo);
	});
});

	router.post("/", function(req, res) {

		wedding.create(req.body, function(){
			res.redirect("/");
		});
	});


	router.put("/:id/:update", function(req, res) {
		var item = {id: req.params.id, condition: req.params.update};
		//console.log("condition", condition);

		if (item.condition === "0") {
			wedding.update({reserved: true}, {id: item.id}, function() {

				res.redirect("/");
			});
		}
		else {
			wedding.update({reserved: false}, item.id, function() {
				res.redirect("/");
			});
		}

	});

	// Export routes for server.js to use.
	module.exports = router;
