const express = require("express");
const adminis = require("./adminRoutes");
const banner = require("./bannerRoutes");
const bedroom = require("./bedroomRoutes");
const bookings = require("./bookingRoutes");
const users = require("./users")
const notifications = require("./notifications")
const plan = require("./plan")
const resturant = require("./restaurant")
const travel = require("./travel")
const testimonials = require("./testimonialsRoutes")
const categorias = require("./categoriasRoutes")
const home = require('./homeRoutes')

const router = express.Router();
router.use(express.json());
router.use("/", home);
router.use("/index", home);
router.use("/admin", adminis);
router.use("/banner", banner);
router.use("/bedroom", bedroom);
router.use("/bookings", bookings);
router.use("/users", users);
router.use("/notifications", notifications);
router.use("/plan", plan);
router.use("/resturant", resturant);
router.use("/travel", travel);
router.use("/testimonials", testimonials);
router.use("/categories", categorias);

module.exports = router;
