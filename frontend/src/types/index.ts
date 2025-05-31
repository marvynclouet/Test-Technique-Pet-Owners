export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  photoUrl?: string;
  animals?: Animal[];
}

export interface Animal {
  id: number;
  name: string;
  dateOfBirth: string;
  species: string;
  breed: string;
  color: string;
  weight: number;
  photoUrl?: string;
  ownerId: number;
  owner?: Person;
} 