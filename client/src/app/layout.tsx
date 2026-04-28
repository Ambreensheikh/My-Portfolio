import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // Yahan apna Vercel link dalen taake absolute paths sahi kaam karein
  metadataBase: new URL('https://my-portfolio-orpin-one-2z7wrdiu02.vercel.app/'), 
  
  title: 'Ambreen Sheikh | AI Automation & Full-Stack Engineer',
  description: 'Specialist in AI-Automation, Event-Driven Architecture, Next.js, Node.js, and Python. Expert in OpenAI Agent SDK, n8n automation, and DevOps, AWS, PostgreSQL, MongoDB.',
  
  openGraph: {
    title: 'Ambreen Sheikh | AI Automation & Full-Stack Engineer',
    description: 'Building autonomous agents and event-driven systems.',
    url: 'https://my-portfolio-orpin-one-2z7wrdiu02.vercel.app/', // Yahan bhi link add kar dein
    siteName: 'Ambreen Portfolio',
    type: 'website',
  },
};

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