var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
 	res.render('index', { address: req.cookies.private_key });
});

router.post('/', function(req,res, next) {
	private_key = req.body.private_key;
	console.log(private_key);
	res.cookie('private_key', private_key);
	res.redirect('/');
});

// routing index to other pages
router.get('/register', function (req, res, next) {
	res.render('register',{ address: req.cookies.private_key }); 
 });

router.post('/register', function(req,res, next) {
	private_key = req.body.private_key;
	console.log(private_key);
	res.cookie('private_key', private_key);
	res.redirect('/');
});


router.get('/joinpool', function (req, res, next) {
	res.render('joinpool',{ address: req.cookies.private_key }); 
 });
module.exports = router;

router.post('/joinpool', function(req,res, next) {
	private_key = req.body.private_key;
	console.log(private_key);
	res.cookie('private_key', private_key);
	res.redirect('/');
});

