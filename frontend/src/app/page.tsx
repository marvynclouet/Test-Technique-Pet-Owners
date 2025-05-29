'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import {
  getOldestAnimal,
  getMostCommonSpecies,
  getOwnerWithMostAnimals,
  getOwnerWithMostCats,
  getHeaviestAnimal,
  getOwnerWithHeaviestGroup,
} from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const { data: oldestAnimal } = useQuery({
    queryKey: ['oldestAnimal'],
    queryFn: getOldestAnimal,
  });

  const { data: mostCommonSpecies } = useQuery({
    queryKey: ['mostCommonSpecies'],
    queryFn: getMostCommonSpecies,
  });

  const { data: ownerWithMostAnimals } = useQuery({
    queryKey: ['ownerWithMostAnimals'],
    queryFn: getOwnerWithMostAnimals,
  });

  const { data: ownerWithMostCats } = useQuery({
    queryKey: ['ownerWithMostCats'],
    queryFn: getOwnerWithMostCats,
  });

  const { data: heaviestAnimal } = useQuery({
    queryKey: ['heaviestAnimal'],
    queryFn: getHeaviestAnimal,
  });

  const { data: ownerWithHeaviestGroup } = useQuery({
    queryKey: ['ownerWithHeaviestGroup'],
    queryFn: getOwnerWithHeaviestGroup,
  });

  return (
    <main className="container mx-auto p-4">
      <header>
        <h1 className="text-3xl font-bold mb-8">{t('welcome')}</h1>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" aria-label="Navigation links">
        <Link href="/persons" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">{t('persons')}</h2>
          <p className="text-gray-600">{t('viewAllPersons')}</p>
        </Link>
        <Link href="/animals" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">{t('animals')}</h2>
          <p className="text-gray-600">{t('viewAllAnimals')}</p>
        </Link>
      </section>
      <section aria-label="Statistics">
        <h2 className="text-2xl font-bold mb-6">{t('statistics')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">{t('oldestAnimal')}</h3>
            <p className="text-gray-600">
              {oldestAnimal?.name ? `${oldestAnimal.name} (${oldestAnimal.species})` : 'Aucune donnée'}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">{t('mostCommonSpecies')}</h3>
            <p className="text-gray-600">
              {mostCommonSpecies?.species ? `${mostCommonSpecies.species} (${mostCommonSpecies.count} animals)` : 'Aucune donnée'}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">{t('ownerWithMostAnimals')}</h3>
            <p className="text-gray-600">
              {ownerWithMostAnimals?.owner ? `${ownerWithMostAnimals.owner} (${ownerWithMostAnimals.count} animals)` : 'Aucune donnée'}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">{t('ownerWithMostCats')}</h3>
            <p className="text-gray-600">
              {ownerWithMostCats?.owner ? `${ownerWithMostCats.owner} (${ownerWithMostCats.count} cats)` : 'Aucune donnée'}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">{t('heaviestAnimal')}</h3>
            <p className="text-gray-600">
              {heaviestAnimal?.animal ? `${heaviestAnimal.animal} (${heaviestAnimal.weight}g)` : 'Aucune donnée'}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">{t('ownerWithHeaviestGroup')}</h3>
            <p className="text-gray-600">
              {ownerWithHeaviestGroup?.owner ? `${ownerWithHeaviestGroup.owner} (${ownerWithHeaviestGroup.totalWeight}g total)` : 'Aucune donnée'}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 