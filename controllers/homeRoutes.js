const router = require('express').Router();
const { BlogPost, User } = require('../models')
const withAuth = require('../utils/auth')

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

 res.render('homepage', {
    blogPosts,
    logged_in: req.session.logged_in
 });
} catch(err){
    res.status(500).json(err)
}
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async(req, res) => {
    try{
        //Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            include: [{ model: BlogPost}]
        })
        const user = userData.get({ plain:true});

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

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