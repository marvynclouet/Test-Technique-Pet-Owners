'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { getPersons } from '../../services/api';
import Image from 'next/image';

export default function PersonsPage() {
  const { data: persons, isLoading, error } = useQuery({
    queryKey: ['persons'],
    queryFn: getPersons,
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
        <div className="text-center text-red-500 text-lg font-semibold">Error loading persons</div>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Persons</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {persons?.map((person) => (
          <Link
            key={person.id}
            href={`/persons/${person.id}`}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline focus:ring-2 focus:ring-blue-400"
            aria-label={`View details for ${person.firstName} ${person.lastName}`}
          >
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={person.photoUrl || 'https://randomuser.me/api/portraits/lego/1.jpg'}
                alt={`${person.firstName} ${person.lastName}`}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">
              {person.firstName} {person.lastName}
            </h2>
            <p className="text-gray-600">{person.email}</p>
            <p className="text-gray-600">{person.phoneNumber}</p>
            <p className="text-gray-600 mt-2">
              {person.animals?.length || 0} animals
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
} 