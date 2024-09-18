import { Module } from '@nestjs/common';
import { MatricesService } from './matrices.service';
import { MatricesController } from './matrices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Matrix } from './entities/matrix.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Matrix, Usuario])],
  controllers: [MatricesController],
  providers: [MatricesService],
  exports: [MatricesService]
})
export class MatricesModule {}
