import { Controller, Res, HttpStatus, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateRutaDto } from './dto/create-ruta-dto';
import { RutasService } from './rutas.service';

@Controller('rutas')
export class RutasController {
    constructor(private RutasServices: RutasService){

    }


    @Post()
    create(@Body() createRutaDto: CreateRutaDto, @Res() response){
        this.RutasServices.createRuta(createRutaDto).then(mensaje => {
            response.status(HttpStatus.CREATED).json(mensaje);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: "Error en la creación del Usuario"});
        });
    }

    @Get()
    getAll(@Res() response){
        this.RutasServices.getAll().then(mensajesList => {
            response.status(HttpStatus.OK).json(mensajesList);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: "Error en la obtención del Usuario"});
        });
    }

    //@Get(':id')
    //getbyId(@Res() response, @Param('id') idRuta){
    //    this.RutasServices.getbyId(idRuta).then(mensajesList => {
    //        response.status(HttpStatus.OK).json(mensajesList);
    //    }).catch( () => {
    //        response.status(HttpStatus.FORBIDDEN).json({mensaje: "Error en la obtención de la Ruta"});
    //    });
   // }

    @Get(':id')
    getId(@Res() response, @Param('id') Clave){
        this.RutasServices.getRuta(Clave).then(mensajesList => {
            response.status(HttpStatus.OK).json(mensajesList);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: "Error en la obtención de la Ruta"});
        });
    }

    @Put(':id')
    update(@Body() updateRutaDto: CreateRutaDto, @Res() response,@Param('id') idRuta){
        this.RutasServices.updateRuta(idRuta, updateRutaDto).then(mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch( ()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: "Error en la edición del Usuario"});
        });
    } 

    @Delete(':id')
    delete(@Res() response, @Param('id') idRuta){
        this.RutasServices.deleteRuta(idRuta).then(res => {
            response.status(HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: "Error en la eliminación del Usuario"});
        });
    }
}
