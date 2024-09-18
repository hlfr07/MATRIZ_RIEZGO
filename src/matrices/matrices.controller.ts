import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatricesService } from './matrices.service';
import { CreateMatrixDto } from './dto/create-matrix.dto';
import { UpdateMatrixDto } from './dto/update-matrix.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { GetMatrixDto } from './dto/get-matrix.dto';
@ApiTags('matrices')
@Controller('matrices')
export class MatricesController {
  constructor(private readonly matricesService: MatricesService) {}

  @ApiBody({ type: CreateMatrixDto })
  @Post()
  create(@Body() createMatrixDto: CreateMatrixDto) {
    return this.matricesService.create(createMatrixDto);
  }

  @ApiBody({ type: [GetMatrixDto] })
  @Get()
  findAll() {
    return this.matricesService.findAll();
  }

  @ApiBody({ type: [GetMatrixDto] })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matricesService.findOne(+id);
  }

  @ApiBody({ type: CreateMatrixDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatrixDto: UpdateMatrixDto) {
    return this.matricesService.update(+id, updateMatrixDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matricesService.remove(+id);
  }
}
