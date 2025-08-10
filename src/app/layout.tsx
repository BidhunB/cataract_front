"use client";

import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme-context";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Theme Provider wraps all pages */}
        <ThemeProvider>
          {/* Navbar on top */}
          <Navbar />

          {/* Main page content */}
          <main className="flex-grow">{children}</main>

          {/* Footer at bottom */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
