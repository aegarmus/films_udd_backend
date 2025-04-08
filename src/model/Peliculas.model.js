import mongoose, { Types } from 'mongoose';
import { URL_IMAGE } from '../utils/constants/regex.js';

const Schema = mongoose.Schema;

const peliculasSchema = new Schema({
    titulo: { type: String, required: true },
    ano_estreno: { type: Number, required: true },
    duracion: { type: Number, required: true },
    director: { type: String, required: true },
    puntaje_critica: { type: Types.Double, required: true },
    gano_oscar: { type: Boolean, required: true },
    imagen: {
        type: String,
        trim: true,
        validate: {
            validator(value) {
                return URL_IMAGE.test(value);
            },
            message: 'La URL de la imagen no es valida'
        }
    }, 
    isActive: { type: Boolean, default: true }  
}, {
    toJSON: {
        transform: (doc, ret) => {
            delete ret.isActive;
            return ret;
        },
    }, 
    versionKey: false, 
    timestamps: false });

export const Peliculas = mongoose.model('peliculas', peliculasSchema);

