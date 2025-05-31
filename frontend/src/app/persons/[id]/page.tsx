'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getPerson } from '../../../services/api';
import { Person, Animal } from '../../../types';

export default function PersonDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const { data: person, isLoading, error } = useQuery<Person>({
    queryKey: ['person', id],
    queryFn: () => getPerson(id),
    enabled: !!id,
  });

  if (isLoading) return (
    <main className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
      <div className="text-center text-gray-600">Loading...</div>
    </main>
  );
  if (error) return (
    <main className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="text-center text-red-500 text-lg font-semibold">Error loading person</div>
    </main>
  );

  return (
    <main className="container mx-auto p-4 max-w-2xl">
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
        aria-label="Retour"
      >
        ← Retour
      </button>
      <h1 className="text-2xl font-bold mb-4">{person?.firstName} {person?.lastName}</h1>
      <p className="mb-2">Email: {person?.email}</p>
      <p className="mb-4">Phone: {person?.phoneNumber}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Animals</h2>
      <ul className="list-disc pl-6">
        {person?.animals?.length ? person.animals.map((animal: Animal) => (
          <li key={animal.id}>
            <Link href={`/animals/${animal.id}`} className="text-blue-600 hover:underline">{animal.name} ({animal.species})</Link>
          </li>
        )) : <li className="text-gray-500">No animals</li>}
      </ul>
    </main>
  );
} 