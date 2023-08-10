import { Request, Response, NextFunction, Router } from "express";
import { Alumno } from "../entidades/Alumno";
import { AppDataSource } from "../app-data-source";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    const alumnos = await AppDataSource.getRepository(Alumno).find();
    res.json(alumnos);
});

router.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const resul = await AppDataSource.getRepository(Alumno).findOneBy({ id });
    res.json(resul);
});

router.post("/add", async (req: Request, res: Response) => {
    const nuevoAlumno = await AppDataSource.getRepository(Alumno).create(req.body);
    const resul = await AppDataSource.getRepository(Alumno).save(nuevoAlumno);
    res.json(resul);
});

router.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const alumno = await AppDataSource.getRepository(Alumno).findOneBy({ id });
    if (alumno) {
        AppDataSource.getRepository(Alumno).merge(alumno, req.body);
        const resul = await AppDataSource.getRepository(Alumno).save(alumno);
        res.json(resul);
    } else {
        res.json({ mensaje: "registro no exite" });
    }
});

router.delete("/:id", async (req: Request, res: Response) => {
    const resul = await AppDataSource.getRepository(Alumno).delete(req.params.id);
    res.json(resul);
});

export default router;