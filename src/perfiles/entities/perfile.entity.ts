import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "perfiles"})
export class Perfile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: false})
    perfil: string;

    @Column({default: true})
    estado: boolean;
}
