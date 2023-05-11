const router = require('express').Router();
const { BlogPost, User } = require('../models')

//GET all existing blogposts for homepage
router.get('/', async (req, res) => {
try{
const dbBlogPostData = await BlogPost.findAll({
    include: [
        {
            model: User,
        }
    ]

});
 const blogPosts = dbBlogPostData.map((blogposts) => 
 blogposts.get({ plain: true })
 );

 res.render('homepage', {
    blogPosts,
 });
} catch(err){
    console.log(err);
    res.status(500).json(err)
}






})




router.get('/', async (req, res) => {
    //Sending the rendered HandleBars.js template back as the response
    res.render('homepage');
});

//Login Route
router.get('/login', (req, res) => {
    // if(req.session.loggedIn){
    //     res.redirect('/');
    //     return;
    // }
    res.render('login')
})

module.exports = router;