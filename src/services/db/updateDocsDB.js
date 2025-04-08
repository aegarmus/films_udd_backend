import { DataBaseError } from '../../errors/TypeError.js';
import { Peliculas } from '../../model/Peliculas.model.js';
import { Usuario } from '../../model/Usuario.model.js';


export const updateDocsDB = async() => {
    try {
        await Peliculas.updateMany(
            { isActive: { $exists: false} }, 
            { $set: { isActive: true } }
        );
        await Usuario.updateMany(
            { imagen: { $exists: false} },
            { $set: { imagen: null} }
        );
    } catch (error) {
        throw new DataBaseError('No pudimos actualizar los documentos en la base de datos', 500, error);
    }
};