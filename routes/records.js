var garageclassics  = require('../garageclassics');

var garageclassics = garageclassics.records();

exports.findAll = function(req, res) {
	res.json(garageclassics);
};

exports.getRandom = function(req, res) {
	var id = Math.floor(Math.random() * garageclassics.length);
	var r = garageclassics[id];
	console.log(r);
	res.json(r);
};

exports.findById = function() {
	if(garageclassics.length <= req.params.id || req.params.id < 0) {
		res.statusCode = 404;
		return res.send('Error 404: No quote found');
		}
	var r = garageclassics[req.params.id];
	res.json(r);
};