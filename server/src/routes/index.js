<<<<<<< HEAD
const { Router } = require('express');
const express = require("express");
const adminis  = require("./adminRoutes")
const banner  = require("./bannerRoutes")
const bedroom  = require("./bedroomRoutes")
const bookings  = require("./bookingRoutes")

=======
const { Router } = require("express");
//import { Router } from "express";
>>>>>>> 6b3d96a525363a5d3491920ddc19de95deff531a

const router = Router();
router.use(express.json()); 
router.use("/admin", adminis);
router.use("/banner", banner);
router.use("/bedroom", bedroom);
router.use("/bookings", bookings);

<<<<<<< HEAD
module.exports = router;
=======
router.get('/', (req, res) => res.render(
  'index', { title: 'Hotel Portobelo | Backend' }
));

router.get('/index', (req, res) => res.render(
  'index', { title: 'Hotel Portobelo | Backend' }
));

router.get('/administrators', (req, res) => res.render(
  'administrators', { title: 'Hotel Portobelo | Backend - Administrators' }
));

router.get('/banner', (req, res) => res.render(
  'banner', { title: 'Hotel Portobelo | Backend - Banner' }
));

router.get('/login', (req, res) => res.render(
  'login', { title: 'Hotel Portobelo | Backend - Login' }
));

router.get('/plans', (req, res) => res.render(
  'plans', { title: 'Hotel Portobelo | Backend - Plans' }
));

router.get('/bookings', (req, res) => res.render(
  'bookings', { title: 'Hotel Portobelo | Backend - Bookings' }
));


module.exports = router;
>>>>>>> 6b3d96a525363a5d3491920ddc19de95deff531a
