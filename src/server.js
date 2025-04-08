import express from 'express';
import cors from 'cors';
import { envs } from './config/envs.config.js'; 
import { dbConnect } from './config/db.config.js';

import apiRouter from './routers/index.router.js';
import { errorHandler } from './middlewares/errorhandler.js';

const app = express();

dbConnect({ updateDocs: true });

//Middlewares de CORS
app.use(cors());

//Middlewares para parsear el body a JSON
app.use(express.json());
app.use(express.urlencoded( { extended: true}));

//Middlewares para servir archivos estaticos
app.use('/uploads', express.static('public/uploads'));

//Middlewares de rutas
app.use('/api/v1', apiRouter);

//Middlewares de errores
app.use(errorHandler);



app.listen(envs.port, () => {
    console.log(`Servidor corriendo de pana en el puerto ${envs.port} 👻`); 
});