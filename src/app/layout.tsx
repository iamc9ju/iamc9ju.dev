import type { Metadata } from "next";
import { Anuphan } from "next/font/google";
import AnimatedBackground from "@/components/AnimatedBackground";
import "./globals.css";

const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});




export const metadata: Metadata = {
  title: "Nattapong | Full-stack Developer",
  description: "Portfolio of Nattapong, a professional Full-stack Developer building powerful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${anuphan.variable} h-full antialiased`}
    >
      <body className={`${anuphan.className} min-h-full flex flex-col`}>
        <AnimatedBackground />
        {children}
      </body>
    </html>



  );
}
