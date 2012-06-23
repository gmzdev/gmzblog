
/*
 * POSTS router
 */
var articleProvider = require('../model').ArticleProvider;

exports.page = function (req, res) {
	
	articleProvider.findAll(function (error, docs) {
		//res.send(docs);
		res.render('index.jade', {
			title : 'Pages',
			articles : docs
		});
	});
};

exports.post = function (req, res){
	articleProvider.findAll(function (error, docs) {
		//res.send(docs);
		res.render('index.jade', {
			title : 'Pages',
			articles : docs
		});
	});
};
