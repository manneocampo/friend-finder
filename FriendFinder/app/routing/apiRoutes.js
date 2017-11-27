//=======================================
//LOAD DATA 
//We are linking our routes to a series of "data" sources.
//This data source holds an array of information on friends data. 

var friendsData = require("../data/friends");

//=======================================
//ROUTING
//=======================================

module.exports = function(app){
	//API GET requests
	//Below code handles when users "visit" a page
	//In each of the below cases when a user visits a link

	app.get("/api/friends", function(req, res){
		res.json(friendsData);
	});

	//API POST requests 
	//Below code handles when a user submits a form and thus submits data to the server 
	//In each of the below cases, when a user submits form data (JSON object) 
	//...the JSON is pushed to the appropriate JavaScript array 
	//Then the server saves the data to the friendsData array 
	//----------------------------------
	app.post("/api/friends", function(req, res){
		if(friendsData.length < 5){
			friendsData.push(req.body);
			res.json(true);
		}
		else{
			friendsData.push(req.body);
			res.json(false);
		}
	});

};