import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import StoreProvider from "./provider";
import Navbar from "./components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });
const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Store",
  description: "Simple Store with redux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <StoreProvider>
          <Navbar />
          {children}
          </StoreProvider>
      </body>
    </html>
  );
}
