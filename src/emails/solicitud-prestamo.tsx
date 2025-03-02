import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  
  Preview,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface NotionMagicLinkEmailProps {
  nombres: string;
  apellidos: string;
  cedula: string;
  email: string;
  fechaNacimiento: string;
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

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : '';

export const NotionMagicLinkEmailP = ({
  nombres,
  apellidos,
  cedula,
  email,
  fechaNacimiento,
  direccion,
  tipoVivienda,
  tiempoHabVivienda,
  procedimiento,
  celular,
  ciudad,
  lugarTrabajo,
  cargo,
  ingMensual,
  tiempoTrabajo,
  tipoEmpresa,
  sectorProductivo,
  localidadCiudad,
  dirEmpresa,
  refUbicacion,
  telfEmpresa,
  otroIngr,
  nomRef,
  apeRef,
  parentezco,
  telfRef,
}: NotionMagicLinkEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>Formulario de crédito</Preview>
      <Container style={container}>
        <Heading style={h1}>Formulario de crédito</Heading>
        {/* <Link
          href="https://notion.so"
          target="_blank"
          style={{
            ...link,
            display: 'block',
            marginBottom: '16px',
          }}
        >
          Click here to log in with this magic link
        </Link> */}
        <Text style={{ ...text, marginBottom: '10px' }}>
          Recibiste un formulario de crédito
        </Text>
        {/* <code style={code} className='gap-2'> */}
          Nombres: <p className='font-light text-[#e84e15]'>{nombres}</p> <br />
          Apellidos: <p className='font-light text-[#e84e15]'>{apellidos}</p> <br />
          Cédula: <p className='font-light text-[#e84e15]'>{cedula}</p> <br />
          Email: <p className='font-light text-[#e84e15]'>{email}</p> <br />
          Fecha de Nacimiento: <p className='font-light text-[#e84e15]'>{fechaNacimiento}</p> <br />
          Dirección: <p className='font-light text-[#e84e15]'>{direccion}</p> <br />
          Tipo de Vivienda: <p className='font-light text-[#e84e15]'>{tipoVivienda}</p> <br />
          Tiempo Habitando Vivienda: <p className='font-light text-[#e84e15]'>{tiempoHabVivienda}</p> <br />
          Procedimiento: <p className='font-light text-[#e84e15]'>{procedimiento}</p> <br />
          Celular: <p className='font-light text-[#e84e15]'>{celular}</p> <br />
          Ciudad: <p className='font-light text-[#e84e15]'>{ciudad}</p> <br />
          Lugar de Trabajo: <p className='font-light text-[#e84e15]'>{lugarTrabajo}</p> <br />
          Cargo: <p className='font-light text-[#e84e15]'>{cargo}</p> <br />
          Ingreso Mensual: <p className='font-light text-[#e84e15]'>{ingMensual}</p> <br />
          Tiempo de Trabajo: <p className='font-light text-[#e84e15]'>{tiempoTrabajo}</p> <br />
          Tipo de Empresa: <p className='font-light text-[#e84e15]'>{tipoEmpresa}</p> <br />
          Sector Productivo: <p className='font-light text-[#e84e15]'>{sectorProductivo}</p> <br />
          Localidad de la Ciudad: <p className='font-light text-[#e84e15]'>{localidadCiudad}</p> <br />
          Dirección de la Empresa: <p className='font-light text-[#e84e15]'>{dirEmpresa}</p> <br />
          Referencia de Ubicación: <p className='font-light text-[#e84e15]'>{refUbicacion}</p> <br />
          Teléfono de la Empresa: <p className='font-light text-[#e84e15]'>{telfEmpresa}</p> <br />
          Otros Ingresos: <p className='font-light text-[#e84e15]'>{otroIngr}</p> <br />
          Nombre de la Referencia: <p className='font-light text-[#e84e15]'>{nomRef}</p> <br />
          Apellido de la Referencia: <p className='font-light text-[#e84e15]'>{apeRef}</p> <br />
          Parentezco: <p className='font-light text-[#e84e15]'>{parentezco} </p><br />
          Teléfono de la Referencia: <p className='font-light text-[#e84e15]'>{telfRef}</p> <br />
        {/* </code> */}
        {/* <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '14px',
            marginBottom: '16px',
          }}
        >
          If you didn&apos;t try to login, you can safely ignore this email.
        </Text> */}
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '12px',
            marginBottom: '38px',
          }}
        >
          Analizar cuidadosamente la informacion
        </Text>
        {/* <Img
          src={`${baseUrl}/static/notion-logo.png`}
          width="32"
          height="32"
          alt="Notion's Logo"
        /> */}
        {/* <Text style={footer}>
          <Link
            href="https://notion.so"
            target="_blank"
            style={{ ...link, color: '#898989' }}
          >
            Notion.so
          </Link>
          , the all-in-one-workspace
          <br />
          for your notes, tasks, wikis, and databases.
        </Text> */}
      </Container>
    </Body>
  </Html>
);

// NotionMagicLinkEmail.PreviewProps = {
//   loginCode: 'sparo-ndigo-amurt-secan',
// } as NotionMagicLinkEmailProps;

export default NotionMagicLinkEmailP;

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

// const link = {
//   color: '#2754C5',
//   fontFamily:
//     "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
//   fontSize: '14px',
//   textDecoration: 'underline',
// };

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};

// const footer = {
//   color: '#898989',
//   fontFamily:
//     "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
//   fontSize: '12px',
//   lineHeight: '22px',
//   marginTop: '12px',
//   marginBottom: '24px',
// };

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
};
