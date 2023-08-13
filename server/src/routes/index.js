import { Router } from "express";

const router = Router();

router.get('/', (req, res) => res.render(
  'index', { title: 'Hotel Portobelo | Backend' }
));


export default router;