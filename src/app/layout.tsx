import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components";
import { Poppins, Source_Sans_3 } from "next/font/google";

export const metadata: Metadata = {
  title: "HireQED",
  description:
    "At HireQED, we connect businesses with top talent and cutting-edge services, driving efficiency and growth through technology and innovation. Our mission is to simplify hiring and resource management, ensuring organizations achieve their goals with the right people at the right time.",
};

const poppins = Poppins({
  subsets: ["latin"], // Include the subset you need
  weight: ["400", "500", "600", "700"], // Specify the font weights you want to use
  variable: "--font-poppins", // Define a CSS variable for the font
});

const Source = Source_Sans_3({
  subsets: ["latin"], // Include the subset you need
  weight: ["400", "500", "600", "700"], // Specify the font weights you want to use
  variable: "--font-sourceSans", // Define a CSS variable for the font
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${Source.variable} font-poppins  font-sans`}
      >
        <Header />
        <div className="xl:pt-[117.6px] lg:pt-[117.6px] sm:pt-[102.39px] pt-[76.5px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
