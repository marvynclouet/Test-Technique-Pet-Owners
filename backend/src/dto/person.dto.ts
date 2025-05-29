export class CreatePersonDto {
  lastName: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  photoUrl?: string;
}

export class UpdatePersonDto {
  lastName?: string;
  firstName?: string;
  email?: string;
  phoneNumber?: string;
  photoUrl?: string;
} 