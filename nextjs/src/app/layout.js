import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        {children}
        <footer className="fixed bottom-0 p-4 w-full">This is footer</footer>
      </body>
    </html>
  );
}
