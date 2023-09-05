const express = require("express");
const router = express.Router();
const { login } = require("../controllers/administratorasControllers");
const { generateAccessToken } = require("../middlewares/tokenAuthentication");

router.get('/', (req, res) => {
    const errorMessage = req.query.error || null; // Recuperar el mensaje de error de la consulta
    res.render('pages/login.ejs', { title: 'Hotel Backend', errorMessage });
});

router.post('/auth', async (req, res) => {
    try {
        const { user, password } = req.body;
        const userAdmin = await login(user, password);

        if (!userAdmin.success || userAdmin.success === false) {
            const errorMessage = userAdmin.error;
            res.redirect(`/login?error=${encodeURIComponent(errorMessage)}`); // Redirigir con el mensaje de error en la consulta
        } else {
            const accessToken = generateAccessToken(userAdmin);
            req.session.token = accessToken;
            res.redirect('/index');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;