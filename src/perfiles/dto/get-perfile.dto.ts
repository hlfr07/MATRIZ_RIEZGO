import { ApiProperty } from "@nestjs/swagger";

export class GetPerfileDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    perfil: string;
    @ApiProperty()
    estado: boolean;
}