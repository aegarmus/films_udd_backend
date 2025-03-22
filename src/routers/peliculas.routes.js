import { Router } from 'express';
import { createPeliculas, deletePeliculaById, getAllPeliculas, getDeleteAllPeliculas, getDeletePeliculasById, getPeliculasById, permaDeletePeliculaById, restorePeliculaById, updatePeliculaById } from '../controllers/peliculas.controller.js';

const router = Router();

router.get('/peliculas', getAllPeliculas);
router.get('/peliculas/:id', getPeliculasById);
router.post('/peliculas', createPeliculas);
router.put('/peliculas/:id', updatePeliculaById);
router.delete('/peliculas/admin/perma/:id', permaDeletePeliculaById);
router.delete('/peliculas/:id', deletePeliculaById);
router.patch('/peliculas/admin/restore/:id', restorePeliculaById);


router.get('/peliculas/admin/erased', getDeleteAllPeliculas);
router.get('/peliculas/admin/erased/:id', getDeletePeliculasById);

export default router;