
/*
 * Admin Pages
 */

exports.index = function (req, res) {
	res.render('admin', {
		title : 'Administrator'
	});
};

exports.login = function (req, res) {
	res.local('error', false);
	res.render('admin_login', {
		title : 'Administrator Login'
	});
}

exports.loginPost = function (req, res) {
	var username = req.param('username');
	var password = req.param('password');
	
	console.log(username + '==' + password);
	
	res.local('error', true);
	res.render('admin_login', {
		title : 'Administrator Login'
	});
}
