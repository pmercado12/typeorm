"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Alumno_1 = require("../entidades/Alumno");
const app_data_source_1 = require("../app-data-source");
const router = (0, express_1.Router)();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const alumnos = yield app_data_source_1.AppDataSource.getRepository(Alumno_1.Alumno).find();
    res.json(alumnos);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const resul = yield app_data_source_1.AppDataSource.getRepository(Alumno_1.Alumno).findOneBy({ id });
    res.json(resul);
}));
router.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoAlumno = yield app_data_source_1.AppDataSource.getRepository(Alumno_1.Alumno).create(req.body);
    const resul = yield app_data_source_1.AppDataSource.getRepository(Alumno_1.Alumno).save(nuevoAlumno);
    res.json(resul);
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const alumno = yield app_data_source_1.AppDataSource.getRepository(Alumno_1.Alumno).findOneBy({ id });
    if (alumno) {
        app_data_source_1.AppDataSource.getRepository(Alumno_1.Alumno).merge(alumno, req.body);
        const resul = yield app_data_source_1.AppDataSource.getRepository(Alumno_1.Alumno).save(alumno);
        res.json(resul);
    }
    else {
        res.json({ mensaje: "registro no exite" });
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resul = yield app_data_source_1.AppDataSource.getRepository(Alumno_1.Alumno).delete(req.params.id);
    res.json(resul);
}));
exports.default = router;
