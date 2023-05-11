const router = require('express').Router();

router.get('/', async (req, res) => {
    //Sending the rendered HandleBars.js template back as the response
    res.render('homepage');
});

module.exports = router