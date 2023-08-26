const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', withAuth, function(req, res) { 
    res.render('dashboard',{
        loggedIn: req.session.logged_in
    })
});



module.exports = router 
