var express = require('express');
var api = express.Router();

api.get('/timezone', function(req,res){
	res.send('This is from another API2 via /timezone');
});

module.exports= api;