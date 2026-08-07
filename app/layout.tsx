import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Reliution — Odoo ERP Implementation & Consulting Partner',
  description: 'Enterprise Odoo Development, ERP, CRM, Customization, and DevOps Services for worldwide productivity.',
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
    <html lang="en" className="dark">
      <body className="bg-[#08090E] text-white antialiased selection:bg-[#0D82F8] selection:text-white">
        {children}
      </body>
    </html>
  );
}
