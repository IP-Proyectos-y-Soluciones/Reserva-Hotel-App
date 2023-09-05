const jwt = require('jsonwebtoken');
const {AUTHENTICATION_SECRET} = process.env

const generateAccessToken = (user) => {
    return jwt.sign(user, AUTHENTICATION_SECRET, { expiresIn: '15m' });
};

// Middleware
const verifyToken = (req, res, next) => {
    const bearerHeader = req.session.token

    //console.log('Bearer Header:', bearerHeader);

    if (!bearerHeader) {
        //return res.status(401).send('Access denied.');
        res.render('pages/authorization.ejs')
    }

    jwt.verify(bearerHeader, AUTHENTICATION_SECRET, (error, user) => {
        if (error) {
            //return res.status(403).send('Sesión caducada. Por favor, inicia sesión para acceder.');
            res.render('pages/authorization.ejs')
        }
        next();
    });
};

module.exports = {
    verifyToken,
    generateAccessToken
};