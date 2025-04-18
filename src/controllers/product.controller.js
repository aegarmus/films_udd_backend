import { Product } from '../model/Product.model.js';
import { buildFileUrl } from '../utils/files/buildFileUrl.js';

export const createProduct = async (req, res, next) => {
    try {
        let imageUrl = '';
        if (req.file)
            imageUrl = buildFileUrl(req, req.file.filename, 'productos') || '';

        const productData = { ...req.body, imagen: imageUrl };
        const product = await Product.create(productData);

        res.status(201).json({
            message: 'Producto creado con éxito',
            status: 201,
            data: product,
        });
    } catch (error) {
        next(error);
    }
};

export const getAllProduct = async (req, res, next) => {
    try {
        const product = await Product.find().select('-__v');
        res.status(200).json({
            message: 'Productos obtenidos con éxito',
            status: 200,
            data: product,
        });
    } catch (error) {
        next(error);
    }
};

export const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id).select('-__v');

        res.status(200).json({
            message: 'Producto obtenido con éxito',
            status: 200,
            data: product,
        });
    } catch (error) {
        next(error);
    }
};

export const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        }).select('-__v');

        res.status(201).json({
            message: 'Producto actualizado con éxito',
            status: 201,
            data: product,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id).select('-__v');

        res.status(200).json({
            message: 'Producto Eliminado con éxito',
            status: 200,
            data: product,
        });
    } catch (error) {
        next(error);
    }
};
