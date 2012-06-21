
/**
 * Module dependencies.
 */

var express = require('express'),
routes = require('./routes'),
admin = require('./admin'),
posts = require('./posts');

var middleware = ('./middleware');

var app = module.exports = express.createServer();

// Configuration

app.configure(function () {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function () {
	app.use(express.errorHandler({
			dumpExceptions : false,
			showStack : true
		}));
});

app.configure('production', function () {
	app.use(express.errorHandler());
});

// Routes
// Front End
app.get('/', routes.index);
app.get(/^\/(?:page\/(\d+))?$/, posts.page);
app.get(/^\/(\d{4})\/(\d{2})\/(\d{2})\/([a-zA-Z-0-9]+)\/?/, posts.post);

// Administration
app.get('/admin', admin.index);
app.get('/admin/login',admin.login);
app.post('/admin/login',admin.loginPost);
app.get('/admin/logout',admin.logout);

// error handler
//app.all('*', function (req, res, next) {
//	next(new routes.NotFound);
//});

// 404 Handler
app.error(function (err, req, res, next) {
	if (err instanceof routes.NotFound) {
		res.render('404', {
			status : 404
		});
	} else {
		next(err);
	}
});

//500 handler
app.error(function (err, req, res) {
	res.render('500', {
		error : err
	});
});

app.listen(3000, function () {
	console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
