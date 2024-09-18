import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePerfileDto } from './dto/create-perfile.dto';
import { UpdatePerfileDto } from './dto/update-perfile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Perfile } from './entities/perfile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PerfilesService {

  constructor(@InjectRepository(Perfile) private perfileRepository: Repository<Perfile>) { }

  async create(createPerfileDto: CreatePerfileDto) {
    const perfileEncontrado = await this.perfileRepository.findOneBy({
      perfil: createPerfileDto.perfil
    });

    if (perfileEncontrado) {
      throw new HttpException('El perfil ya existe', HttpStatus.CONFLICT);
    }

    const nuevoPerfil = this.perfileRepository.create({
      perfil: createPerfileDto.perfil,
    });

    await this.perfileRepository.save(nuevoPerfil);

    return { message: 'Perfil creado correctamente' };
  }

  findAll() {
    const perfiles = this.perfileRepository.find({
      order: { id: 'DESC' }
    });

    return perfiles;
  }

  async findOne(id: number) {
    const perfilEncontrado = await this.perfileRepository.findOneBy({
      id: id,
      estado: true
    });

    if (!perfilEncontrado) {
      throw new HttpException('Perfil no encontrado', HttpStatus.NOT_FOUND);
    }

    if (!perfilEncontrado.estado) {
      throw new HttpException('Perfil no encontrado', HttpStatus.NOT_FOUND);
    }

    return perfilEncontrado;
  }

  async update(id: number, updatePerfileDto: UpdatePerfileDto) {
    const perfilEncontrado = await this.perfileRepository.findOneBy({
      id: id,
    });

    if (!perfilEncontrado) {
      throw new HttpException('Perfil no encontrado', HttpStatus.NOT_FOUND);
    }

    //comprobar la existencia del perfil con el mismo nombre solo si el nombre es diferente
    if (updatePerfileDto.perfil !== perfilEncontrado.perfil) {
      const perfileEncontrado = await this.perfileRepository.findOneBy({
        perfil: updatePerfileDto.perfil
      });

      if (perfileEncontrado) {
        throw new HttpException('El perfil ya existe', HttpStatus.CONFLICT);
      }
    }

    perfilEncontrado.perfil = updatePerfileDto.perfil;

    await this.perfileRepository.update(id, perfilEncontrado);

    return { message: 'Perfil actualizado correctamente' };
  }

  async remove(id: number) {
    const perfilEncontrado = await this.perfileRepository.findOneBy({
      id: id,
      estado: true
    });

    if (!perfilEncontrado) {
      throw new HttpException('Perfil no encontrado', HttpStatus.NOT_FOUND);
    }

    if (!perfilEncontrado.estado) {
      throw new HttpException('Perfil eliminado', HttpStatus.NOT_FOUND);
    }

    await this.perfileRepository.update(id, { estado: false });

    return { message: 'Perfil eliminado correctamente' };
  }
}
