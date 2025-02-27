'use server'

import prisma from "@/lib/prisma";

//import prisma from "@/lib/prisma";
// import prisma from "@/lib/prisma"

interface FormInputs {
    nombres: string;
    apellidos: string;
    cedula: string;
    email: string;
    fechaNacimiento: Date;
    direccion: string;
    tipoVivienda: string;
    tiempoHabVivienda: string;
    procedimiento: string;
    celular: string;
    ciudad: string;
    lugarTrabajo: string;
    cargo: string;
    ingMensual: string;
    tiempoTrabajo: string;
    tipoEmpresa: string;
    sectorProductivo: string;
    localidadCiudad: string;
    dirEmpresa: string;
    refUbicacion: string;
    telfEmpresa: string;
    otroIngr: string;
    nomRef: string;
    apeRef: string;
    parentezco: string;
    telfRef: string;
}


export const grabarSolicutudPrestamo = async (FormInput: FormInputs) => {
    const data = FormInput;
    // console.log(data);
    const fecha = new Date(data.fechaNacimiento);
    // console.log(fecha);

    const saveSolicitud = await prisma.solicitudPrestamo.create({
        data: {
            nombres: data.nombres,
            apellidos: data.apellidos,
            cedula: parseInt(data.cedula),
            email: data.email,
            fechaNacimiento: fecha,
            direccion: data.direccion,
            tipoVivienda: data.tipoVivienda,
            tiempoHabVivienda: data.tiempoHabVivienda,
            procedimiento: data.procedimiento,
            celular: parseInt(data.celular),
            ciudad: data.ciudad,
            lugarTrabajo: data.lugarTrabajo,
            cargo: data.cargo,
            ingMensual: data.ingMensual,
            tiempoTrabajo: data.tiempoTrabajo,
            tipoEmpresa: data.tipoEmpresa,
            sectorProductivo: data.sectorProductivo,
            localidadCiudad: data.localidadCiudad,
            dirEmpresa: data.dirEmpresa,
            refUbicacion: data.refUbicacion,
            telfEmpresa: parseInt(data.telfEmpresa),
            otroIngr: data.otroIngr,
            nomRef: data.nomRef,
            apeRef: data.apeRef,
            parentezco: data.parentezco,
            telfRef: parseInt(data.telfRef),
        }
    })
    return {
        ok: true,
        message: 'solicitud de prestamo ingresada',
        saveSolicitud: saveSolicitud,
    }
}