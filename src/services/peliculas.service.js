import { NotFoundError, PeliculasError } from '../errors/TypeError.js';
import { Peliculas } from '../model/Peliculas.model.js';


export const getAllPeliculasService = async () => {
    try {
        const peliculas = await Peliculas.find();

        if(peliculas.length === 0 || peliculas === null) {
            throw new NotFoundError(
                'No pudimos encontrar las peliculas', 
                'No pudimos encontrar peliculas en la base de datos en la colección de peliculas'
            );
        }

        return peliculas;
    } catch (error) {
        throw new PeliculasError('Error al intentar obtener todas las peliculas', 500, error);
    }

};


export const getPeliculasByIdService = async (id) => {
    try {
        const pelicula = await Peliculas.findById(id);

        if(!pelicula) {
            throw new NotFoundError(
                `No pudimos encontrar las peliculas con el id: ${id}`,
                `No pudimos encontrar la pelicula con id: ${id} en la base de datos en la colección de peliculas`
            );
        }

        return pelicula;
    } catch(error) {
        throw new PeliculasError('Error al intentar obtener una pelicula por ID', 500, error);
    }
};