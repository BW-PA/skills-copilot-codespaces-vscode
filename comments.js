// Create Web Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

var comments = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/comments', function(req, res) {
	res.json(comments);
});

app.post('/comments', function(req, res) {
	var newComment = {
		id: Date.now(),