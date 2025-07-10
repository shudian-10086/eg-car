import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eggy Car - Play Free Online Racing Game | Drive the Egg Safely',
  description: 'Play Eggy Car online for free! Drive your car carefully to transport the egg safely through challenging terrain. No download required - play instantly in your browser.',
  keywords: 'Eggy Car, racing game, online game, free game, car game, physics game',
  authors: [{ name: 'Eggy Car Portal' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Eggy Car - Play Free Online Racing Game',
    description: 'Drive the egg safely with our complete guide and play instantly in your browser',
    type: 'website',
    locale: 'en_US',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}