
/*
 * ROUTES router.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Main Page Here' })
};

// Error handling
var NotFound = exports.NotFound = function(msg){
	this.name = 'NotFound';
	Error.call(this.msg);
	Error.captureStackTrace(this, arguments.callee);
};

NotFound.prototype.__proto__ = Error.prototype;