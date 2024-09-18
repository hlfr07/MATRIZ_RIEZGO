import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MatricesService } from './matrices.service';
import { CreateMatrixDto } from './dto/create-matrix.dto';
import { UpdateMatrixDto } from './dto/update-matrix.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { GetMatrixDto } from './dto/get-matrix.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
@ApiTags('matrices')
@Controller('matrices')
export class MatricesController {
  constructor(private readonly matricesService: MatricesService) {}

  @ApiBody({ type: CreateMatrixDto })
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN','ADMIN') // Usuarios con rol 'admin' o 'user' pueden ver todos los perfiles
  create(@Body() createMatrixDto: CreateMatrixDto) {
    return this.matricesService.create(createMatrixDto);
  }

  @ApiBody({ type: [GetMatrixDto] })
  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN','ADMIN','USUARIO') // Usuarios con rol 'admin' o 'user' pueden ver todos los perfiles
  findAll() {
    return this.matricesService.findAll();
  }

  @ApiBody({ type: [GetMatrixDto] })
  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN','ADMIN','USUARIO') // Usuarios con rol 'admin' o 'user' pueden ver todos los perfiles
  findOne(@Param('id') id: string) {
    return this.matricesService.findOne(+id);
  }

  @ApiBody({ type: CreateMatrixDto })
  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN','ADMIN') // Usuarios con rol 'admin' o 'user' pueden ver todos los perfiles
  update(@Param('id') id: string, @Body() updateMatrixDto: UpdateMatrixDto) {
    return this.matricesService.update(+id, updateMatrixDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN','ADMIN') // Usuarios con rol 'admin' o 'user' pueden ver todos los perfiles
  remove(@Param('id') id: string) {
    return this.matricesService.remove(+id);
  }
}
