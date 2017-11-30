//==========================================
//DEPENDENCIES 
//We need to include the path package to get the correct file path for our html
//==========================================
var path = require("path");

//===========================================
//Routing
//===========================================


module.exports = function(app){
	//HTML GET requests 
	//Below the code handles when users "visit" a page 
	//In each of the below cases the user is shown an HTML page of content
	
	//Basic route that sends the user first to the AJAX page
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	//Route that sends the user to the survey page 
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
};


