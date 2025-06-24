import Navbar from "../components/Navbar";
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

export const metadata = {
  title: 'Artistly',
  description: 'Performing Artist Booking Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
