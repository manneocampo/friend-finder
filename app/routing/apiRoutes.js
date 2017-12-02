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
	//In each of the below cases when a user visits a link they are shown a json of the data in the table

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

		//our "server" responds to a user's survey result
		//then compares the current user's results against all the users in the database
		//it will then calculate the difference between each of the numbers and the user's numbers, question by question
		//then add up the differences to calculate the totalDifference
		//then it will choose the user with the least amt of difference as the best friend match
		//if multiple users match, pick first one
		//after the test, it will push the user to the database 

		//this object holds the best match, and will be updated as we loop through all the options
		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: Infinity
		};

		//Here take the result of user's survey POST and parse it
		var userData = req.body; 
		var userScores = userData.scores; 
		

		//This var calculates the difference between the user's scores and the scores of each user in database
		var totalDifference;

		//Here we loop through all the friends in friend database
		for(var i= 0; i < friendsData.length; i++) {
			var currentFriend = friendsData[i];
			totalDifference = 0;

			console.log(currentFriend.name);

			//then loop through all the scores of each friend 
			for(var j= 0; j < currentFriend.scores.length; j++) {
				var currentFriendScore = currentFriend.scores[j];
				var currentUserScore = userScores[j];
			}
			//then calculate diff between scores and add up in totalDifference variable
			totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));

			//if sum of total differences is less than the sum of the current "best match" then reset the best match to be the new friend
			if(totalDifference <= bestMatch.friendDifference) {
				bestMatch.name = currentFriend.name;
				bestMatch.photo = currentFriend.photo;
				bestMatch.friendDifference = totalDifference;
			}
		}

		//save user's data to database
		friendsData.push(userData);
		
		//return JSON with user's bestMatch, used by HTML in survery.html page
		res.json(bestMatch);			
		
	});

};

// //Get all friends data
// app.get("/api/:friends?", function(req, res){
// 	var chosen = req.params.friends; 

// 	if(chosen){
// 		console.log(chosen);
	
// 		for(var i=0; i < friends.length; i++){
// 			if(chosen === friends.scores[i]){
// 				return res.json(friends[i]);
// 			}
// 		}
// 		return res.json(false);
// 	}
// 	return res.json(friends);
// });