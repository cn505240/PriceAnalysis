import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Make {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}