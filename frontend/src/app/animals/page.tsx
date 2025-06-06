'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { getAnimals } from '../../services/api';
import Image from 'next/image';

export default function AnimalsPage() {
  const { data: animals, isLoading, error } = useQuery({
    queryKey: ['animals'],
    queryFn: getAnimals,
  });

  if (isLoading) {
    return (
      <main className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
        <div className="text-center text-gray-600">Loading...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center text-red-500 text-lg font-semibold">Error loading animals</div>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Animals</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {animals?.map((animal) => (
          <Link
            key={animal.id}
            href={`/animals/${animal.id}`}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline focus:ring-2 focus:ring-blue-400"
            aria-label={`View details for ${animal.name}`}
          >
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={animal.photoUrl || 'https://source.unsplash.com/300x300/?animal'}
                alt={animal.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{animal.name}</h2>
            <p className="text-gray-600">Species: {animal.species}</p>
            <p className="text-gray-600">Breed: {animal.breed}</p>
            <p className="text-gray-600">Color: {animal.color}</p>
            <p className="text-gray-600">Weight: {animal.weight}g</p>
            <p className="text-gray-600 mt-2">
              Owner: {animal.owner?.firstName} {animal.owner?.lastName}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
} 