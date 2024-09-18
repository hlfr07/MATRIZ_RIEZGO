import { ApiProperty } from "@nestjs/swagger";

export class GetEventoDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    nombre_evento: string;
    @ApiProperty()
    probabilidad: string;
    @ApiProperty()
    impacto: string;
    @ApiProperty()
    valor: number;
    @ApiProperty()
    Nivel_riesgo: string;
    @ApiProperty()
    matriz: any;
    @ApiProperty()
    usuario: any;
    @ApiProperty()
    estado: boolean;
}