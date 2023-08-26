const router = require('express').Router();
const homeRoutes = require('./homeroutes'); 
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardroutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router 
