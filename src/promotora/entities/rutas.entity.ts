import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Rutas {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Clave: string;

    @Column()
    Descripcion: string;

    @Column()
    Vendedor: string;

    @Column()
    Tipo: number;

    @Column()
    Sucursal: number;

    @Column()
    Contraseña: string;

}