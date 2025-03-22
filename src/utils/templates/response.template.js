
/**
 * Emite una respuesta desde el servidor
 * @param {object} res - Estructura res de Express 
 * @param {*} data - Data que se enviara en la response
 * @param {*} statusCode - Codigo de estado de la response
 * @param {*} message - Mensaje de confirmación de respuesta
 * @param  {...any} custom - Cualquier otro parametro que se quiera enviar en la response
 */
export const response = (res, data, statusCode, message, custom) => {
    res.status(statusCode).json({
        message: message || 'Petición procesada con éxito',
        statusCode,
        data,
        ...custom //Spread Operator
    });
};
