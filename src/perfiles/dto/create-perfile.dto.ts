import { ApiBody, ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreatePerfileDto {
    @ApiProperty()
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
    @IsNotEmpty({ message: 'El perfil no puede estar vacío' })
    @IsString({ message: 'El perfil debe ser un texto' })
    @MaxLength(50, { message: 'El perfil debe tener menos de 50 caracteres' })
    @MinLength(3, { message: 'El perfil debe tener más de 3 caracteres' })
    perfil: string;
}
