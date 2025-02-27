import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero () {
    return (
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
            <div
                aria-hidden="true"
                className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            />
            <div className="mx-auto max-w-7xl px-6 py-2 sm:py-2 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
                    Consulta tu cuota mensual
                    </h1>
                    <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                        <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                        Paga tu cirugía en mensualidades sin trámites complicados ni trajeta de crédito 
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link
                                href="/solicitud"
                                className="rounded-md bg-[#111827] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#e84e15] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Solicitud de Crédito Online
                            </Link>
                            {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a> */}
                        </div>
                    </div>
                    <Image
                        alt="Sponsor"
                        src="/Sponsor.jpg"
                        width={50}
                        height={50}
                        className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-fit sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                    />
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
    )
}
