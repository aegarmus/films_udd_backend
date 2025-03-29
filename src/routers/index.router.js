import { Router } from 'express';
import peliculaRouter from './peliculas.routes.js';
import authRouter from './auth.routes.js';


const router = Router();

router.use('/peliculas', peliculaRouter);
router.use('/auth', authRouter);

export default router;