import "reflect-metadata";
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { AppDataSource } from './app-data-source';
import alumnoRutas from './rutas/alumnos-ruta';

const app = express();
AppDataSource.initialize().then(() => {
    console.log("Data Source se ha inicializado! ")
}).catch((err) => {
    console.error("Error durante la inicialización del Data Source:", err)
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api-nodejs/alumnos',alumnoRutas);
app.listen(3000);
console.log('Servidor escuchando en el puerto : ', 3000);