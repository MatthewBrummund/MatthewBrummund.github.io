import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Matthew Brummund",
  description: "Cloud Solutions Developer specializing in AI-enabled enterprise systems and AWS architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}