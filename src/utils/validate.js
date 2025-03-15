import { ValidationError } from "../errors/TypeError";


export const validateDate = (date) => {
    const dateRegEx = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateRegEx.test(date)) {
        throw new ValidationError('La fecha no es valida', `la fecha ${date} debe tener el formato YYYY-MM-DD`);
    }
}