var express = require('express');
var router = express.Router();
var searchList = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shit', { title: 'SHIT。COM' , search: searchList });
});

// POST a search content
router.post('/search', function(req, res){
	var searchContent = req.body.searchContent;
	searchList.push(searchContent);	
	res.redirect("/");
});

module.exports = router;
