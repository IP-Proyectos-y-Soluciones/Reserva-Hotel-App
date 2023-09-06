const express = require("express");
const router = express.Router();

// Ruta de cierre de sesión
router.get("/", async (req, res) => {
    try {
        await new Promise((resolve, reject) => {
            req.session.destroy((error) => {
                if (error) {
                    console.error("Error al cerrar sesión:", error);
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
        res.redirect("/login");
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
    }
});

module.exports = router;