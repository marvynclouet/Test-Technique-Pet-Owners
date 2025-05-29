import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Animal } from './animal.entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lastName: string;

  @Column()
  firstName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column({ nullable: true })
  photoUrl: string;

  @OneToMany(() => Animal, animal => animal.owner)
  animals: Animal[];
} 