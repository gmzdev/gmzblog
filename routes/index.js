
/*
 * ROUTES router.
 */

var articleProvider = require('../model').ArticleProvider;
var articleProvider= new ArticleProvider('localhost',27017);

exports.index = function (req, res) {
	articleProvider.findAll(function (error, docs) {
		res.render('index.jade', {
			title : 'Pages',
			articles : docs
		});
	});
};

// Error handling
var NotFound = exports.NotFound = function (msg) {
	this.name = 'NotFound';
	Error.call(this.msg);
	Error.captureStackTrace(this, arguments.callee);
};

NotFound.prototype.__proto__ = Error.prototype;
