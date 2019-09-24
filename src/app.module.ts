import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RutasController } from './promotora/rutas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RutasService } from './promotora/rutas.service';
import { Rutas } from './promotora/entities/rutas.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost\\SQLEXPRESS',
      port: 1433,
      username: 'Xarls',
      password: '12345',    
      database: 'Promotora',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,}),
      TypeOrmModule.forFeature([Rutas]),
  ],
  controllers: [AppController, RutasController],
  providers: [AppService, RutasService],
})
export class AppModule {}
