import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'C1PH3R',
  description: 'Koło Naukowe Cipher to grupa studentów AGH pasjonujących się cyberbezpieczeństwem. Zajmujemy się bezpieczeństwem sieciowym, kryptografią, testami penetracyjnymi i analizą zagrożeń.',
  keywords: ['cyberbezpieczeństwo', 'AGH', 'koło naukowe', 'security', 'pentesting', 'kryptografia', 'Kraków', 'WiET', 'kn', 'cipher', 'c1ph3r'],
  authors: [{ name: 'Koło Naukowe C1PH3R AGH' }],
  creator: 'Koło Naukowe C1PH3R AGH',
  publisher: 'Koło Naukowe C1PH3R AGH',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://cipher.agh.edu.pl/',
    siteName: 'C1PH3R',
    title: 'Koło Naukowe C1PH3R AGH',
    description: 'Koło Naukowe C1PH3R to grupa studentów AGH pasjonujących się cyberbezpieczeństwem.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Orbitron:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('min-h-screen font-body antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
