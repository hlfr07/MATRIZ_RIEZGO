import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UpdatePasswordUsuarioDto {
    //debemos pedir el correo del usuario para poder enviarle un correo con el nuevo password
    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El email de usuario no puede estar vacío' })
    @IsString({ message: 'El email de usuario debe ser un texto' })
    @IsEmail({}, { message: 'El email de usuario debe ser un email' })
    email: string;
}