var express = require('express'),
	path = require('path'),
 	http = require('http'),
	app = express(),
	records = require('./routes/records');

	app.set('port', Number(process.env.PORT || 5000));

app.get('/records', records.findAll);

app.get('/record/random', records.getRandom);

app.get('/record/:id', records.findById);


http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});