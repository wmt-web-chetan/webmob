import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // custom CSS variable
});

// Metadata
export const metadata = {
  title: "Web & App Development Company in US",
  description: "Web & App Development Company in US",
};

// Root layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
