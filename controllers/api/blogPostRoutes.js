const router = require("express").Router();
const { BlogPost, User, Comment} = require("../../models");
const withAuth = require("../../utils/auth");

//GET one blog
router.get("/:id", async (req, res) => {
  try {
    const dbBlogPostData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["text"],
        }
      ],
    });
    const blogPosts = dbBlogPostData.get({ plain: true });
    res.render("blog", { ...blogPosts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Create a new blogpost
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
