import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimalService } from '../services/animal.service';
import { CreateAnimalDto } from '../dto/animal.dto';
import { UpdateAnimalDto } from '../dto/animal.dto';

@Controller('animals')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  create(@Body() createAnimalDto: CreateAnimalDto) {
    return this.animalService.create(createAnimalDto);
  }

  @Get()
  findAll() {
    return this.animalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
    return this.animalService.update(+id, updateAnimalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalService.remove(+id);
  }

  // Endpoints pour les questions spécifiques
  @Get('stats/oldest')
  findOldestAnimal() {
    return this.animalService.findOldestAnimal();
  }

  @Get('stats/most-common-species')
  findMostCommonSpecies() {
    return this.animalService.findMostCommonSpecies();
  }

  @Get('stats/owner-most-animals')
  findOwnerWithMostAnimals() {
    return this.animalService.findOwnerWithMostAnimals();
  }

  @Get('stats/owner-most-cats')
  findOwnerWithMostCats() {
    return this.animalService.findOwnerWithMostCats();
  }

  @Get('stats/heaviest-animal')
  findHeaviestAnimal() {
    return this.animalService.findHeaviestAnimal();
  }

  @Get('stats/owner-heaviest-group')
  findOwnerWithHeaviestGroup() {
    return this.animalService.findOwnerWithHeaviestGroup();
  }
} 