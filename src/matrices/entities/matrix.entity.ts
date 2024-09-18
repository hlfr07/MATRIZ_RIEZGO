import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'matrices' })
export class Matrix {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: true })
    estado: boolean;

    @Column({ nullable: false })
    minima: number;

    @Column({ nullable: false })
    menor: number;

    @Column({ nullable: false })
    moderada: number;

    @Column({ nullable: false })
    mayor: number;

    @Column({ nullable: false })
    maxima: number;

    @Column({ nullable: false })
    muy_alta: number;

    @Column({ nullable: false })
    alta: number;

    @Column({ nullable: false })
    media: number;

    @Column({ nullable: false })
    baja: number;

    @Column({ nullable: false })
    muy_baja: number;

    @Column({ nullable: false })
    de_amarillo: number;

    @Column({ nullable: false })
    a_amarillo: number;

    @Column({ nullable: false })
    de_naranja: number;

    @Column({ nullable: false })
    a_naranja: number;

    @Column({ nullable: false })
    de_rojo: number;

    @Column({ nullable: false })
    a_rojo: number;

    @Column({ nullable: false })
    de_verde: number;

    @Column({ nullable: false })
    a_verde: number;

    @ManyToOne(() => Usuario, usuario => usuario.id, {eager: true})
    @JoinColumn({ name: 'id_usuario' })
    id_usuario: number;
}
