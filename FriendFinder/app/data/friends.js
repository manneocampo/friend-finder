//Friend info (DATA)
//=========================================================
var friends = [
	{
		"name": Michelle, 
		"photo": "lkjhgd", 
		"scores":	[
			1,
			2,
			3,
			4,
			5,
			1,
			2,
			3,
			4,
			5
		]
	}
];

//Get all friends data
app.get("/api/:friends?", function(req, res){
	var chosen = req.params.friends; 

	if(chosen){
		console.log(chosen);
	
		for(var i=0; i < friends.length; i++){
			if(chosen === friends.scores[i]){
				return res.json(friends[i]);
			}
		}
		return res.json(false);
	}
	return res.json(friends);
});