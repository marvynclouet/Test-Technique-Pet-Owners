import Providers from '../components/Providers';
import Navbar from '../components/Navbar';
import './globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';

export const metadata = {
  title: 'Pet Owners',
  description: 'Manage your pets and their owners',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <LanguageProvider>
          <Providers>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <div className="flex-grow">
                {children}
              </div>
            </div>
          </Providers>
        </LanguageProvider>
      </body>
    </html>
  );
} 