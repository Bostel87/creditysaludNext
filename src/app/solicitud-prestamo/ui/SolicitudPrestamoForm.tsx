// import { ChevronDownIcon } from '@heroicons/react/16/solid'
'use client'
import { grabarSolicutudPrestamo } from "@/actions/solicitud-prestamo";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
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

export const SolicitudPrestamoForm = () => {

    const router = useRouter();


    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const [errorMessagge, setErrorMessagge] = useState("");
    // const { register, handleSubmit } = useForm<FormInputs>()

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        setErrorMessagge('');
        // console.log(data);
        const resp = await grabarSolicutudPrestamo(data);
        if (!resp?.ok) {
            setErrorMessagge(resp?.message || "Error al crear la solicitud de Prestamo");
            //  console.log({resp});
            return;
        }
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "*");
        myHeaders.append("Access-Control-Allow-Methods", "PUT");
        myHeaders.append("Access-Control-Allow-Headers", "Content-Type");
        myHeaders.append('Access-Control-Allow-Credentials', "true");

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
            method: "PUT",
            headers: myHeaders,
            body: raw,

        };

        await fetch("https://creditysalud.com/api/email", {
            ...requestOptions,
            cache: 'reload',
        }).then(r => r.json());
        alert('Gracias ..!! Formulario de Prestamo enviado');
        router.push('/');

    }

    // const OnlyNumbers = (e:KeyboardEvent)  => {
    //     let regex: RegExp = new RegExp(/^[0-9]{1,}$/g);
    //     let specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowRight','ArrowLeft'];
    //     if (specialKeys.indexOf(e.key) !== -1) {
    //       return;
    //     } else {
    //       if (regex.test(e.key)) {
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     }
    //     }
    // const onlyNumber = (e: AddEventListenerOptions) =>{


    // }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border-b border-white/10 pb-12 bg-white px-12 py-12">
                <h2 className="text-base/7 font-semibold text-[#111827]">● Información personal</h2>
                <p className="mt-1 text-sm/6 text-[#111827]">Llena el formulario para ingresar la solicitud de Préstamo.</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-3">
                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-[#111827]">
                            Nombres
                        </label>
                        <div className="mt-2">
                            <input
                                id="nombres"
                                // name="nombres"
                                type="text"
                                // autoComplete="given-name"
                                placeholder='Jaime Andres'
                                className={
                                    clsx(
                                        "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                        {
                                            'border-red-500': errors.nombres
                                        }
                                    )

                                }
                                // className=""
                                {...register('nombres', { required: "Nombres Requerido" })}
                            />
                        </div>
                    </div>

                    <div className="col-span-3">
                        <label htmlFor="last-name" className="block text-sm/6 font-medium text-[#111827]">
                            Apellidos
                        </label>
                        <div className="mt-2">
                            <input
                                id="apellidos"
                                // name="apellido"
                                type="text"
                                // autoComplete="family-name"
                                placeholder='Guerrero Solis'
                                className={
                                    clsx(
                                        "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                        {
                                            'border-red-500': errors.apellidos
                                        }
                                    )
                                }
                                // className="block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                {...register('apellidos', { required: "Apellidos Requerido" })}
                            />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="email" className="block text-sm/6 font-medium text-[#111827]">
                            Cedula
                        </label>
                        <div className="mt-2">
                            <input
                                id="cedula"
                                // name="cedula"
                                type="text"
                                // autoComplete="email"
                                placeholder='0924615987'
                                // pattern="^[0-9]+"
                                onKeyDown={(event) => {
                                    if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                                        // Allow: Ctrl+A
                                        (event.keyCode == 65 && event.ctrlKey === true) ||
                                        // Allow: home, end, left, right
                                        (event.keyCode >= 35 && event.keyCode <= 39)) {
                                        // let it happen, don't do anything
                                        return;
                                    }
                                    else {
                                        // Ensure that it is a number and stop the keypress
                                        if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                                            event.preventDefault();
                                        }
                                    }
                                }
                                }
                                className={
                                    clsx(
                                        "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                        {
                                            'border-red-500': errors.cedula
                                        }
                                    )
                                }
                                // className="block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                {...register('cedula', { required: "Cedula Requerido", maxLength: 13 })}
                            />
                        </div>
                    </div>

                    <div className="col-span-3">
                        <label htmlFor="email" className="block text-sm/6 font-medium text-[#111827]">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                // name="email"
                                type="email"
                                autoComplete="email"
                                placeholder='abc@gmail.com'
                                className={
                                    clsx(
                                        "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                        {
                                            'border-red-500': errors.email
                                        }
                                    )
                                }
                                // className="block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                {...register('email', { required: "Email Requerido" })}
                            />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="street-address" className="block text-sm/6 font-medium text-[#111827]">
                            Fecha de Nacimiento
                        </label>
                        <div className="mt-2">
                            <input
                                id="fechaNacimineto"
                                // name="procedimiento"
                                type="date"
                                // autoComplete="street-address"
                                className={
                                    clsx(
                                        "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                        {
                                            'border-red-500': errors.direccion
                                        }
                                    )
                                }
                                // className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#11182] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                {...register('fechaNacimiento', { required: "Direccion Requerido" })}
                            />
                        </div>
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="street-address" className="block text-sm/6 font-medium text-[#111827]">
                            Dirección
                        </label>
                        <div className="mt-2">
                            <input
                                id="direccion"
                                // name="procedimiento"
                                type="text"
                                // autoComplete="street-address"
                                className={
                                    clsx(
                                        "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                        {
                                            'border-red-500': errors.direccion
                                        }
                                    )
                                }
                                // className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#11182] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                {...register('direccion', { required: "Direccion Requerido" })}
                            />
                        </div>
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="country" className="block text-sm/6 font-medium text-[#111827]">
                            Tipo de vivienda
                        </label>
                        <div className="mt-2 grid grid-cols-1">
                            <select
                                id="tipoVivienda"

                                autoComplete="country-name"
                                {...register('tipoVivienda', { required: "Tipo de vivienda Requerido" })}
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-100 py-1.5 pl-3 pr-8 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                            >
                                <option value="">[ Seleccione ]</option>
                                <option key='P' value='Propia'>Propia</option>
                                <option key='A' value='Alquilada'>Alquilada</option>
                                <option key='F' value='ConFam'>Con Familiares</option>
                            </select>
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                            />
                        </div>
                    </div>

                    <div className="col-span-2 ">
                        <label htmlFor="city" className="inline-block text-sm/6 font-medium text-[#111827] sm:col-span-4">
                            Tiempo que habita en la vivienda
                        </label>
                        <div className="mt-2 w-80 sm:w-full">
                            <input
                                id="tiempoHabVivienda"
                                // name="monto"
                                type="text"
                                // autoComplete="address-level2"
                                className={
                                    clsx(
                                        "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                        {
                                            'border-red-500': errors.tiempoHabVivienda
                                        }
                                    )
                                }
                                placeholder="(años, meses)"
                                // className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#11182] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                {...register('tiempoHabVivienda', { required: "Tiempo que habita en la vivienda Requerido" })}
                            />
                        </div>
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="region" className="block text-sm/6 font-medium text-[#111827]">
                            Celular
                        </label>
                        <div className="mt-2 w-80 sm:w-full">
                            <input
                                id="celular"
                                // name="celular"
                                type="text"
                                onKeyDown={(event) => {
                                    if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                                        // Allow: Ctrl+A
                                        (event.keyCode == 65 && event.ctrlKey === true) ||
                                        // Allow: home, end, left, right
                                        (event.keyCode >= 35 && event.keyCode <= 39)) {
                                        // let it happen, don't do anything
                                        return;
                                    }
                                    else {
                                        // Ensure that it is a number and stop the keypress
                                        if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                                            event.preventDefault();
                                        }
                                    }
                                }
                                }
                                // autoComplete="address-level1"
                                className={
                                    clsx(
                                        "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                        {
                                            'border-red-500': errors.celular
                                        }
                                    )
                                }
                                // className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#11182] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                {...register('celular', { required: "Celular Requerido" })}
                            />
                        </div>
                    </div>

                    <div className="col-span-2 w-80 sm:w-full">
                        <label htmlFor="postal-code" className="block text-sm/6 font-medium text-[#111827]">
                            Ciudad
                        </label>
                        <div className="mt-2">
                            <input
                                id="ciudad"
                                // name="ciudad"
                                type="text"
                                // autoComplete="postal-code"
                                className={
                                    clsx(
                                        "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                        {
                                            'border-red-500': errors.ciudad
                                        }
                                    )
                                }
                                // className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#11182] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                {...register('ciudad', { required: "Ciudad Requerido" })}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-full col-span-2">
                        <label htmlFor="street-address" className="block text-sm/6 font-medium text-[#111827]">
                            Procedimiento de Cirugía
                        </label>
                        <div className="mt-2 w-80 sm:w-full">
                            <input
                                id="procedimiento"
                                // name="procedimiento"
                                type="text"
                                // autoComplete="street-address"
                                className={
                                    clsx(
                                        "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                        {
                                            'border-red-500': errors.procedimiento
                                        }
                                    )
                                }
                                // className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#11182] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                {...register('procedimiento', { required: "Procedimiento Requerido" })}
                            />
                        </div>
                    </div>
                </div>
                <div className="border-b border-white/10 pb-12 bg-white  py-12">
                    <h2 className="text-base/7 font-semibold text-[#111827]">● Actividad y fuentes de ingreso</h2>
                    {/* <p className="mt-1 text-sm/6 text-[#111827]">Llena el formulario para ingresar la solicitud de Préstamo.</p> */}

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-3">
                            <label htmlFor="first-name" className="block text-sm/6 font-medium text-[#111827]">
                                Lugar de trabajo
                            </label>
                            <div className="mt-2">
                                <input
                                    id="lugarTrabajo"
                                    // name="nombres"
                                    type="text"
                                    // autoComplete="given-name"
                                    placeholder='Av. Leon Febres cordero'
                                    className={
                                        clsx(
                                            "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                            {
                                                'border-red-500': errors.lugarTrabajo
                                            }
                                        )

                                    }
                                    // className=""
                                    {...register('lugarTrabajo', { required: "Lugar de trabajo Requerido" })}
                                />
                            </div>
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="last-name" className="block text-sm/6 font-medium text-[#111827]">
                                Cargo
                            </label>
                            <div className="mt-2">
                                <input
                                    id="cargo"
                                    // name="apellido"
                                    type="text"
                                    // autoComplete="family-name"
                                    placeholder='Abogado'
                                    className={
                                        clsx(
                                            "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                            {
                                                'border-red-500': errors.cargo
                                            }
                                        )
                                    }
                                    // className="block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                    {...register('cargo', { required: "Cargo Requerido" })}
                                />
                            </div>
                        </div>
                        <div className="col-span-3">
                            <label htmlFor="Ingreso" className="block text-sm/6 font-medium text-[#111827]">
                                Ingreso mensual
                            </label>
                            <div className="mt-2">
                                <input
                                    id="ingMensual"
                                    // name="cedula"
                                    type="text"
                                    onKeyDown={(event) => {
                                        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                                            // Allow: Ctrl+A
                                            (event.keyCode == 65 && event.ctrlKey === true) ||
                                            // Allow: home, end, left, right
                                            (event.keyCode >= 35 && event.keyCode <= 39)) {
                                            // let it happen, don't do anything
                                            return;
                                        }
                                        else {
                                            // Ensure that it is a number and stop the keypress
                                            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                                                event.preventDefault();
                                            }
                                        }
                                    }
                                    }
                                    // autoComplete="email"
                                    placeholder='2000'
                                    className={
                                        clsx(
                                            "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                            {
                                                'border-red-500': errors.ingMensual
                                            }
                                        )
                                    }
                                    // className="block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                    {...register('ingMensual', { required: "Ingreso mensual Requerido" })}
                                />
                            </div>
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="Tiempo" className="block text-sm/6 font-medium text-[#111827]">
                                Tiempo de trabajo, años, meses
                            </label>
                            <div className="mt-2">
                                <input
                                    id="tiempoTrabajo"
                                    // name="email"
                                    type="texto"
                                    // autoComplete="3 Años"
                                    placeholder='3 Años'
                                    className={
                                        clsx(
                                            "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                            {
                                                'border-red-500': errors.tiempoTrabajo
                                            }
                                        )
                                    }
                                    // className="block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                    {...register('tiempoTrabajo', { required: "Tiempo de trabajo Requerido" })}
                                />
                            </div>
                        </div>
                        <div className="col-span-3">
                            <label htmlFor="street-address" className="block text-sm/6 font-medium text-[#111827]">
                                Tipo de Empresa
                            </label>
                            <div className="mt-2">
                                <input
                                    id="tipoEmpresa"
                                    // name="procedimiento"
                                    type="text"
                                    placeholder="Agricola"
                                    // autoComplete="street-address"
                                    className={
                                        clsx(
                                            "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                            {
                                                'border-red-500': errors.tipoEmpresa
                                            }
                                        )
                                    }
                                    // className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#11182] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                    {...register('tipoEmpresa', { required: "Tipo de Empresa Requerido" })}
                                />
                            </div>
                        </div>
                        <div className="col-span-3">
                            <label htmlFor="street-address" className="block text-sm/6 font-medium text-[#111827]">
                                Sector productivo
                            </label>
                            <div className="mt-2">
                                <input
                                    id="sectorProductivo"
                                    // name="procedimiento"
                                    type="text"
                                    placeholder="Bananero"
                                    // autoComplete="street-address"
                                    className={
                                        clsx(
                                            "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                            {
                                                'border-red-500': errors.sectorProductivo
                                            }
                                        )
                                    }
                                    // className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#11182] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                    {...register('sectorProductivo', { required: "Sector productivo Requerido" })}
                                />
                            </div>
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="country" className="block text-sm/6 font-medium text-[#111827]">
                                Sector/ Localidad/ Ciudad
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <input
                                    id="localidadCiudad"
                                    // name="procedimiento"
                                    type="text"
                                    placeholder="Sabanilla"
                                    // autoComplete="street-address"
                                    className={
                                        clsx(
                                            "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                            {
                                                'border-red-500': errors.localidadCiudad
                                            }
                                        )
                                    }
                                    // className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#11182] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                    {...register('localidadCiudad', { required: "Localidad Requerido" })}
                                />
                            </div>
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="first-name" className="block text-sm/6 font-medium text-[#111827] ">
                                Dirección de la empresa
                            </label>
                            <div className="mt-2">
                                <input
                                    id="dirEmpresa"
                                    // name="nombres"
                                    type="text"
                                    // autoComplete="given-name"
                                    placeholder='Av. Quito 635 y Boyaca'
                                    className={
                                        clsx(
                                            "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                            {
                                                'border-red-500': errors.dirEmpresa
                                            }
                                        )

                                    }
                                    // className=""
                                    {...register('dirEmpresa', { required: "Dirección de la empresa Requerido" })}
                                />
                            </div>
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="first-name" className="block text-sm/6 font-medium text-[#111827] ">
                                Referencia de ubicación
                            </label>
                            <div className="mt-2">
                                <input
                                    id="refUbicacion"
                                    // name="nombres"
                                    type="text"
                                    // autoComplete="given-name"
                                    placeholder='Alado de la notaria #53'
                                    className={
                                        clsx(
                                            "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                            {
                                                'border-red-500': errors.refUbicacion
                                            }
                                        )

                                    }
                                    // className=""
                                    {...register('refUbicacion', { required: "Referencia de ubicación Requerido" })}
                                />
                            </div>
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="first-name" className="block text-sm/6 font-medium text-[#111827]">
                                Teléfono de la empresa
                            </label>
                            <div className="mt-2">
                                <input
                                    id="telfEmpresa"
                                    // name="nombres"
                                    type="text"
                                    onKeyDown={(event) => {
                                        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                                            // Allow: Ctrl+A
                                            (event.keyCode == 65 && event.ctrlKey === true) ||
                                            // Allow: home, end, left, right
                                            (event.keyCode >= 35 && event.keyCode <= 39)) {
                                            // let it happen, don't do anything
                                            return;
                                        }
                                        else {
                                            // Ensure that it is a number and stop the keypress
                                            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                                                event.preventDefault();
                                            }
                                        }
                                    }
                                    }
                                    // autoComplete="given-name"
                                    placeholder='042-967-345'
                                    className={
                                        clsx(
                                            "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                            {
                                                'border-red-500': errors.telfEmpresa
                                            }
                                        )

                                    }
                                    // className=""
                                    {...register('telfEmpresa', { required: "Teléfono de la empresa Requerido" })}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-full col-span-2">
                            <label htmlFor="street-address" className="block text-sm/6 font-medium text-[#111827]">
                                Otros ingresos
                            </label>
                            <div className="mt-2 w-80 sm:w-full">
                                <input
                                    id="otroIngr"
                                    // name="procedimiento"
                                    type="text"
                                    placeholder="$800 ventas informales"
                                    // autoComplete="street-address"
                                    className={
                                        clsx(
                                            "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                            {
                                                'border-red-500': errors.otroIngr
                                            }
                                        )
                                    }
                                    // className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#11182] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                    {...register('otroIngr', { required: "Otros ingresos Requerido" })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b border-white/10 pb-12 bg-white  py-2">
                    <h2 className="text-base/7 font-semibold text-[#111827]">● Referencias personales</h2>
                    {/* <p className="mt-1 text-sm/6 text-[#111827]">Llena el formulario para ingresar la solicitud de Préstamo.</p> */}

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-3">
                            <label htmlFor="first-name" className="block text-sm/6 font-medium text-[#111827]">
                                Nombres Completos
                            </label>
                            <div className="mt-2">
                                <input
                                    id="nomRef"
                                    // name="nombres"
                                    type="text"
                                    // autoComplete="given-name"
                                    placeholder='Andres Alberto'
                                    className={
                                        clsx(
                                            "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                            {
                                                'border-red-500': errors.nomRef
                                            }
                                        )

                                    }
                                    // className=""
                                    {...register('nomRef', { required: "Nombres Requerido" })}
                                />
                            </div>
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="last-name" className="block text-sm/6 font-medium text-[#111827]">
                                Apellidos Completos
                            </label>
                            <div className="mt-2">
                                <input
                                    id="apeRef"
                                    // name="apellido"
                                    type="text"
                                    // autoComplete="family-name"
                                    placeholder='Solis Intriago'
                                    className={
                                        clsx(
                                            "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                            {
                                                'border-red-500': errors.apeRef
                                            }
                                        )
                                    }
                                    // className="block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                    {...register('apeRef', { required: "Apellidos Requerido" })}
                                />
                            </div>
                        </div>
                        <div className="col-span-3">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-[#111827]">
                                Parentezco
                            </label>
                            <div className="mt-2">
                                <input
                                    id="parentezco"
                                    // name="cedula"
                                    type="text"
                                    // autoComplete="email"
                                    placeholder='Hermano'
                                    className={
                                        clsx(
                                            "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                            {
                                                'border-red-500': errors.parentezco
                                            }
                                        )
                                    }
                                    // className="block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                    {...register('parentezco', { required: "Parentezco Requerido" })}
                                />
                            </div>
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-[#111827]">
                                Telefono
                            </label>
                            <div className="mt-2">
                                <input
                                    id="telfRef"
                                    // name="email"
                                    type="text"
                                    onKeyDown={(event) => {
                                        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                                            // Allow: Ctrl+A
                                            (event.keyCode == 65 && event.ctrlKey === true) ||
                                            // Allow: home, end, left, right
                                            (event.keyCode >= 35 && event.keyCode <= 39)) {
                                            // let it happen, don't do anything
                                            return;
                                        }
                                        else {
                                            // Ensure that it is a number and stop the keypress
                                            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                                                event.preventDefault();
                                            }
                                        }
                                    }
                                    }
                                    // autoComplete="email"
                                    placeholder='0954657788'
                                    className={
                                        clsx(
                                            "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                            {
                                                'border-red-500': errors.telfRef
                                            }
                                        )
                                    }
                                    // className="block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                    {...register('telfRef', { required: "Telefono Requerido" })}
                                />
                            </div>
                        </div>
                    </div>


                </div>
                <span className="text-red-500">{errorMessagge}</span>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm/6 font-semibold text-[#111827] hover:text-[#e84e15]">
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-[#111827] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#e84e15] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e84e15]"
                    >
                        Enviar
                    </button>
                </div>
            </div>

        </form>
    )
}
