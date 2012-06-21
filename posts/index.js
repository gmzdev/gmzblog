
/*
 * POSTS router
 */

exports.page = function (req, res) {
	res.render('index', {
		title : 'Pages Here!!!'
	})
};

exports.post = function (req, res) {
	res.render('index', {
		title : 'Posts Here!!!!'
	})
};
