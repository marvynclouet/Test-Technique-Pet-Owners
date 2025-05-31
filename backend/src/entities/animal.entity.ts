import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Person } from './person.entity';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column()
  species: string;

  @Column()
  breed: string;

  @Column()
  color: string;

  @Column('decimal', { precision: 10, scale: 2 })
  weight: number;

  @ManyToOne(() => Person, person => person.animals)
  @JoinColumn({ name: 'ownerId' })
  owner: Person;

  @Column()
  ownerId: number;

  @Column({ nullable: true })
  photoUrl: string;
} 