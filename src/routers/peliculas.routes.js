import { Router } from 'express';
import { createPeliculas, deletePeliculaById, getAllPeliculas, getDeleteAllPeliculas, getDeletePeliculasById, getPeliculasById, permaDeletePeliculaById, restorePeliculaById, updatePeliculaById } from '../controllers/peliculas.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { verifyAdmin } from '../middlewares/verifyAdmin.middleware.js';

const router = Router();

router.get('/', getAllPeliculas);
router.get('/:id', getPeliculasById);
router.post('/', authMiddleware, createPeliculas);
router.put('/:id', authMiddleware, updatePeliculaById);
router.delete('/admin/perma/:id', authMiddleware, verifyAdmin, permaDeletePeliculaById);
router.delete('/:id', deletePeliculaById);
router.patch(
    '/admin/restore/:id',
    authMiddleware,
    verifyAdmin,
    restorePeliculaById
);


router.get('/admin/erased', authMiddleware, verifyAdmin, getDeleteAllPeliculas);
router.get(
    '/admin/erased/:id',
    authMiddleware,
    verifyAdmin,
    getDeletePeliculasById
);

export default router;