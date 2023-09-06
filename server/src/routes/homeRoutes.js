const express = require('express')
const router = express.Router()
const {verifyToken} = require('../middlewares/tokenAuthentication')

router.get('/', verifyToken, (req, res) => {
    res.render('pages/index.ejs', { title: 'Hotel Backend' });
});

module.exports =router