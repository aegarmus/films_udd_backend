import { CustomError } from './CustomError.js';

export class ValidationError extends CustomError {
    constructor(message, details) {
        super(message || 'Error de validación', 400, details);
    }
}

export class NotFoundError extends CustomError {
    constructor(message, details) {
        super(message || 'No encontramos el elemento', 404, details);
    }
}

export class DataBaseError extends CustomError {
    constructor(message, statusCode, details) {
        super(message || 'Error en la base de datos', statusCode || 500, details);
    }
}

export class PeliculasError extends CustomError {
    constructor(message, statusCode, details) {
        super(message || 'Error en la colección de peliculas', statusCode || 500, details);
    }
}

export class InternalServerError extends CustomError {
    constructor(message, statusCode, details) {
        super(message || 'Error interno en el servidor', statusCode || 500, details);
    }
}