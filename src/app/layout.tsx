import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my projects and skills.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
        {children}
      </body>
    </html>
  );
}
