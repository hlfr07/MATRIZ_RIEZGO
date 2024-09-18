import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { GetEventoDto } from './dto/get-evento.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { Roles } from 'src/auth/roles/roles.decorator';

@ApiTags('eventos')
@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @ApiBody({ type: CreateEventoDto })
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN','ADMIN') // Usuarios con rol 'admin' o 'user' pueden ver todos los perfiles
  create(@Body() createEventoDto: CreateEventoDto) {
    return this.eventosService.create(createEventoDto);
  }

  @ApiBody({ type: [GetEventoDto] })
  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN','ADMIN','USUARIO') // Usuarios con rol 'admin' o 'user' pueden ver todos los perfiles
  findAll() {
    return this.eventosService.findAll();
  }

  @ApiBody({ type: [GetEventoDto] })
  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN','ADMIN','USUARIO') // Usuarios con rol 'admin' o 'user' pueden ver todos los perfiles
  findOne(@Param('id') id: string) {
    return this.eventosService.findOne(+id);
  }

  @ApiBody({ type: CreateEventoDto })
  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN','ADMIN') // Usuarios con rol 'admin' o 'user' pueden ver todos los perfiles
  update(@Param('id') id: string, @Body() updateEventoDto: UpdateEventoDto) {
    return this.eventosService.update(+id, updateEventoDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPERADMIN','ADMIN') // Usuarios con rol 'admin' o 'user' pueden ver todos los perfiles
  remove(@Param('id') id: string) {
    return this.eventosService.remove(+id);
  }
}
