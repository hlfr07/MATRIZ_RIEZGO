import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMatrixDto } from './dto/create-matrix.dto';
import { UpdateMatrixDto } from './dto/update-matrix.dto';
import { Matrix } from './entities/matrix.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class MatricesService {

  constructor(@InjectRepository(Matrix) private matrizRepository: Repository<Matrix>, @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>) { }

  async create(createMatrixDto: CreateMatrixDto) {
    const matrizEncontrada = await this.matrizRepository.findOneBy({
      nombre_matriz: createMatrixDto.nombre_matriz
    });

    if (matrizEncontrada) {
      throw new HttpException('La matriz ya existe', HttpStatus.CONFLICT);
    }

    const usuarioEncontrado = await this.usuarioRepository.findOneBy({
      id: parseInt(createMatrixDto.id_usuario),
      estado: true
    });

    if (!usuarioEncontrado) {
      throw new HttpException('El usuario no existe', HttpStatus.NOT_FOUND);
    }

    if (!usuarioEncontrado.estado) {
      throw new HttpException('El usuario no existe', HttpStatus.NOT_FOUND);
    }

    const NuevaMatriz = this.matrizRepository.create({
      nombre_matriz: createMatrixDto.nombre_matriz,
      minima: parseInt(createMatrixDto.minima),
      menor: parseInt(createMatrixDto.menor),
      moderada: parseInt(createMatrixDto.moderada),
      mayor: parseInt(createMatrixDto.mayor),
      maxima: parseInt(createMatrixDto.maxima),
      muy_alta: parseInt(createMatrixDto.muy_alta),
      alta: parseInt(createMatrixDto.alta),
      media: parseInt(createMatrixDto.media),
      baja: parseInt(createMatrixDto.baja),
      muy_baja: parseInt(createMatrixDto.muy_baja),
      de_amarillo: parseInt(createMatrixDto.de_amarillo),
      a_amarillo: parseInt(createMatrixDto.a_amarillo),
      de_naranja: parseInt(createMatrixDto.de_naranja),
      a_naranja: parseInt(createMatrixDto.a_naranja),
      de_rojo: parseInt(createMatrixDto.de_rojo),
      a_rojo: parseInt(createMatrixDto.a_rojo),
      id_usuario: usuarioEncontrado.id
    });

    await this.matrizRepository.save(NuevaMatriz);

    return { message: 'Matriz creada correctamente' };
  }

  findAll() {
    const matrices = this.matrizRepository.find({
      order: { id: 'DESC' }
    });

    return matrices;
  }

  async findOne(id: number) {
    const matrizEncontrada =await this.matrizRepository.findOneBy({
      id: id,
      estado: true
    });

    if (!matrizEncontrada) {
      throw new HttpException('Matriz no encontrada', HttpStatus.NOT_FOUND);
    }

    if (!matrizEncontrada.estado) {
      throw new HttpException('Matriz no encontrada', HttpStatus.NOT_FOUND);
    }

    return matrizEncontrada;
  }

  async update(id: number, updateMatrixDto: UpdateMatrixDto) {
    const matrizEncontrada = await this.matrizRepository.findOneBy({
      id: id,
    });

    if (!matrizEncontrada) {
      throw new HttpException('Matriz no encontrada', HttpStatus.NOT_FOUND);
    }

    //comprobar la existencia de la matriz con el mismo nombre solo si el nombre es diferente
    if (updateMatrixDto.nombre_matriz !== matrizEncontrada.nombre_matriz) {
      const matrizEncontrada = await this.matrizRepository.findOneBy({
        nombre_matriz: updateMatrixDto.nombre_matriz
      });

      if (matrizEncontrada) {
        throw new HttpException('La matriz ya existe', HttpStatus.CONFLICT);
      }
    }

    const usuarioEncontrado = await this.usuarioRepository.findOneBy({
      id: parseInt(updateMatrixDto.id_usuario)
    });

    if (!usuarioEncontrado) {
      throw new HttpException('El usuario no existe', HttpStatus.NOT_FOUND);
    }

    matrizEncontrada.nombre_matriz = updateMatrixDto.nombre_matriz;
    matrizEncontrada.minima = parseInt(updateMatrixDto.minima);
    matrizEncontrada.menor = parseInt(updateMatrixDto.menor);
    matrizEncontrada.moderada = parseInt(updateMatrixDto.moderada);
    matrizEncontrada.mayor = parseInt(updateMatrixDto.mayor);
    matrizEncontrada.maxima = parseInt(updateMatrixDto.maxima);
    matrizEncontrada.muy_alta = parseInt(updateMatrixDto.muy_alta);
    matrizEncontrada.alta = parseInt(updateMatrixDto.alta);
    matrizEncontrada.media = parseInt(updateMatrixDto.media);
    matrizEncontrada.baja = parseInt(updateMatrixDto.baja);
    matrizEncontrada.muy_baja = parseInt(updateMatrixDto.muy_baja);
    matrizEncontrada.de_amarillo = parseInt(updateMatrixDto.de_amarillo);
    matrizEncontrada.a_amarillo = parseInt(updateMatrixDto.a_amarillo);
    matrizEncontrada.de_naranja = parseInt(updateMatrixDto.de_naranja);
    matrizEncontrada.a_naranja = parseInt(updateMatrixDto.a_naranja);
    matrizEncontrada.de_rojo = parseInt(updateMatrixDto.de_rojo);
    matrizEncontrada.a_rojo = parseInt(updateMatrixDto.a_rojo);
    matrizEncontrada.id_usuario = usuarioEncontrado.id;

    await this.matrizRepository.update(id, matrizEncontrada);

    return { message: 'Matriz actualizada correctamente' };
  }

  async remove(id: number) {
    const matrizEncontrada = await this.matrizRepository.findOneBy({
      id: id,
      estado: true
    });

    if (!matrizEncontrada) {
      throw new HttpException('Matriz no encontrada', HttpStatus.NOT_FOUND);
    }

    if (!matrizEncontrada.estado) {
      throw new HttpException('Matriz eliminada', HttpStatus.NOT_FOUND);
    }

    await this.matrizRepository.update(id, {estado: false});

    return { message: 'Matriz eliminada correctamente' };
  }
}
