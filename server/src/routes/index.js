import { Router } from "express";

const router = Router();

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


export default router;