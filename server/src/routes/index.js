const { Router } = require('express');
const express = require("express");
const adminis  = require("./adminRoutes")
const banner  = require("./bannerRoutes")
const bedroom  = require("./bedroomRoutes")
const bookings  = require("./bookingRoutes")


const router = Router();
router.use(express.json()); 
router.use("/admin", adminis);
router.use("/banner", banner);
router.use("/bedroom", bedroom);
router.use("/bookings", bookings);

module.exports = router;
