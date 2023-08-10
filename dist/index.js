"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app_data_source_1 = require("./app-data-source");
const alumnos_ruta_1 = __importDefault(require("./rutas/alumnos-ruta"));
const app = (0, express_1.default)();
app_data_source_1.AppDataSource.initialize().then(() => {
    console.log("Data Source se ha inicializado! ");
}).catch((err) => {
    console.error("Error durante la inicialización del Data Source:", err);
});
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
// routes
app.use('/api-nodejs/alumnos', alumnos_ruta_1.default);
app.listen(3000);
console.log('Servidor escuchando en el puerto : ', 3000);
