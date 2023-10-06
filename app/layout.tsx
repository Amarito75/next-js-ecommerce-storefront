import "./globals.css";
import type { Metadata } from "next";
import { Dela_Gothic_One } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const font = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Car Movie Store",
  description: "The world largest store to buy movie's vehicle !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="uppercase">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
