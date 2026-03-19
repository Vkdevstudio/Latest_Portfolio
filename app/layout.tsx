import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Vinod Kumar | Portfolio',
  verification:{
    google:process.env.GOOGLE_SITE_VERIFICATION
  },
  description: 'Architecting systems that scale 100x. Tech lead and database optimization expert.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning className="bg-black text-white font-sans selection:bg-emerald-500/30">
        {children}
      </body>
    </html>
  );
}
