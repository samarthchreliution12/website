import type { Metadata } from 'next';
import '@/styles/globals.css';
import Analytics from '@/components/Analytics/Analytics';

export const metadata: Metadata = {
  title: 'Reliution — Enterprise Digital Transformation Partner & ERP Consulting',
  description: 'Enterprise Odoo Development, ERP, AI Solutions, Cloud Infrastructure, and Custom Software Services.',
  icons: {
    icon: '/images/logo/favicon.png',
    apple: '/images/logo/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#CFD0CD] text-[#1F1F1F] antialiased selection:bg-[#55443A] selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
