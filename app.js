var express = require('express'),
	path = require('path'),
 	http = require('http'),
	app = express(),
	records = require('./routes/records');

app.configure(function () {
	app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/records', records.findAll);

app.get('/record/random', records.getRandom);

app.get('/record/:id', records.findById);

app.listen(process.env.PORT || 4730);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});