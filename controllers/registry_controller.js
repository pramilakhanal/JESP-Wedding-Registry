var express = require('express');
<<<<<<< HEAD
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
=======
var router = express.Router();
var wedding = require('../models/wedding.js');

router.get('/', function(req, res){
  //create an object that holds information from both the burger and menu table
  var info = {
    wdng: [],
    itm: []
  };
  //grab data from burger table
  burger.selectAll(function(data){
    for(var i=0;i<data.length; i++){
      info.brgr.push(data[i]);
    }
     //grab data from menu table
    burger.getMenu(function(data){
      for(var i=0;i<data.length; i++){
        info.itm.push(data[i]);
      }
      //send it all to the index.handlebars
      res.render('index', info);
    });    
  });
});


router.get('/menu', function(req, res){
  burger.getMenu(function(data){
    res.render('restaurantMenu', { itm: data });
  });
});

router.post('/create', function(req, res){
  burger.insertOne([req.body.burgerInput], function(){
    res.redirect('/');
  });
});

router.put('/update/:id', function(req, res){
  burger.updateOne([req.body.devoured], [req.params.id], function(){
    res.redirect('/');
  });
});

router.delete('/delete/:id', function(req, res){
  burger.deleteOne([req.params.id], function(){
    res.redirect('/');
  });
});

module.exports = router;
>>>>>>> b1a05e9969c28972b13c643f3155d1f21ee083c9
