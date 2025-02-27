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


export const grabarSolicutud = async (FormInput: FormInputs) => {
    const data = FormInput;
    // console.log(data);
     
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
    return {
        ok: true,
        message:'solicitud ingresada',
    }
}
// import prisma from "../../lib/prisma";import SolicitudPage from '../app/solicitud/page';
// import { Prisma } from '@prisma/client';
