import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

    @Column()
    description: string;

    @Column({
        type: 'longtext'
    })
    filename: string;
}
