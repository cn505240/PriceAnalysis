import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Make } from "./Make";

@Entity()
export class Model {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Make, make => make.id)
    make: Make;

    @Column()
    code: string;

    @Column()
    name: string;

}