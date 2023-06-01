const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//Create a new comment
router.post("/", withAuth, async (req, res) => {
  try {
    const { text, postId } = req.body; // Retrieve text and postId from the request body
    const newComment = await Comment.create({
      text,
      user_id: req.session.user_id,
      blogPost_id: postId,
    });

    console.log(newComment);
    //Redirect to the homepage after successfully creating a comment
    res.redirect("/");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
