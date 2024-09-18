import { Matrix } from "src/matrices/entities/matrix.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'eventos' })
export class Evento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false })
    nombre_evento: string;

    @Column({ nullable: false })
    probabilidad: string;

    @Column({ nullable: false })
    impacto: string;

    @Column({ nullable: false })
    valor: number;

    @Column({ nullable: false })
    Nivel_riesgo: string;

    @ManyToOne(() => Matrix, matrix => matrix.id, { eager: true })
    @JoinColumn({ name: 'id_matriz' })
    id_matriz: number; // Cambia esto a Matrix


    @ManyToOne(() => Usuario, usuario => usuario.id, { eager: true })
    @JoinColumn({ name: 'id_usuario' })
    id_usuario: number;

    @Column({ default: true })
    estado: boolean;
}
