import { ApiProperty } from "@nestjs/swagger";

export class GetMatrixDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    nombre_matriz: string;
    @ApiProperty()
    estado: boolean;
    @ApiProperty()
    minima: number;
    @ApiProperty()
    menor: number;
    @ApiProperty()
    moderada: number;
    @ApiProperty()
    mayor: number;
    @ApiProperty()
    maxima: number;
    @ApiProperty()
    muy_alta: number;
    @ApiProperty()
    alta: number;
    @ApiProperty()
    media: number;
    @ApiProperty()
    baja: number;
    @ApiProperty()
    muy_baja: number;
    @ApiProperty()
    de_amarillo: number;
    @ApiProperty()
    a_amarillo: number;
    @ApiProperty()
    de_naranja: number;
    @ApiProperty()
    a_naranja: number;
    @ApiProperty()
    de_rojo: number;
    @ApiProperty()
    a_rojo: number;
    @ApiProperty()
    usuario: any;
}