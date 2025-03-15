import { Router } from 'express';
import { getAllPeliculas, getPeliculasById } from '../controllers/peliculas.controller.js';


const router = Router();

router.get('/peliculas', getAllPeliculas);
router.get('/peliculas/:id', getPeliculasById);


export default router;