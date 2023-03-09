import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Container } from "@/Container";
import "./globals.css";

export const metadata = {
  title: "The Barbados Digital ID Card - Trusted Identity",
  description:
    "Find all the information you&apos;ll need regarding the Barbados digital Identity Card.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Container>
          <Header />
        </Container>
        {children}
        <Container>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
