const router = require('express').Router();
const { BlogPost, User, Comment } = require('../models')
const withAuth = require('../utils/auth')

//GET all existing blogposts for homepage
router.get('/', async (req, res) => {
try{
const dbBlogPostData = await BlogPost.findAll({
    include: [
        {
            model: User,
            attributes:['username'],
        },
        {
            model: Comment,
        }
    ]

});
 const blogs = dbBlogPostData.map((blogpost) => 
 blogpost.get({ plain: true })
 );

 res.render('homepage', {
    blogs,
    logged_in: req.session.logged_in
 });
} catch(err){
    res.status(500).json(err)
}
});



//Login Route
router.get('/login', (req, res) => {
    if(req.session.logged_in){
        res.redirect('/');
        return;
    }
    res.render('login')
})

//New Account Route
router.get('/register', (req, res) => {
    // if(req.session.loggedIn){
    //     res.redirect('/');
    //     return;
    // }
    res.render('register')
})

module.exports = router;