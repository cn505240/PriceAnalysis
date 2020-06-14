import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { makeExecutableSchema } from "apollo-server-express";
import { Make } from "./Make";

@Entity()
export class Model {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Make, make => make.id)
    make: Make;

    @Column()
    code: string;

    @Column()
    name: string;

}