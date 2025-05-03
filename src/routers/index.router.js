import { Router } from 'express';
import peliculaRouter from './peliculas.routes.js';
import authRouter from './auth.routes.js';
import productoRouter from './product.routes.js';
import paymentRouter from './payments.routes.js';

const router = Router();

router.use('/peliculas', peliculaRouter);
router.use('/auth', authRouter);
router.use('/productos', productoRouter);
router.use('/payments', paymentRouter);

export default router;