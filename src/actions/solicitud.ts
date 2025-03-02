'use server'

import prisma from "@/lib/prisma";

//import prisma from "@/lib/prisma";
// import prisma from "@/lib/prisma"

interface FormInputs {
    nombres: string;
    apellidos: string;
    cedula: string;
    email: string;
    procedimiento: string;
    monto: string;
    celular: string;
    ciudad: string;
}


export const grabarSolicitud = async (FormInput: FormInputs) => {
    const data = FormInput;
    // console.log(data);

    try {
        const saveSolicitud = await prisma.solicitud.create({
            data: {
                nombres: data.nombres,
                apellidos: data.apellidos,
                cedula: parseInt(data.cedula),
                email: data.email,
                procedimiento: data.procedimiento,
                monto: data.monto,
                celular: parseInt(data.celular),
                ciudad: data.ciudad,
            }
        })

        //?Envio de Correo
        const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Access-Control-Allow-Origin", "*");
            myHeaders.append("Access-Control-Allow-Methods", "POST");
            myHeaders.append("Access-Control-Allow-Headers", "Content-Type");
            myHeaders.append('Access-Control-Allow-Credentials', "true");
    
            const raw = JSON.stringify({
                nombres: data.nombres,
                apellidos: data.apellidos,
                cedula: data.cedula,
                email: data.email,
                procedimiento: data.procedimiento,
                monto: data.monto,
                celular: data.celular,
                ciudad: data.ciudad,
            });
    
            const requestOptions: RequestInit = {
                method: "POST",
                headers: myHeaders,
                body: raw,
    
            };
    
             await fetch("https://creditysalud.com/api/email",  {
                ...requestOptions,
                cache: 'reload',
            }).then(r => r.json());

        
        return {
            ok: true,
            message: 'solicitud ingresada',
            saveSolicitud: saveSolicitud,
        }
    } catch (error) {
        throw new Error(
            "The username or password is wrong. Please check and try again."
          );

    }


}
// import prisma from "../../lib/prisma";import SolicitudPage from '../app/solicitud/page';
// import { Prisma } from '@prisma/client';
