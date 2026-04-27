import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// 1. Metadata Object
export const metadata: Metadata = {
  title: 'Ambreen Sheikh | AI Automation & Full-Stack Engineer',
  description: 'Specialist in AI-Automation, Event-Driven Architecture, Next.js, Node.js, and Python. Expert in OpenAI Agent SDK, n8n automation, and DevOps,AWS,PostgreSQL, MongoDB. Building autonomous agents and event-driven systems.',
  openGraph: {
    title: 'Ambreen Sheikh | AI Automation & Full-Stack Engineer',
    description: 'Building autonomous agents and event-driven systems.',
    siteName: 'Ambreen Portfolio',
    type: 'website',
  },
};

// 2. The Default Export (Ye hona zaroori hai)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}