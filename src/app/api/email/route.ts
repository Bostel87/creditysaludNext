'use server'
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import  { NotionMagicLinkEmail } from '@/emails/solicitud'
import { NotionMagicLinkEmailP } from '@/emails/solicitud-prestamo';
import prisma from '@/lib/prisma';
// import { stat } from 'fs';
// import ResetPassword from '@/emails/ResetPassword';
const resend = new Resend(process.env.RESEND_API_KEY);
// const resend = new Resend("re_7PGPwg2Z_6VUz8rEqbL4UrgU9CCxvHa3n");
// RESEND_API_KEY=re_7PGPwg2Z_6VUz8rEqbL4UrgU9CCxvHa3n

export async function GET(){
    return NextResponse.json({
        hello: "World",
        // dir : resend.apiKeys.list()
    },
    {
        status:200,
    })
}
export async function POST (req: Request) {
    const {nombres, apellidos, cedula, email, procedimiento, monto, celular, ciudad} = await req.json();
     console.log(nombres, apellidos, cedula, email, procedimiento, monto, celular, ciudad);
    
    try {
            await resend.emails.send({
            from: 'Info <no-reply@creditysalud.com>',
            to: 'info@creditysalud.com',
            subject: 'Solicitud de Crédito',
            react: NotionMagicLinkEmail({
               nombres: nombres,
               apellidos: apellidos,
               cedula: cedula,
               email: email,
               procedimiento: procedimiento,
               monto: monto,
               celular: celular,
               ciudad: ciudad 
            }),
          });
    
          return NextResponse.json({status: 'ok'}, {status: 200});
    } catch (error) {
        console.log(error);
        
    }
    
}

export async function PUT (req: Request) {
    const {nombres, apellidos, cedula, email, fechaNacimiento, direccion, tipoVivienda, tiempoHabVivienda, procedimiento, celular, ciudad, lugarTrabajo, cargo, ingMensual, tiempoTrabajo, tipoEmpresa, sectorProductivo, localidadCiudad, dirEmpresa, refUbicacion, telfEmpresa, otroIngr, nomRef, apeRef, parentezco, telfRef} = await req.json();
     console.log(nombres, apellidos, cedula, email, fechaNacimiento, direccion, tipoVivienda, tiempoHabVivienda, procedimiento, celular, ciudad, lugarTrabajo, cargo, ingMensual, tiempoTrabajo, tipoEmpresa, sectorProductivo, localidadCiudad, dirEmpresa, refUbicacion, telfEmpresa, otroIngr, nomRef, apeRef, parentezco, telfRef);
    
    try {
            await resend.emails.send({
            from: 'Info <no-reply@creditysalud.com>',
            to: 'osmarypdg@gmail.com',
            subject: 'Formulario de Analisis de Credito',
            react: NotionMagicLinkEmailP({
              nombres: nombres,
              apellidos: apellidos,
              cedula: cedula,
              email: email,
              fechaNacimiento: fechaNacimiento,
              direccion: direccion,
              tipoVivienda: tipoVivienda,
              tiempoHabVivienda: tiempoHabVivienda,
              procedimiento: procedimiento,
              celular: celular,
              ciudad: ciudad,
              lugarTrabajo: lugarTrabajo,
              cargo: cargo,
              ingMensual: ingMensual,
              tiempoTrabajo: tiempoTrabajo,
              tipoEmpresa: tipoEmpresa,
              sectorProductivo: sectorProductivo, 
              localidadCiudad: localidadCiudad,
              dirEmpresa: dirEmpresa,
              refUbicacion: refUbicacion,
              telfEmpresa: telfEmpresa,
              otroIngr: otroIngr,
              nomRef: nomRef,
              apeRef: apeRef,
              parentezco: parentezco,
              telfRef: telfRef  
            }),
          });
    
          return NextResponse.json({status: 'ok'}, {status: 200});
    } catch (error) {
        console.log(error);
        
    }
    
}

// export async function PUT (req: Request) {
//     const {loginCode} = await req.json();
//     // console.log(name,lastName,addres, addres2,city,country,postalCode,phone);
    
//     try {
//             await resend.emails.send({
//             from: 'Info <no-reply@zafiro-shop.com>',
//             to: 'boris_parales@hotmail.com',
//             subject: 'Nueva Contraseña',
//             react: ResetPassword({
//                 loginCode
//             }),
//           });
    
//           return NextResponse.json({status: 'ok'}, {status: 200});
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }