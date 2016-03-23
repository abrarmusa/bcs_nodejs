var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AHASHSHSAHDAHSDHAHSDHSAHDASHHD' });
});


router.get('/dif1', function(req, res, next) {
  res.render('index', { title: 'AHASHSHSAHDAHSDHAHSDHSAHDASHHD' });
});

router.get('/sample2', function(req, res, next) {
  res.render('index', { title: 'sample2' });
});

router.get('/sample3', function(req, res, next) {
  res.render('index', { title: 'sample3' });
});

router.get('/sample4', function(req, res, next) {
  res.render('index', { title: 'sample4' });
});

router.post('/postroutes', function(req, res, next){
	console.log("YAY! Someone is asking for something");
	console.log(req.body);
})



module.exports = router;
