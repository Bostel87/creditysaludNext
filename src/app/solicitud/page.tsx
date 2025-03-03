import { Metadata } from "next";
import { SolicitudForm } from "./ui/SolicitudForm";

export const metadata: Metadata = {
  title: "CreditySalud",
  description: "Nuestra misión es que puedas acceder a servicios médicos de calidad en procedimientos electivos y estéticos",
  keywords: ['Manga Gástrica', 'Bypas Gástrico', 'Lipoescultura', 'Blefaroplastia', 'Papada', 'Mamoplastia de aumento', 'Rinoplastia', 'Mamoplastia de reducción', 'Liposucción', 'Abdominoplastia', 'Ritidectomía', 'Otoplastia', 'Mentoplastia', 'Gluteoplastia', 'Implantes de gluteos', 'Lifting de muslos', 'Braquioplastia' ],

};
export default function SolicitudPage() {
  return (
    <SolicitudForm/>
  );
}