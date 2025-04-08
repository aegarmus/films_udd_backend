import mongoose from 'mongoose';
import { URL_IMAGE } from '../utils/constants/regex.js';

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: { type: String, require: true, trim: true },
    apellido: { type: String, required: true },
    correo: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true, 
        lowercase: true,
        match: [/.+@.+\..+/, 'El correo no es valido'], 
    },
    telefono: { 
        type: String, 
        required: true, 
        trim: true, 
        validate: {
            validator(value) {
                return /^\d{10}$/.test(value);
            },
            message: 'El telefono debe contener 10 digitos'
        }
    },
    fecha_nacimiento: { type: Date, required: true },
    password: { type: String, required: true, trim: true },
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
    isActive: { type: Boolean, default: true },
    isAdmin: {type: Boolean, default: false }
}, { 
    toJSON: {
        transform: (doc, ret) => {
            delete ret.password;
            delete ret.isActive;
            delete ret.isAdmin;
            return ret;
        }
    },
    versionKey: false, 
    timestamps: false });



export const Usuario = mongoose.model('usuario', usuarioSchema);


