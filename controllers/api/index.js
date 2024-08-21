const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardroutes');

router.use('/users', userRoutes);
router.use('/post', dashboardRoutes);

module.exports = router;
