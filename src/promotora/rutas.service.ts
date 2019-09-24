import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Entity, getRepository } from 'typeorm';
import { CreateRutaDto } from './dto/create-ruta-dto';
import { Rutas } from './entities/rutas.entity';
import {getConnection} from "typeorm";


@Injectable()
export class RutasService {
    constructor(
        @InjectRepository(Rutas)
        private readonly rutasRepository: Repository<Rutas>,
      ) {}
    
    async getAll(): Promise<Rutas[]>{
        return await this.rutasRepository.find();
    }

    async createRuta(rutaNuevo: CreateRutaDto): Promise<Rutas>{
        const nuevo = new Rutas();
        nuevo.Clave = rutaNuevo.Clave;
        nuevo.Descripcion = rutaNuevo.Descripcion;
        nuevo.Vendedor = rutaNuevo.Vendedor;
        nuevo.Tipo = rutaNuevo.Tipo;
        nuevo.Sucursal = rutaNuevo.Sucursal;
        nuevo.Contraseña = rutaNuevo.Contraseña;

        return this.rutasRepository.save(nuevo);
        
    }

    

    async getRuta(strClve: string): Promise<Rutas>{
        return await getRepository(Rutas)
        .createQueryBuilder("rutas")
        .select("rutas")
        .where("rutas.Clave = :id", { id: strClve })
        .getOne();

        }

    async updateRuta(idRuta: number,rutaActualizar: CreateRutaDto): Promise<Rutas>{
        const rutaUpdate = await this.rutasRepository.findOne(idRuta);
        rutaUpdate.Clave = rutaActualizar.Clave;
        rutaUpdate.Descripcion = rutaActualizar.Descripcion;
        rutaUpdate.Vendedor = rutaActualizar.Vendedor;
        rutaUpdate.Tipo = rutaActualizar.Tipo;
        rutaUpdate.Sucursal = rutaActualizar.Sucursal;
        rutaUpdate.Contraseña = rutaActualizar.Contraseña;

        return await this.rutasRepository.save(rutaUpdate);
    }

    async deleteRuta(idRuta: number): Promise<any>{
        return await this.rutasRepository.delete(idRuta);    
    }

}
