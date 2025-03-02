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
        <Heading style={h1}>Formulario de análisis de crédito</Heading>
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
          Recibiste un formulario de análisis de crédito
        </Text>
        {/* <code style={code} className='gap-2'> */}
          Nombres: {nombres} <br />
          Apellidos: {apellidos} <br />
          Cédula: {cedula} <br />
          Email: {email} <br />
          Fecha de Nacimiento: {fechaNacimiento} <br />
          Dirección: {direccion} <br />
          Tipo de Vivienda: {tipoVivienda} <br />
          Tiempo Habitando Vivienda: {tiempoHabVivienda} <br />
          Procedimiento: {procedimiento} <br />
          Celular: {celular} <br />
          Ciudad: {ciudad} <br />
          Lugar de Trabajo: {lugarTrabajo} <br />
          Cargo: {cargo} <br />
          Ingreso Mensual: {ingMensual} <br />
          Tiempo de Trabajo: {tiempoTrabajo} <br />
          Tipo de Empresa: {tipoEmpresa} <br />
          Sector Productivo: {sectorProductivo} <br />
          Localidad de la Ciudad: {localidadCiudad} <br />
          Dirección de la Empresa: {dirEmpresa} <br />
          Referencia de Ubicación: {refUbicacion} <br />
          Teléfono de la Empresa: {telfEmpresa} <br />
          Otros Ingresos: {otroIngr} <br />
          Nombre de la Referencia: {nomRef} <br />
          Apellido de la Referencia: {apeRef} <br />
          Parentezco: {parentezco} <br />
          Teléfono de la Referencia: {telfRef} <br />
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
