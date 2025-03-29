import { PeliculasError } from '../errors/TypeError.js';
import { Peliculas } from '../model/Peliculas.model.js';
import { notFoundActiveData, notFoundData } from '../utils/validate.js';

/**
 * 
 * @returns {Promise<Array>} - Retorna un array con todas las peliculas
 */
export const getAllPeliculasService = async () => {
    try {
        const peliculas = await Peliculas.find({ isActive: true });
        console.log(peliculas);

        notFoundActiveData(
            peliculas,
            'No pudimos encontrar las peliculas',
            'No pudimos encontrar peliculas en la base de datos en la colección de peliculas'
        ); 
 

        return peliculas;
    } catch (error) {
        throw new PeliculasError('Error al intentar obtener todas las peliculas', 500, error);
    }

};


export const getPeliculasByIdService = async (id) => {
    try {
        const pelicula = await Peliculas.findById(id, { isActive: true });

        notFoundActiveData(
            pelicula,
            `No pudimos encontrar las peliculas con el id: ${id}`,
            `No pudimos encontrar la pelicula con id: ${id} en la base de datos en la colección de peliculas`
        );

        return pelicula;
    } catch(error) {
        throw new PeliculasError('Error al intentar obtener una pelicula por ID', 500, error);
    }
};

export const createPeliculasService = async(dataPelicula) => {
    try {
        //TENEMOS QUE VALIDAR DATOS!!!! 
        const pelicula =  await Peliculas.create(dataPelicula);

        return pelicula;
    } catch (error) {
        throw new PeliculasError('Error al intentar crear una pelicula', 500, error);
    }
};

/**
 * Actualiza un registro de pelicula por ID
 * @param {string} id - Id del registro a buscar 
 * @param {object} dataPelicula - Objeto con los datos a actualizar 
 * @returns {Promise<Array>} - Retorna un array con el registro antes y después de ser actualizado
 * @throws {PeliculasError} - Arroja un error en caso de fallar en el proceso de actualización
 * @throws {NotFoundError} - Arroja un error si no se encuentra el registro
 */
export const updatePeliculaByIdService = async(id, dataPelicula) => {
    try {
        //TENEMOS QUE VALIDAR DATOS!!!!
        const peliculaOld = await Peliculas.findOneAndUpdate({ _id: id, isActive: true }, dataPelicula);

        const peliculaUpdated = await Peliculas.findById(id, { isActive: true });

        notFoundActiveData(
            peliculaOld,
            `No pudimos encontrar la pelicula con el id: ${id}`,
            `No pudimos encontrar la pelicula con id: ${id} en la base de datos en la colección de peliculas`
        );

        return [ peliculaOld, peliculaUpdated ];
    } catch (error) {
        throw new PeliculasError('Error al intentar actualizar la pelicula con el ID', 500, error);
    }
};


/*ESTO NO DEBERÍA HACERSE!!! DELETE O HARD DELETE*/

export const permaDeletePeliculaByIdService = async(id) => {
    try {
        const pelicula = await Peliculas.findByIdAndDelete(id);
        notFoundActiveData(
            pelicula,
            `No pudimos encontrar la pelicula con el id: ${id}`,
            `No pudimos encontrar la pelicula con id: ${id} en la base de datos en la colección de peliculas`
        );

        return pelicula;
    } catch (error) {
        throw new PeliculasError(`Error al intentar eliminar permanentemente la pelicula con el ID: ${id}`, 500, error);
    }
};


/*SOFT DELETE o DELETE LOGICO - ESTO SI SE TIENE QUE HACER*/
export const deletePeliculasByIdService = async(id) => {
    try {
        const pelicula = await Peliculas.findByIdAndUpdate(id, { isActive: false});

        notFoundActiveData(
            pelicula,
            `No pudimos encontrar la pelicula con el id: ${id}`,
            `No pudimos encontrar la pelicula con id: ${id} en la base de datos en la colección de peliculas`
        );

        return pelicula;
    } catch (error) {
        throw new PeliculasError(`Error al intentar eliminar la pelicula con el ID: ${id}`, 500, error);
    }
};

export const restorePeliculaByIdService = async(id) => {
    try {
        const pelicula = await Peliculas.findByIdAndUpdate(id, { isActive: true });

        notFoundData(
            pelicula,
            `No pudimos encontrar la pelicula con el id: ${id}`,
            `No pudimos encontrar la pelicula con id: ${id} en la base de datos en la colección de peliculas`
        );

        return pelicula;
    } catch (error) {
        throw new PeliculasError(`Error al intentar restaurar la pelicula con el ID: ${id}`, 500, error);
    }
};


export const getAllDeletePeliculasService = async () => {
    try {
        const peliculas = await Peliculas.find({ isActive: false });
        console.log(peliculas);

        notFoundData(
            peliculas,
            'No pudimos encontrar las peliculas',
            'No pudimos encontrar peliculas en la base de datos en la colección de peliculas'
        );

        return peliculas;
    } catch (error) {
        throw new PeliculasError(
            'Error al intentar obtener todas las peliculas',
            500,
            error
        );
    }
};

export const getDeletePeliculasByIdService = async (id) => {
    try {
        const pelicula = await Peliculas.findById(id, { isActive: false });

        notFoundData(
            pelicula,
            `No pudimos encontrar las peliculas con el id: ${id}`,
            `No pudimos encontrar la pelicula con id: ${id} en la base de datos en la colección de peliculas`
        );

        return pelicula;
    } catch (error) {
        throw new PeliculasError(
            'Error al intentar obtener una pelicula por ID',
            500,
            error
        );
    }
};
