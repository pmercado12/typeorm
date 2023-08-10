import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Alumno {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombres: string;
    @Column()
    apellidos: string;
    @Column()
    doc_identidad: number;
}