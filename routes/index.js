var express = require('express');
var router = express.Router();

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
];

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function (req, res, next) {
	res.render('form', { title: 'New Message' });
});

router.post('/new', function (req, res, next) {
	var obj = {
		text: req.body.message,
		user: req.body.name,
		added: new Date(),
	};
	messages.push(obj);
	res.redirect('/');
});

module.exports = router;
