import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UpdatePasswordCodeUsuarioDto {
  
     //debemos pedir el nuevo password
    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'La contraseña no puede estar vacía' })
    @IsString({ message: 'La contraseña debe ser un texto' })
    @MaxLength(50, { message: 'La contraseña debe tener menos de 50 caracteres' })
    @MinLength(3, { message: 'La contraseña debe tener más de 3 caracteres' })
    password: string;
  
    //debemos pedir el codigo de reseteo
    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El código de reseteo no puede estar vacío' })
    @IsString({ message: 'El código de reseteo debe ser un texto' })
    @MaxLength(6, { message: 'El código de reseteo debe tener menos de 6 caracteres' })
    @MinLength(6, { message: 'El código de reseteo debe tener más de 6 caracteres' })
    resetCode: string;
}