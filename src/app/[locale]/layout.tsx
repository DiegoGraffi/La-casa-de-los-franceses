import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Cart from "@/components/cart";
import AgeConfirmationModal from "@/components/AgeConfirmationModal";
import ClientOnly from "@/components/ClientOnly";

const vangeda = localFont({
  src: [
    {
      path: "../../assets/fonts/Vangeda-Regular.ttf",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Vangeda-Italic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-vangeda",
});

const bricolage = localFont({
  src: [
    {
      path: "../../assets/fonts/BricolageGrotesque[opsz,wdth,wght].ttf",
      style: "normal",
    },
  ],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "La Casa de los Franceses",
  description: "Página de La Casa de los Franceses",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${vangeda.variable} ${bricolage.variable}`}>
        {/* <NextIntlClientProvider messages={messages}>
          <Navbar />
          <Cart />
          {children}
          <Footer />
          <ClientOnly>
            <AgeConfirmationModal />
          </ClientOnly>
        </NextIntlClientProvider> */}
        <div className="w-screen h-screen bg-terciarioPrincipal flex flex-col justify-center items-center">
          <p className="text-center font-vangeda text-primarioMuyClaro text-2xl">
            Site internet en construction
          </p>
          <div className="w-[30%] border-b border-b-primarioMuyClaro py-5 mb-5"></div>
          <p className="text-center font-vangeda text-primarioMuyClaro text-2xl pt-5">
            Sitio en construcción
          </p>
        </div>
      </body>
    </html>
  );
}
