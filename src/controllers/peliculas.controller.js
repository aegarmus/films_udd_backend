import { 
    createPeliculasService, 
    deletePeliculasByIdService, 
    getAllDeletePeliculasService, 
    getAllPeliculasService, 
    getDeletePeliculasByIdService, 
    getPeliculasByIdService, 
    permaDeletePeliculaByIdService, 
    restorePeliculaByIdService, 
    updatePeliculaByIdService 
} from '../services/peliculas.service.js';
import { buildFileUrl } from '../utils/files/buildFileUrl.js';

import { response } from '../utils/templates/response.template.js';

export const getAllPeliculas = async(req, res, next) => {
    try {
        const peliculas = await getAllPeliculasService();
        response(res, peliculas, 200, 'Peliculas encontrada con éxito');
    } catch (error) {
        next(error);
    }
};

export const getPeliculasById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const peliculas = await getPeliculasByIdService(id);
        response(
            res,
            peliculas,
            200,
            `Peliculas con el id: ${id} encontrada con éxito`,
        );
    } catch (error) {
        next(error);
    }
};

export const createPeliculas = async(req, res, next) => {
    try {
        let imageUrl = '';
        if(req.file) imageUrl = buildFileUrl(req, req.file.filename, 'peliculas');

        const dataPelicula = {
            ...req.body,
            imagen: imageUrl
        };

        const peliculas = await createPeliculasService(dataPelicula);

        response(res, peliculas, 201, 'Pelicula creada con éxito');
    } catch (error) {
        next(error);
    }
};


export const updatePeliculaById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const dataPelicula = req.body;

        const [ peliculaOld, peliculaUpdated ] = await updatePeliculaByIdService(id, dataPelicula);

        const custom = {
            oldData: peliculaOld
        };
        
        response(res, peliculaUpdated, 201, `Pelicula con el id: ${id} actualizada con éxito`, custom);
    } catch (error) {
        next(error);
    }
};


/* ESTO NO SE TIENE QUE HACER*/
export const permaDeletePeliculaById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const pelicula = await permaDeletePeliculaByIdService(id);
        response(res, pelicula, 200, `Pelicula con el id: ${id} eliminada con éxito`);
    } catch (error) {
        next(error);
    }
};

/*SOFT DELETE*/

export const deletePeliculaById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const pelicula = await deletePeliculasByIdService(id);

        response(res, pelicula, 200, `Pelicula con el id: ${id} eliminada con éxito`);
    } catch (error) {
        next(error);
    }
};

export const restorePeliculaById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const pelicula = await restorePeliculaByIdService(id);
        response(res, pelicula, 200, `Pelicula con el id: ${id} restaurada con éxito`);
    } catch (error) {
        next(error);
    }
};


export const getDeleteAllPeliculas = async(req, res, next) => {
    try {
        const peliculas = await getAllDeletePeliculasService();
        response(res, peliculas, 200, 'Peliculas encontrada con éxito');
    } catch (error) {
        next(error);
    }
};

export const getDeletePeliculasById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const peliculas = await getDeletePeliculasByIdService(id);
        response(
            res,
            peliculas,
            200,
            `Peliculas con el id: ${id} encontrada con éxito`,
        );
    } catch (error) {
        next(error);
    }
};