import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
