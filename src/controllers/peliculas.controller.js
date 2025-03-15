import { getAllPeliculasService, getPeliculasByIdService } from '../services/peliculas.service.js';

export const getAllPeliculas = async(req, res, next) => {
    try {
        const peliculas = await getAllPeliculasService();

        res.status(200).json({
            message: 'Peliculas encontradas con éxito',
            statusCode: 200,
            data: peliculas,
        });
    } catch (error) {
        next(error);
    }
};

export const getPeliculasById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const peliculas = await getPeliculasByIdService(id);

        res.status(200).json({
            message: `Peliculas con el id: ${id} encontrada con éxito`,
            statusCode: 200,
            data: peliculas,
        });
    } catch (error) {
        next(error);
    }
};