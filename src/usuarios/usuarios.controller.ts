import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { GetUsuarioDto } from './dto/get-usuario.dto';
import { UpdatePasswordUsuarioDto } from './dto/updatepassword-usuario.dto';
import { UpdatePasswordCodeUsuarioDto } from './dto/updatepasswordcode-usuarios.dto';

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @ApiBody({type: CreateUsuarioDto})
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @ApiBody({type: [GetUsuarioDto]})
  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @ApiBody({type: [GetUsuarioDto]})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @ApiBody({type: UpdateUsuarioDto})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @ApiBody({type: UpdatePasswordUsuarioDto})
  @Post('/solicitarresetpassword')
  updatePassword(@Body() updatePasswordUsuarioDto: UpdatePasswordUsuarioDto) {
    return this.usuariosService.updatePassword(updatePasswordUsuarioDto);
  }

  @ApiBody({type: UpdatePasswordCodeUsuarioDto})
  @Patch('/actualizarpassword/:dni')
  updatePasswordCode(@Param('dni') dni: string,@Body() updatePasswordCodeUsuarioDto: UpdatePasswordCodeUsuarioDto) {
    return this.usuariosService.updatePasswordCode(dni, updatePasswordCodeUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
