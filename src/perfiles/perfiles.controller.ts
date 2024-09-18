import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PerfilesService } from './perfiles.service';
import { CreatePerfileDto } from './dto/create-perfile.dto';
import { UpdatePerfileDto } from './dto/update-perfile.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { GetPerfileDto } from './dto/get-perfile.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { Roles } from 'src/auth/roles/roles.decorator';

@ApiTags('Perfiles')
@Controller('perfiles')
export class PerfilesController {
  constructor(private readonly perfilesService: PerfilesService) {}

  @ApiBody({ type: CreatePerfileDto })
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN') // Usuarios con rol 'admin' o 'user' pueden ver todos los perfiles
  create(@Body() createPerfileDto: CreatePerfileDto) {
    return this.perfilesService.create(createPerfileDto);
  }

  @ApiBody({ type: [GetPerfileDto] })
  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN') // Usuarios con rol 'admin' o 'user' pueden ver todos los perfiles
  findAll() {
    return this.perfilesService.findAll();
  }

  @ApiBody({ type: GetPerfileDto })
  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN') // Usuarios con rol 'admin' o 'user' pueden ver todos los perfiles
  findOne(@Param('id') id: string) {
    return this.perfilesService.findOne(+id);
  }

  @ApiBody({ type: CreatePerfileDto }) //se usa el create para el body
  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN') // Usuarios con rol 'admin' o 'user' pueden ver todos los perfiles
  update(@Param('id') id: string, @Body() updatePerfileDto: UpdatePerfileDto) {
    return this.perfilesService.update(+id, updatePerfileDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN') // Usuarios con rol 'admin' o 'user' pueden ver todos los perfiles
  remove(@Param('id') id: string) {
    return this.perfilesService.remove(+id);
  }
}
