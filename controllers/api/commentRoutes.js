const router = require('express').Router();
const { Comment, BlogPost } = require ('../../models');
const withAuth = require('../../utils/auth');

//Create a new comment
router.post('/', withAuth, async(req, res) =>{
    try{
        const newComment= await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            blogPost_id: req.body.blogPost_id,
        });

    //Redirect to the homepage after successfully creating a comment
    res.redirect('/'); 
    } catch (err){
        res.status(400).json(err)
    }
})

module.exports = router