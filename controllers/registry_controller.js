var express = require('express');
var wedding = require('../models/wedding.js');
var router = express.Router();
var path = require('path');
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

router.get("/signup", function(req, res) {
	res.sendFile(path.join(__dirname, '../public/assets/js/Signup.html'));
});

router.post("/signup", function(req, res) {
	res.render("index");
});

router.get("/authenticated", function(req, res) {
	wedding.all(function(data) {
		var weddingInfo = {
			wedding: data
		};

		console.log(weddingInfo);

		res.render("index_authed", weddingInfo);
	});
});
router.put("/:id/:update", function(req, res) {
		var item = {id: req.params.id, condition: req.params.update};
		//console.log("condition", condition);

		if (item.condition === "0") {
			wedding.update({reserved: true}, {id: item.id}, function() {

			});
		}
		else {
			wedding.update({reserved: false}, item.id, function() {
			});
		}
		wedding.all(function(data) {
		var weddingInfo = {
			wedding: data
		};

		console.log(weddingInfo);

		res.render("index_authed", weddingInfo);
	});

	});

	router.post("/", function(req, res) {

		wedding.create(req.body, function(){
			wedding.all(function(data) {
		var weddingInfo = {
			wedding: data
		};

		console.log(weddingInfo);

		res.render("index_authed", weddingInfo);
	});
		});
	});
	


	

	// Export routes for server.js to use.
	module.exports = router;
