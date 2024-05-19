import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weblog App",
  description: "these an excellent description about nice places",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
