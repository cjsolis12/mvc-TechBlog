const router = require('express').Router();
const { BlogPost, User } = require('../models')

//GET all existing blogposts for homepage
router.get('/', async (req, res) => {
try{
const dbBlogPostData = await BlogPost.findAll({
    include: [
        {
            model: User,
            attributes:['user_name'],
        }
    ]

});
 const blogPosts = dbBlogPostData.map((blogpost) => 
 blogpost.get({ plain: true })
 );

 res.render('blogposts', {
    blogPosts
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