const router = require('express').Router();
const { BlogPost, User, Comments } = require('../models');
const withAuth = require('../utils/auth');

// Use withAuth middleware to prevent access to route
router.get('/', withAuth, async(req, res) => {
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

//GET all user's blogs for their dashboard
router.get('/blogposts', async (req, res) => {
    try{
        //Retrieve the current logged-in user's ID from the session
        const userId = req.session.user_id;
        console.log(userId)
        //Find all blog posts associated with the user
        const blogPosts = await BlogPost.findAll({
            where: { user_id: userId }
        });

        //Serialize data so the template can read it
        const serializedBlogPosts = blogPosts.map((post) => post.get({ plain: true}));

        //pass data and session flag into a template
        console.log(serializedBlogPosts)
        res.render('blog', {
            blogPosts: serializedBlogPosts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err)
    }
    });

module.exports = router;