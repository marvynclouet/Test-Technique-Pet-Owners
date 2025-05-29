'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getAnimals } from '../../../services/api';

export default function AnimalDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const { data: animal, isLoading, error } = useQuery({
    queryKey: ['animal', id],
    queryFn: () => getAnimals(id),
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
      <div className="text-center text-red-500 text-lg font-semibold">Error loading animal</div>
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
      <h1 className="text-2xl font-bold mb-4">{animal?.name}</h1>
      <p className="mb-2">Species: {animal?.species}</p>
      <p className="mb-2">Breed: {animal?.breed}</p>
      <p className="mb-2">Color: {animal?.color}</p>
      <p className="mb-4">Weight: {animal?.weight}g</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Owner</h2>
      {animal?.owner ? (
        <Link href={`/persons/${animal.owner.id}`} className="text-blue-600 hover:underline">{animal.owner.firstName} {animal.owner.lastName}</Link>
      ) : (
        <span className="text-gray-500">No owner</span>
      )}
    </main>
  );
} 