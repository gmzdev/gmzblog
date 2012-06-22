
/*
 * Admin Pages
 */

var crypto = require('crypto');

exports.require_login = function (req, res, next) {
	if (1==1) {
		console.log('Here');
		//check admin user
		//res.local('admin', true);
		next();
	} else {
		res.redirect('/admin/login');
	};
};

exports.index = function (req, res) {
	res.render('admin', {
		title : 'Administrator Login'
	});
};

exports.login = function (req, res) {
	res.local('error', false);
	res.render('admin_login', {
		title : 'Administrator Login'
	});
};

exports.loginPost = function (req, res) {
	var username = req.param('username');
	var password = req.param('password');
	
	console.log(username + '==' + password);
	
	res.local('error', true);
	res.render('admin_login', {
		title : 'Administrator Login'
	});
};

exports.dashboard = function (req, res) {
	res.render('adminDashboard', {
		title : 'Dasboard'
	});
};
