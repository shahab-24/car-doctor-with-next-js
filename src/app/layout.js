import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/Shared/NavBar";
import Footer from "@/Components/Shared/Footer";
import { Container } from "postcss";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car Reparing Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='carDoctorTheme'>
      <body className={inter.className}>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
      </body>
    </html>
  );
}
