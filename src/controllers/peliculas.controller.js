import { NotFoundError } from '../errors/TypeError.js';
import { Peliculas } from '../model/Peliculas.model.js';

export const getAllPeliculas = async(req, res, next) => {
    try {
        const peliculas = await Peliculas.find();

        if(peliculas.length === 0 || peliculas === null) {
            throw new NotFoundError(
                'No pudimos encontrar las peliculas', 
                'No pudimos encontrar peliculas en la base de datos en la colección de peliculas'
            );
        }

        res.status(200).json({
            message: 'Peliculas encontradas con éxito',
            statusCode: 200,
            data: peliculas,
        });
    } catch (error) {
        next(error);
    }
};