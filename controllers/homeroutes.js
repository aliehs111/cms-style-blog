const router = require('express').Router();


router.get('/', function(req, res) {
    res.render('home')
});

router.get('/', function(req, res) {
    res.render('signup')
});

module.exports = router 
