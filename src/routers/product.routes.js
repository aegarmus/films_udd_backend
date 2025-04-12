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

const router = Router();

router.post(
    '/',
    authMiddleware,
    uploadPhoto('productos', 'file'),
    createProduct
);
router.get('/', getAllProduct);
router.get('/:id', getProductById);
router.put('/:id', authMiddleware, updateProduct);
router.delete('/:id', deleteProduct);

export default router;
