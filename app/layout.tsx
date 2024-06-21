import "./globals.css";
import Navbar from "../components/Navbar"
import { Footer } from "@/components";
export const metadata={
  title: "Car Showroom",
  description: "Discover the best car under your willing price",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
       <Navbar/>
        {children}</body>
        <Footer/>
    </html>
  );
}
