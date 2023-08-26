const router = require('express').Router();


router.get('/', function(req, res) {
    res.render('home',{
        loggedIn: req.session.logged_in

    })
});

router.get('/signup', function(req, res) {
    res.render('signup')
});

module.exports = router 
