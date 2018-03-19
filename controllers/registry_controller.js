// Eric Goldstein, Pramila Khanal, Sam Bouzroud, Jeffrey Phelps - 
//  DU Web Dev Bootcamp 2017/2018 - Mod-17 Homework - Project 2

var express = require('express');
var wedding = require('../models/wedding.js');
var router = express.Router();
var path = require('path');
// Create all our routes

router.get("/", function (req, res) {
	wedding.all(function (data) {
		var weddingInfo = {
			wedding: data
		};

		// console.log(weddingInfo);

		res.render("index", weddingInfo);
	});
});

router.get("/signup", function (req, res) {
	res.sendFile(path.join(__dirname, '../public/assets/js/Signup.html'));
});

router.post("/signup", function (req, res) {
	res.render("index");
});

router.get("/authenticated", function (req, res) {
	wedding.all(function (data) {
		var weddingInfo = {
			wedding: data
		};

		// console.log(weddingInfo);

		res.render("index_authed", weddingInfo);
	});
});




router.get("/guestlist", function (req, res) {
	wedding.all(function (data) {
		var weddingInfo = {
			wedding: data
		};

		// console.log(weddingInfo);

		res.render("guestlist", weddingInfo);
	});
});



router.put("/:id/:update", function (req, res) {
	var item = {
		id: req.params.id,
		condition: req.params.update
	};
	//console.log("condition", condition);

	if (item.condition === "0") {
		wedding.update({
			reserved: true
		}, {
			id: item.id
		}, function () {

		});
	} else {
		wedding.update({
			reserved: false
		}, item.id, function () {});
	}
	wedding.all(function (data) {
		var weddingInfo = {
			wedding: data
		};

		// console.log(weddingInfo);

		res.json(data);
	});

});




router.put("/guestlist/:id/:update", function (req, res) {
	var item = {
		id: req.params.id,
		condition: req.params.update
	};
	// 		//console.log("condition", condition);

	if (item.condition === "0") {
		wedding.update({
			reserved: true
		}, {
			id: item.id
		}, function () {

		});
	} else {
		wedding.update({
			reserved: false
		}, item.id, function () {});
	}
	wedding.all(function (data) {

		var weddingInfo = {
			wedding: data
		};

		// 			// console.log(weddingInfo);

		res.json(data);
	});

});

router.post("/", function (req, res) {

	console.log(req.body);

	wedding.create(req.body, function () {
		wedding.all(function (data) {
			var weddingInfo = {
				wedding: data
			};

			res.json(data);
		});
	});
});





// Export routes for server.js to use.
module.exports = router;