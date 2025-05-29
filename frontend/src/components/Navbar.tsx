"use client";
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Pet Owners
        </Link>
        <div className="space-x-4 flex items-center">
          <Link href="/persons" className="hover:text-gray-300">
            {t('persons')}
          </Link>
          <Link href="/animals" className="hover:text-gray-300">
            {t('animals')}
          </Link>
          <button
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="ml-4 px-3 py-1 bg-gray-700 rounded hover:bg-gray-600"
            aria-label="Changer la langue"
          >
            {lang === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
} 