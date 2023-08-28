const router = require('express').Router();
const homeRoutes = require('./homeroutes'); 
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardroutes');
const postRoutes = require('./api/posts');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('post', postRoutes);


module.exports = router 
