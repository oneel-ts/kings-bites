import type {Metadata} from "next";
import "./global.css";
import Header from "@/frontend/components/header-default/Header";
import Footer from "@/frontend/components/footer-default/Footer";
import {LanguageProvider} from "@/context";

export const metadata: Metadata = {
    title: "King Bites - Sabor Brasileiro nos EUA",
    description: "Experimente os mais deliciosos lanches com aquele tempero autêntico do Brasil em ambiente acolhedor nos EUA.",
    icons: {
        icon: '/assets/20250602_2151_image.png',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="theme-color" content="#FF6B00" />
        </head>
        <body className="layoutContainer">
            <LanguageProvider>
                <Header/>
                <main className="mainContent pageContainer">
                    {children}
                </main>
                <Footer/>
            </LanguageProvider>
        </body>
        </html>
    );
}