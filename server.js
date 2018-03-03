var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var expressHandlebars = require("express-handlebars");


var PORT = process.env.PORT || 3000;

var app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
// parse application/json
app.use(bodyParser.json());


app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/registry_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
