export class CreateAnimalDto {
  name: string;
  dateOfBirth: Date;
  species: string;
  breed: string;
  color: string;
  weight: number;
  ownerId: number;
  photoUrl?: string;
}

export class UpdateAnimalDto {
  name?: string;
  dateOfBirth?: Date;
  species?: string;
  breed?: string;
  color?: string;
  weight?: number;
  ownerId?: number;
  photoUrl?: string;
} 