import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Evento } from './entities/evento.entity';
import { Matrix } from 'src/matrices/entities/matrix.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class EventosService {
  constructor
  (
    @InjectRepository(Evento) private eventoRepository: Repository<Evento>,
    @InjectRepository(Matrix) private matrixRepository: Repository<Matrix>,
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>
  ) {}
  async create(createEventoDto: CreateEventoDto) {
    const eventoExists = await this.eventoRepository.findOneBy({ nombre_evento: createEventoDto.nombre_evento });

    if (eventoExists) {
      throw new HttpException('El evento ya existe', HttpStatus.CONFLICT);
    }

    const matrixExists = await this.matrixRepository.findOneBy({ 
      id: parseInt(createEventoDto.id_matriz),
      estado: true
    });

    if (!matrixExists) {
      throw new HttpException('La matriz no existe', HttpStatus.NOT_FOUND);
    }

    if (!matrixExists.estado) {
      throw new HttpException('La matriz no existe', HttpStatus.NOT_FOUND);
    }

    const usuarioExists = await this.usuarioRepository.findOneBy({ 
      id: parseInt(createEventoDto.id_usuario),
      estado: true
    });

    if (!usuarioExists) {
      throw new HttpException('El usuario no existe', HttpStatus.NOT_FOUND);
    }

    if (!usuarioExists.estado) {
      throw new HttpException('El usuario no existe', HttpStatus.NOT_FOUND);
    }

    const newEvento = this.eventoRepository.create({
      nombre_evento: createEventoDto.nombre_evento,
      probabilidad: createEventoDto.probabilidad,
      impacto: createEventoDto.impacto,
      valor: parseInt(createEventoDto.valor),
      Nivel_riesgo: createEventoDto.Nivel_riesgo,
      id_matriz: matrixExists.id,
      id_usuario: usuarioExists.id,
    });

    await this.eventoRepository.save(newEvento);

    return { message: 'Evento creado correctamente' };
  }

  findAll() {
    const eventos = this.eventoRepository.find({
      order: {
        id: 'DESC'
      }
    });

    return eventos;
  }

  async findOne(id: number) {
    const evento = await this.eventoRepository.findOneBy({
      id: id,
      estado: true
    });

    if (!evento) {
      throw new HttpException('El evento no existe', HttpStatus.NOT_FOUND);
    }

    if (!evento.estado) {
      throw new HttpException('El evento no existe', HttpStatus.NOT_FOUND);
    }

    return evento;
  }

  async update(id: number, updateEventoDto: UpdateEventoDto) {
    const evento = await this.eventoRepository.findOneBy({
      id: id
    });

    if (!evento) {
      throw new HttpException('El evento no existe', HttpStatus.NOT_FOUND);
    }

    if (updateEventoDto.nombre_evento !== evento.nombre_evento) {
      const eventoExists = await this.eventoRepository.findOneBy({
        nombre_evento: updateEventoDto.nombre_evento
      });

      if (eventoExists) {
        throw new HttpException('El evento ya existe', HttpStatus.CONFLICT);
      }
    }

    const matrixExists = await this.matrixRepository.findOneBy({
      id: parseInt(updateEventoDto.id_matriz),
      estado: true
    });

    if (!matrixExists) {
      throw new HttpException('La matriz no existe', HttpStatus.NOT_FOUND);
    }

    if (!matrixExists.estado) {
      throw new HttpException('La matriz no existe', HttpStatus.NOT_FOUND);
    }

    const usuarioExists = await this.usuarioRepository.findOneBy({
      id: parseInt(updateEventoDto.id_usuario),
      estado: true
    });

    if (!usuarioExists) {
      throw new HttpException('El usuario no existe', HttpStatus.NOT_FOUND);
    }

    if (!usuarioExists.estado) {
      throw new HttpException('El usuario no existe', HttpStatus.NOT_FOUND);
    }

    evento.nombre_evento = updateEventoDto.nombre_evento;
    evento.probabilidad = updateEventoDto.probabilidad;
    evento.impacto = updateEventoDto.impacto;
    evento.valor = parseInt(updateEventoDto.valor);
    evento.Nivel_riesgo = updateEventoDto.Nivel_riesgo;
    evento.id_matriz = matrixExists.id;
    evento.id_usuario = usuarioExists.id;

    await this.eventoRepository.save(evento);

    return { message: 'Evento actualizado correctamente' };

  }

  async remove(id: number) {
    const evento = await this.eventoRepository.findOneBy({
      id: id,
      estado: true
    });

    if (!evento) {
      throw new HttpException('El evento no existe', HttpStatus.NOT_FOUND);
    }

    if (!evento.estado) {
      throw new HttpException('El evento no existe', HttpStatus.NOT_FOUND);
    }

    this.eventoRepository.update(id, { estado: false });

    return { message: 'Evento eliminado correctamente' };
  }
}
