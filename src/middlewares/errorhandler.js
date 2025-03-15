import { CustomError } from '../errors/CustomError.js';
import { InternalServerError } from '../errors/TypeError.js';


export const errorHandler = (err, req, res, _next) => {

    if(!(err instanceof CustomError)) {
        err = new InternalServerError(
            err.messge || 'Error Inesperado! D:',
            err.statusCode || 500,
            err.details || 'Ups! Tenemos un Error Imprevisto, contacta con nuestro equipo de soporte por favor'
        );
    }

    const errorResponse = {
        status: 'ERROR',
        message: err.message,
        statusCode: err.statusCode,
        details: err.details
    };

    console.error(
        `ERROR: ${errorResponse.message} ----- Deatils: ${errorResponse.details} ----- Status: ${errorResponse.statusCode}`
    );

    res.status(err.statusCode).json(errorResponse);


};