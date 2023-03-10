import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Container } from '@/components/Container';
import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'The Barbados Digital ID Card - Trusted Identity',
  description:
    'Find all the information you&apos;ll need regarding the Barbados digital Identity Card.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <div>
          <Header />
          <main className="pt-[var(--navigation-height)]">{children}</main>
          <Container>
            <Footer />
          </Container>
        </div>
      </body>
    </html>
  );
}
