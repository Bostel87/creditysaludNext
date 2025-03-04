// export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "@/config/fonts";
import TopMenu from "@/components/ui/TopMenu";
import Footer from "@/components/footer/Footer";



export const metadata: Metadata = {
  title: "CreditySalud",
  description: "Nuestra misión es que puedas acceder a servicios médicos de calidad en procedimientos electivos y estéticos",
  keywords: ['Manga Gástrica', 'Bypas Gástrico', 'Lipoescultura', 'Blefaroplastia', 'Papada', 'Mamoplastia de aumento', 'Rinoplastia', 'Mamoplastia de reducción', 'Liposucción', 'Abdominoplastia', 'Ritidectomía', 'Otoplastia', 'Mentoplastia', 'Gluteoplastia', 'Implantes de gluteos', 'Lifting de muslos', 'Braquioplastia' ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopMenu/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
