"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'en' | 'fr';

const translations = {
  en: {
    persons: 'Persons',
    animals: 'Animals',
    welcome: 'Welcome to Pet Owners',
    viewAllPersons: 'View all persons and their pets',
    viewAllAnimals: 'View all animals and their owners',
    statistics: 'Statistics',
    oldestAnimal: 'Oldest Animal',
    mostCommonSpecies: 'Most Common Species',
    ownerWithMostAnimals: 'Owner with Most Animals',
    ownerWithMostCats: 'Owner with Most Cats',
    heaviestAnimal: 'Heaviest Animal',
    ownerWithHeaviestGroup: 'Owner with Heaviest Group',
    loading: 'Loading...',
    errorLoading: 'Error loading',
  },
  fr: {
    persons: 'Personnes',
    animals: 'Animaux',
    welcome: 'Bienvenue sur Pet Owners',
    viewAllPersons: 'Voir toutes les personnes et leurs animaux',
    viewAllAnimals: 'Voir tous les animaux et leurs propriétaires',
    statistics: 'Statistiques',
    oldestAnimal: "L'animal le plus âgé",
    mostCommonSpecies: 'Espèce la plus courante',
    ownerWithMostAnimals: "Propriétaire avec le plus d'animaux",
    ownerWithMostCats: "Propriétaire avec le plus de chats",
    heaviestAnimal: "L'animal le plus lourd",
    ownerWithHeaviestGroup: "Propriétaire avec le groupe le plus lourd",
    loading: 'Chargement...',
    errorLoading: 'Erreur de chargement',
  }
};

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: keyof typeof translations['en']) => string;
}>({
  lang: 'en',
  setLang: () => {},
  t: (key) => translations.en[key],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const t = (key: keyof typeof translations['en']) => translations[lang][key] || key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
} 