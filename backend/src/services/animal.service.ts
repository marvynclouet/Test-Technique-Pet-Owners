import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from '../entities/animal.entity';
import { CreateAnimalDto } from '../dto/animal.dto';
import { UpdateAnimalDto } from '../dto/animal.dto';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private animalRepository: Repository<Animal>,
  ) {}

  create(createAnimalDto: CreateAnimalDto): Promise<Animal> {
    const animal = this.animalRepository.create(createAnimalDto);
    return this.animalRepository.save(animal);
  }

  findAll(): Promise<Animal[]> {
    return this.animalRepository.find({
      relations: ['owner'],
    });
  }

  async findOne(id: number): Promise<Animal> {
    const animal = await this.animalRepository.findOne({
      where: { id },
      relations: ['owner'],
    });
    if (!animal) {
      throw new NotFoundException(`Animal with ID ${id} not found`);
    }
    return animal;
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto): Promise<Animal> {
    const animal = await this.findOne(id);
    await this.animalRepository.update(id, updateAnimalDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const animal = await this.findOne(id);
    await this.animalRepository.delete(id);
  }

  // Méthodes pour répondre aux questions spécifiques
  async findOldestAnimal(): Promise<Animal> {
    const animal = await this.animalRepository.findOne({
      order: { dateOfBirth: 'ASC' },
      relations: ['owner'],
    });
    if (!animal) {
      throw new NotFoundException('No animals found');
    }
    return animal;
  }

  async findMostCommonSpecies(): Promise<{ species: string; count: number }> {
    const result = await this.animalRepository
      .createQueryBuilder('animal')
      .select('animal.species', 'species')
      .addSelect('COUNT(*)', 'count')
      .groupBy('animal.species')
      .orderBy('count', 'DESC')
      .limit(1)
      .getRawOne();
    
    if (!result) {
      throw new NotFoundException('No animals found');
    }
    return result;
  }

  async findOwnerWithMostAnimals(): Promise<{ owner: string; count: number }> {
    const result = await this.animalRepository
      .createQueryBuilder('animal')
      .leftJoin('animal.owner', 'owner')
      .select('CONCAT(owner.firstName, " ", owner.lastName)', 'owner')
      .addSelect('COUNT(*)', 'count')
      .groupBy('animal.ownerId')
      .orderBy('count', 'DESC')
      .limit(1)
      .getRawOne();
    
    if (!result) {
      throw new NotFoundException('No animals found');
    }
    return result;
  }

  async findOwnerWithMostCats(): Promise<{ owner: string; count: number }> {
    const result = await this.animalRepository
      .createQueryBuilder('animal')
      .leftJoin('animal.owner', 'owner')
      .select('CONCAT(owner.firstName, " ", owner.lastName)', 'owner')
      .addSelect('COUNT(*)', 'count')
      .where('animal.species = :species', { species: 'Cat' })
      .groupBy('animal.ownerId')
      .orderBy('count', 'DESC')
      .limit(1)
      .getRawOne();
    
    if (!result) {
      throw new NotFoundException('No cats found');
    }
    return result;
  }

  async findHeaviestAnimal(): Promise<{ owner: string; animal: string; weight: number }> {
    const result = await this.animalRepository
      .createQueryBuilder('animal')
      .leftJoin('animal.owner', 'owner')
      .select('CONCAT(owner.firstName, " ", owner.lastName)', 'owner')
      .addSelect('animal.name', 'animal')
      .addSelect('animal.weight', 'weight')
      .orderBy('animal.weight', 'DESC')
      .limit(1)
      .getRawOne();
    
    if (!result) {
      throw new NotFoundException('No animals found');
    }
    return result;
  }

  async findOwnerWithHeaviestGroup(): Promise<{ owner: string; totalWeight: number }> {
    const result = await this.animalRepository
      .createQueryBuilder('animal')
      .leftJoin('animal.owner', 'owner')
      .select('CONCAT(owner.firstName, " ", owner.lastName)', 'owner')
      .addSelect('SUM(animal.weight)', 'totalWeight')
      .groupBy('animal.ownerId')
      .orderBy('totalWeight', 'DESC')
      .limit(1)
      .getRawOne();
    
    if (!result) {
      throw new NotFoundException('No animals found');
    }
    return result;
  }
} 