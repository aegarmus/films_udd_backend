import mongoose, { Types } from 'mongoose';

const Schema = mongoose.Schema;

const peliculasSchema = new Schema({
    titulo: { type: String, required: true },
    ano_estreno: { type: Number, required: true },
    duracion: { type: Number, required: true },
    director: { type: String, required: true },
    puntaje_critica: { type: Types.Double, required: true },
    gano_oscar: { type: Boolean, required: true }
}, { versionKey: false, timestamps: false });

export const Peliculas = mongoose.model('peliculas', peliculasSchema);