import type { Metadata } from 'next';
import { Poppins, Inter, Dancing_Script } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-dancing',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ADN Titres-Services — La confiance à domicile',
  description:
    'Serviços domésticos confiáveis. Empresa agréée titres-services. Cuidamos do seu lar com confiança, carinho e profissionalismo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.variable} ${inter.variable} ${dancingScript.variable}`}
        style={
          {
            '--font-head': `var(--font-poppins), "Segoe UI", system-ui, sans-serif`,
            '--font-body': `var(--font-inter), "Segoe UI", system-ui, sans-serif`,
            '--font-script': `var(--font-dancing), cursive`,
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
