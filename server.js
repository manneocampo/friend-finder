//Dependencies 
//=========================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Sets up the Express App 
//=========================================================
var app = express();
var PORT = process.env.PORT || 3000; 

//Sets up the Express app to handle data parsing 
//some students had to change to true for it to work --keep in mind
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//=========================================================
//ROUTER 
//The below points our server to a series of "route" files 
//These routes give our server a "map" of how to respond when user's visit or request data from various URLs
//=========================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//starts the server to begin listening 
//=========================================================

app.listen(PORT, function(){
	console.log("App listening on PORT:" + PORT);
});

