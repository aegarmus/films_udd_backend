import { Router } from 'express';
import { getAllPeliculas } from '../controllers/peliculas.controller.js';


const router = Router();

router.get('/peliculas', getAllPeliculas);


export default router;