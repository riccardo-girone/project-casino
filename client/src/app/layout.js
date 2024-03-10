import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project casino",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <Nav/>
      </body>
    </html>
  );
}
