const router = require("express").Router();
const { User } = require("../../models");

// router.post('/', async (req, res) => {
//     try{
//         const userData = await User.create(req.body);
//         req.session.save(() => {
//             req.session.user
//         })
//     }
// })

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      res
        .status(400)
        .json({ message: `Incorrect username or password, please try again` });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: `Incorrect username or password, please try again` });
      return;
    }
    //add session
    // req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.logged_in = true;

    //     res.json({ user: userData, message: 'You are now logged in!' });
    //   });
    //Successful Login
    res.json({ user: userData, message: `Login successful!` });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
