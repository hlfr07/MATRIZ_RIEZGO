import { Module } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Evento } from './entities/evento.entity';
import { Matrix } from 'src/matrices/entities/matrix.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Evento, Matrix])],  
  controllers: [EventosController],
  providers: [EventosService],
  exports: [EventosService]
})
export class EventosModule {}
