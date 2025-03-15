import express from 'express';

import { envs } from './config/envs.config.js'; 
import { dbConnect } from './config/db.config.js';

const app = express();

dbConnect();

//Middlewares de CORS

//Middlewares para parsear el body a JSON
app.use(express.json());
app.use(express.urlencoded( { extended: true}));

//Middlewares de rutas

//Middlewares de errores




app.listen(envs.port, () => {
    console.log(`Servidor corriendo de pana en el puerto ${envs.port} 👻`); 
});