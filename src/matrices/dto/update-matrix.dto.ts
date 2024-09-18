import { PartialType } from '@nestjs/swagger';
import { CreateMatrixDto } from './create-matrix.dto';

export class UpdateMatrixDto extends PartialType(CreateMatrixDto) {}
