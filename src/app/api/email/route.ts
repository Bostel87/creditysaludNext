'use server'
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import  { NotionMagicLinkEmail } from '@/emails/solicitud'
import { stat } from 'fs';
// import ResetPassword from '@/emails/ResetPassword';
const resend = new Resend(process.env.RESEND_API_KEY);


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
            to: 'info@creditysalud.com.com',
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