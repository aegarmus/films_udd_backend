import { Router } from 'express';
import { createPeliculas, getAllPeliculas, getPeliculasById } from '../controllers/peliculas.controller.js';


const router = Router();

router.get('/peliculas', getAllPeliculas);
router.get('/peliculas/:id', getPeliculasById);
router.post('/peliculas', createPeliculas);


export default router;