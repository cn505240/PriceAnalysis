import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Model } from "./Model";

@Entity()
export class Price {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Model, model => model.id)
    model: Model

    @Column()
    is_unlocked: boolean;

    @Column()
    network: string;

    @Column()
    colour: string;

    @Column()
    storage_gb: number;
}