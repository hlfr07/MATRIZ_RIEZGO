import { Module } from '@nestjs/common';
import { PerfilesService } from './perfiles.service';
import { PerfilesController } from './perfiles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Perfile } from './entities/perfile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Perfile])],
  controllers: [PerfilesController],
  providers: [PerfilesService],
  exports: [PerfilesService]
})
export class PerfilesModule {}
