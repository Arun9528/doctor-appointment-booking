import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CheckingAuth from "@/utils/checkingAuth";

const geistOutfit = Outfit({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Website Name",
  description: "This is home page of the Website, where patients can look-up the specializes doctor of there diseases or illnesses. and book there appointment.",
};

export default async function AppointmentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Auth = await CheckingAuth();
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen ${geistOutfit} dark:bg-gray-900`}
      >
        <Header userCookie={Auth} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
