import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Reliution — Enterprise Digital Transformation Partner & ERP Consulting',
  description: 'Enterprise Odoo Development, ERP, AI Solutions, Cloud Infrastructure, and Custom Software Services.',
  icons: {
    icon: 'https://www.reliution.com/wp-content/uploads/2025/05/cropped-Reliution-2-1-e1748350560620-192x192.png',
    apple: 'https://www.reliution.com/wp-content/uploads/2025/05/cropped-Reliution-2-1-e1748350560620-180x180.png',
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
      </body>
    </html>
  );
}
