/*
* middleware
*/

exports.locals = function locals(req, res, next) {
	res.local('admin', false);
	res.local('ad','');
	
	next();
}