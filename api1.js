var express = require('express');
var api = express.Router();

// one router 
api.get('/timezone', function(req,res){
	res.send('This is for version 1 of the API through /timezone');
});

// another router
api.get('/all_timezones', function(req,res){
	res.send('This is from the API but diff route /all_timezones');
});

module.exports= api;