import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateEventoDto {
    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El nombre del evento no puede estar vacío' })
    @IsString({ message: 'El nombre del evento debe ser un texto' })
    @MaxLength(100, { message: 'El nombre del evento debe tener menos de 100 caracteres' })
    @MinLength(3, { message: 'El nombre del evento debe tener más de 3 caracteres' })
    nombre_evento: string;
    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'La probabilidad no puede estar vacía' })
    @IsString({ message: 'La probabilidad debe ser un texto' })
    @MaxLength(100, { message: 'La probabilidad debe tener menos de 100 caracteres' })
    @MinLength(3, { message: 'La probabilidad debe tener más de 3 caracteres' })
    probabilidad: string;
    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El impacto no puede estar vacío' })
    @IsString({ message: 'El impacto debe ser un texto' })
    @MaxLength(100, { message: 'El impacto debe tener menos de 100 caracteres' })
    @MinLength(3, { message: 'El impacto debe tener más de 3 caracteres' })
    impacto: string;
    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor no puede estar vacío' })
    @IsString({ message: 'El valor debe ser un texto' })
    @MaxLength(100, { message: 'El valor debe tener menos de 100 caracteres' })
    @MinLength(1, { message: 'El valor debe tener más de 1 caracteres' })
    valor: string;
    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El nivel de riesgo no puede estar vacío' })
    @IsString({ message: 'El nivel de riesgo debe ser un texto' })
    @MaxLength(100, { message: 'El nivel de riesgo debe tener menos de 100 caracteres' })
    @MinLength(3, { message: 'El nivel de riesgo debe tener más de 3 caracteres' })
    Nivel_riesgo: string;
    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El id de la matriz no puede estar vacío' })
    @IsString({ message: 'El id de la matriz debe ser un texto' })
    @MaxLength(100, { message: 'El id de la matriz debe tener menos de 100 caracteres' })
    @MinLength(1, { message: 'El id de la matriz debe tener más de 1 caracteres' })
    id_matriz: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El id del usuario no puede estar vacío' })
    @IsString({ message: 'El id del usuario debe ser un texto' })
    @MaxLength(100, { message: 'El id del usuario debe tener menos de 100 caracteres' })
    @MinLength(1, { message: 'El id del usuario debe tener más de 1 caracteres' })
    id_usuario: string;
}
