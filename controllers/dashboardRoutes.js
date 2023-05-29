const router = require('express').Router();
const { BlogPost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


//GET all user's blogs for their dashboard
router.get('/', withAuth, async (req, res) => {
    try{
        //Retrieve the current logged-in user's ID from the session
        const userId = req.session.user_id;
        console.log(userId)
        //Find the logged in user based on session ID
        const userData = await User.findByPk(userId, {
            attributes:{ exclude: ['password']},
            include: [{ model: BlogPost }]
        });
        const user = userData.get({ plain: true});
        console.log(user)
        
       

        //pass data and session flag into a template
        res.render('dashboard', {
            ...user,
            blogPosts: user.BlogPosts,
            logged_in: true,
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
    });

module.exports = router;