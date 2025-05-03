import { Router } from 'express';
import {
    createProduct,
    deleteProduct,
    getAllProduct,
    getProductById,
    updateProduct,
} from '../controllers/product.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { uploadPhoto } from '../middlewares/uploadFile.middleware.js';
import { verifyAdmin } from '../middlewares/verifyAdmin.middleware.js';

const router = Router();

router.post(
    '/',
    authMiddleware,
    verifyAdmin,
    uploadPhoto('productos', 'file'),
    createProduct
);
router.get('/', getAllProduct);
router.get('/:id', getProductById);
router.put('/:id', authMiddleware, verifyAdmin, updateProduct);
router.delete('/:id', authMiddleware, verifyAdmin, deleteProduct);

export default router;
