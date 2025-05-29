import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from '../entities/person.entity';
import { CreatePersonDto } from '../dto/person.dto';
import { UpdatePersonDto } from '../dto/person.dto';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  create(createPersonDto: CreatePersonDto): Promise<Person> {
    const person = this.personRepository.create(createPersonDto);
    return this.personRepository.save(person);
  }

  findAll(): Promise<Person[]> {
    return this.personRepository.find({
      relations: ['animals'],
    });
  }

  async findOne(id: number): Promise<Person> {
    const person = await this.personRepository.findOne({
      where: { id },
      relations: ['animals'],
    });
    if (!person) {
      throw new NotFoundException(`Person with ID ${id} not found`);
    }
    return person;
  }

  async update(id: number, updatePersonDto: UpdatePersonDto): Promise<Person> {
    const person = await this.findOne(id);
    await this.personRepository.update(id, updatePersonDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const person = await this.findOne(id);
    await this.personRepository.delete(id);
  }
} 