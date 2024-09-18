import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateMatrixDto {
    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El nombre de la matriz no puede estar vacío' })
    @IsString({ message: 'El nombre de la matriz debe ser un texto' })
    @MaxLength(200, { message: 'El nombre de la matriz debe tener menos de 200 caracteres' })
    @MinLength(3, { message: 'El nombre de la matriz debe tener más de 3 caracteres' })
    nombre_matriz: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor minima de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor minima de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor minima de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor minima de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor minima de la matriz debe ser mayor a 0' })
    minima: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor menor de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor menor de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor menor de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor menor de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor menor de la matriz debe ser mayor a 0' })
    menor: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor moderada de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor moderada de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor moderada de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor moderada de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor moderada de la matriz debe ser mayor a 0' })
    moderada: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor mayor de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor mayor de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor mayor de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor mayor de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor mayor de la matriz debe ser mayor a 0' })
    mayor: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor maxima de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor maxima de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor maxima de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor maxima de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor maxima de la matriz debe ser mayor a 0' })
    maxima: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor muy_alta de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor muy_alta de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor muy_alta de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor muy_alta de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor muy_alta de la matriz debe ser mayor a 0' })
    muy_alta: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor alta de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor alta de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor alta de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor alta de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor alta de la matriz debe ser mayor a 0' })
    alta: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor media de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor media de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor media de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor media de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor media de la matriz debe ser mayor a 0' })
    media: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor baja de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor baja de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor baja de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor baja de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor baja de la matriz debe ser mayor a 0' })
    baja: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor muy_baja de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor muy_baja de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor muy_baja de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor muy_baja de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor muy_baja de la matriz debe ser mayor a 0' })
    muy_baja: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor de_amarillo de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor de_amarillo de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor de_amarillo de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor de_amarillo de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor de_amarillo de la matriz debe ser mayor a 0' })
    de_amarillo: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor a_amarillo de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor a_amarillo de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor a_amarillo de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor a_amarillo de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor a_amarillo de la matriz debe ser mayor a 0' })
    a_amarillo: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor de_naranja de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor de_naranja de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor de_naranja de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor de_naranja de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor de_naranja de la matriz debe ser mayor a 0' })
    de_naranja: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor a_naranja de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor a_naranja de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor a_naranja de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor a_naranja de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor a_naranja de la matriz debe ser mayor a 0' })
    a_naranja: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor de_rojo de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor de_rojo de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor de_rojo de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor de_rojo de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor de_rojo de la matriz debe ser mayor a 0' })
    de_rojo: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor a_rojo de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor a_rojo de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor a_rojo de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor a_rojo de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor a_rojo de la matriz debe ser mayor a 0' })
    a_rojo: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor de_verde de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor de_verde de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor de_verde de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor de_verde de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor de_verde de la matriz debe ser mayor a 0' })
    de_verde: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El valor a_verde de la matriz no puede estar vacío' })
    @IsString({ message: 'El valor a_verde de la matriz debe ser un texto' })
    @MinLength(1, { message: 'El valor a_verde de la matriz debe tener más de 1 caracteres' })
    @MaxLength(10, { message: 'El valor a_verde de la matriz debe tener menos de 10 caracteres' })
    @Min(0, { message: 'El valor a_verde de la matriz debe ser mayor a 0' })
    a_verde: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsString({ message: 'El id del usuario debe ser un texto' })
    @MinLength(1, { message: 'El id del usuario debe tener más de 1 caracteres' })
    @MaxLength(100, { message: 'El id del usuario debe tener menos de 100 caracteres  ' })
    @IsNotEmpty({ message: 'El id del usuario no puede estar vacío' })
    id_usuario: string;
}
