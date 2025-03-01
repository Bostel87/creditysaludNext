import { Metadata } from "next";
import  {SolicitudPrestamoForm}  from "./ui/SolicitudPrestamoForm";

export const metadata: Metadata = {
  title: "CreditySalud",
  description: "Nuestra misión es que puedas acceder a servicios médicos de calidad en procedimientos electivos y estéticos",
};
export default function SolicitudPage() {
  return (
    <SolicitudPrestamoForm/>
  );
}