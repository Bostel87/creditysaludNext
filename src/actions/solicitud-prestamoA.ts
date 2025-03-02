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


export const grabarSolicutudPrestamoA = async (FormInput: FormInputs) => {
    const data = FormInput;
    // console.log(data);
    const fecha = new Date(data.fechaNacimiento);
    // console.log(fecha);
    try {
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

        //? Envio de correo
        const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Access-Control-Allow-Origin", "*");
                myHeaders.append("Access-Control-Allow-Methods", "POST");
                myHeaders.append("Access-Control-Allow-Headers", "Content-Type");
                // myHeaders.append('Access-Control-Allow-Credentials', "true");
        
                const raw = JSON.stringify({
                    nombres: data.nombres,
                    apellidos: data.apellidos,
                    cedula: data.cedula,
                    email: data.email,
                    fechaNacimiento: data.fechaNacimiento,
                    direccion: data.direccion,
                    tipoVivienda: data.tipoVivienda,
                    tiempoHabVivienda: data.tiempoHabVivienda,
                    procedimiento: data.procedimiento,
                    celular: data.celular,
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
                    telfEmpresa: data.telfEmpresa,
                    otroIngr: data.otroIngr,
                    nomRef: data.nomRef,
                    apeRef: data.apeRef,
                    parentezco: data.parentezco,
                    telfRef: data.telfRef,
                });
        
                const requestOptions: RequestInit = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
        
                };
        
                await fetch("https://creditysalud-next.vercel.app/api/emai", {
                    ...requestOptions,
                    cache: 'reload',
                }).then(r => r.json());
                // return {
                //     ok: true,
                //     message: 'solicitud de analisis de credito ingresada',
                //     // saveSolicitud: saveSolicitud,
                // }
        
        return {
            ok: true,
            message: 'solicitud de prestamo ingresada',
            saveSolicitud: saveSolicitud,
        }
    } catch (error) {
        throw new Error(
            "The username or password is wrong. Please check and try again."
          );
        
    }

    
}