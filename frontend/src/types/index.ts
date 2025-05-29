export interface Person {
  id: number;
  lastName: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  animals?: Animal[];
  photoUrl?: string;
}

export interface Animal {
  id: number;
  name: string;
  dateOfBirth: string;
  species: string;
  breed: string;
  color: string;
  weight: number;
  ownerId: number;
  owner?: Person;
  photoUrl?: string;
} 