var express = require('express');
var app = express();

app.get('/Random/:min/:max',function(req,res){
	var min = parseInt(req.params.min);
	var max = parseInt(req.params.max);
	if (isNaN(min)|| isNaN(max)){
		res.status(400);
		res.json({error: bad Request});
		return
	}

	var result = Math.round((Math.random()*(max-min) +min);
	res.json({result:result}); 
} );

	app.listen(3000, fuunction(){
		console.log("App listened on port 3000");
	})