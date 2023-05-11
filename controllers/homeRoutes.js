const router = require('express').Router();

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