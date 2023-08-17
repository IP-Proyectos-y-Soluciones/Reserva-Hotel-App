const express = require("express");
const adminis = require("./adminRoutes");
const banner = require("./bannerRoutes");
const bedroom = require("./bedroomRoutes");
const bookings = require("./bookingRoutes");
const notifications = require('./notifications')
const plan = require('./plan')
const restaurant = require('./restaurant')
const travel = require('./travel')
const users = require('./users')

const router = express.Router(); // Sadece bir kez Router tanımlanır
router.use(express.json());
router.use("/admin", adminis);
router.use("/banner", banner);
router.use("/bedroom", bedroom);
router.use("/bookings", bookings);
router.use("/notifications", notifications)
router.use("/plan", plan)
router.use("/restaurant", restaurant)
router.use("/travel", travel)
router.use('/users', users)

module.exports = router;
