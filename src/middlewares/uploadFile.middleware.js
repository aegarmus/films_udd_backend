import multer from 'multer';
import { uploadFile } from '../services/files/multerConfig.js';
import { FileServiceError } from '../errors/TypeError.js';

/**
 * Carga una foto en el servidor
 * @param {string} folder - Nombre de la carpeta donde se guardará la foto
 * @param {string} fieldname - Nombre del campo del formulario que contiene la foto
 * @returns - devolvemos una respuesta middleware para subir el arcihvo
 */
export const uploadPhoto = (folder, fieldname) => {
    try {
        const upload = multer({ storage: uploadFile(folder)}).single(fieldname);
        return upload;
    } catch (error) {
        throw new FileServiceError('Error al subir la foto', 500, error);
    }
};


/**
 * Carga multiples fotos al servidor
 * @param {string} folder - Nombre de la carpeta donde se guardará la foto 
 * @param {string} fields - Nombre del campo del formulario que contiene la foto
 * @param {number} maxCount - Número máximo de fotos a subir
 * @returns - devolvemos una respuesta middleware para subir el arcihvo
 */
export const uploadMultiPhotos = (folder, fields, maxCount = 5) => {
    try {
        const upload = multer({ storage: uploadFile(folder)}).array(fields, maxCount);
        return upload;
    } catch (error) {
        throw new FileServiceError('Error al subir las fotos', 500, error);
    }
};