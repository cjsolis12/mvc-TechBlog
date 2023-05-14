const router = require('express').Router();
const { BlogPost, User } = require('../models')

//GET all existing blogposts for homepage
router.get('/', async (req, res) => {
try{
const dbBlogPostData = await BlogPost.findAll({
    include: [
        {
            model: User,
            attributes:['username'],
        }
    ]

});
 const blogPosts = dbBlogPostData.map((blogpost) => 
 blogpost.get({ plain: true })
 );

 console.log(blogPosts)
 res.render('homepage', {
    blogPosts
 });
} catch(err){
    console.log(err);
    res.status(500).json(err)
}
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