import { Metadata } from "next";
import { SolicitudForm } from "./ui/SolicitudForm";

export const metadata: Metadata = {
  title: "CreditySalud",
  description: "Nuestra misión es que puedas acceder a servicios médicos de calidad en procedimientos electivos y estéticos",
};
export default function SolicitudPage() {
  return (
    <SolicitudForm/>
  );
}