import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateAuthDto {
    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El usuario no puede estar vacío' })
    @IsString({ message: 'El usuario debe ser un texto' })
    @MaxLength(50, { message: 'El usuario debe tener menos de 50 caracteres' })
    @MinLength(3, { message: 'El usuario debe tener más de 3 caracteres' })
    usuario: string;

    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'La contraseña no puede estar vacía' })
    @IsString({ message: 'La contraseña debe ser un texto' })
    @MaxLength(50, { message: 'La contraseña debe tener menos de 50 caracteres' })
    @MinLength(3, { message: 'La contraseña debe tener más de 3 caracteres' })
    password: string;
}
