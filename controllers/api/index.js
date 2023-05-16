const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const blogPostRoutes = require('./blogPostRoutes')

router.use('/user', userRoutes);
router.use('/comments', commentRoutes);
router.use('/blogposts', blogPostRoutes);

module.exports = router;