// import { ChevronDownIcon } from '@heroicons/react/16/solid'
'use client'
import { grabarSolicitud } from "@/actions/solicitud";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
    nombres: string;
    apellidos: string;
    cedula: string;
    email: string;
    procedimiento: string;
    monto: string;
    celular: string;
    ciudad: string;
    // image?: FileList;
}

export const SolicitudForm = () => {

    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const [errorMessagge, setErrorMessagge] = useState("");
    const [isPlacingOrder, setIsPlacingOrder] = useState(false);
    // const { register, handleSubmit } = useForm<FormInputs>()

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        setErrorMessagge('');
        setIsPlacingOrder(true);
        // console.log(data);
        const resp = await grabarSolicitud(data);
        if (!resp?.ok) {
            setIsPlacingOrder(false);
            setErrorMessagge(resp?.message || "Error al crear la solicitud");
         console.log({resp});
            return;
        }
        // try {
        //     const myHeaders = new Headers();
        //     myHeaders.append("Content-Type", "application/json");
        //     myHeaders.append("Access-Control-Allow-Origin", "https://creditysalud.com/api/email");
        //     myHeaders.append("Access-Control-Allow-Methods", "POST");
        //     myHeaders.append("Access-Control-Allow-Headers", "Content-Type");
        //     myHeaders.append('Access-Control-Allow-Credentials', "true");
    
        //     const raw = JSON.stringify({
        //         nombres: data.nombres,
        //         apellidos: data.apellidos,
        //         cedula: data.cedula,
        //         email: data.email,
        //         procedimiento: data.procedimiento,
        //         monto: data.monto,
        //         celular: data.celular,
        //         ciudad: data.ciudad,
        //     });
    
        //     const requestOptions: RequestInit = {
        //         method: "POST",
        //         headers: myHeaders,
        //         body: raw,
    
        //     };
    
        //      await fetch("https://creditysalud.com/api/email",  {
        //         ...requestOptions,
        //         cache: 'reload',
        //     }).then(r => r.json());
        //     // .then((response) => response.text())
        //     // .then((result) => console.log(result))
        //     // .catch((error) => console.error(error));
    
        //     console.log('Email enviado');
    
    
        //     } catch (error) {
        //         console.log(error);
    
        //     }
        
        alert('Gracias ..!! Solicitud de Prestamo ingresada');
            router.push('/');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border-b border-white/10 pb-12 bg-white px-12 py-12">
                <h2 className="text-base/7 font-semibold text-[#111827]">Información personal</h2>
                <p className="mt-1 text-sm/6 text-[#111827]">Llena el formulario para ingresar la solicitud de crédito.</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
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
                                            'border-red-500': errors.nombres?.message
                                        }
                                    )

                                }
                                // className=""
                                {...register('nombres', { required: "Nombres Requerido" })}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
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
                    <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm/6 font-medium text-[#111827]">
                            Cedula
                        </label>
                        <div className="mt-2">
                            <input
                                id="cedula"
                                // name="cedula"
                                type="text"
                                autoComplete="email"
                                placeholder='0924615987'
                                onKeyDown={(event) => {
                                    if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                                        // Allow: Ctrl+A
                                       (event.keyCode == 65 && event.ctrlKey === true) ||
                                        // Allow: home, end, left, right
                                       (event.keyCode >= 35 && event.keyCode <= 39)) {
                                            // let it happen, don't do anything
                                            return;
                                   }
                                   else {
                                       // Ensure that it is a number and stop the keypress
                                       if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
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
                                {...register('cedula', { required: "Cedula Requerido" })}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
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



                    {/* <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm/6 font-medium text-[#111827]">
                            Pais
                        </label>
                        <div className="mt-2 grid grid-cols-1">
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-100 py-1.5 pl-3 pr-8 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                            />
                        </div>
                    </div> */}

                    <div className="col-span-full">
                        <label htmlFor="street-address" className="block text-sm/6 font-medium text-[#111827]">
                            Que procedimiento se desea realizar
                        </label>
                        <div className="mt-2">
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

                    <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="city" className="block text-sm/6 font-medium text-[#111827]">
                            Monto a financiar
                        </label>
                        <div className="mt-2">
                            <input
                                id="monto"
                                // name="monto"
                                type="text"
                                onKeyDown={(event) => {
                                    if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                                        // Allow: Ctrl+A
                                       (event.keyCode == 65 && event.ctrlKey === true) ||
                                        // Allow: home, end, left, right
                                       (event.keyCode >= 35 && event.keyCode <= 39)) {
                                            // let it happen, don't do anything
                                            return;
                                   }
                                   else {
                                       // Ensure that it is a number and stop the keypress
                                       if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                                           event.preventDefault();
                                       }
                                   }
                                    }
                                }
                                // autoComplete="address-level2"
                                className={
                                    clsx(
                                        "block w-full font-light rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#111827] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#111827] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6",
                                        {
                                            'border-red-500': errors.monto
                                        }
                                    )
                                }
                                // className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-[#11182] outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#e84e15] sm:text-sm/6"
                                {...register('monto', { required: "Monto Requerido" })}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="region" className="block text-sm/6 font-medium text-[#111827]">
                            Celular
                        </label>
                        <div className="mt-2">
                            <input
                                id="celular"
                                // name="celular"
                                type="text"
                                onKeyDown={(event) => {
                                    if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                                        // Allow: Ctrl+A
                                       (event.keyCode == 65 && event.ctrlKey === true) ||
                                        // Allow: home, end, left, right
                                       (event.keyCode >= 35 && event.keyCode <= 39)) {
                                            // let it happen, don't do anything
                                            return;
                                   }
                                   else {
                                       // Ensure that it is a number and stop the keypress
                                       if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
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

                    <div className="sm:col-span-2">
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
                </div>
                <span className="text-red-500">{errorMessagge}</span>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm/6 font-semibold text-[#111827] hover:text-[#e84e15]">
                        Cancelar
                    </button>
                    <button
                        disabled={isPlacingOrder}
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
