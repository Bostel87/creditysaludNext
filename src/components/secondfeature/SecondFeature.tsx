'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const frequencies: { value: 'manga' | 'bypass'; label: string; priceSuffix: string }[] = [
  { value: 'manga', label: 'Manga', priceSuffix: '/manga' },
  { value: 'bypass', label: 'Bypass', priceSuffix: '/bypass' },
]
const tiers = [
  {
    name: '6 Meses',
    id: 'tier-hobby',
    href: '/solicitud',
    price: { monthly: '$750', annually: '$1k' },
    description: 'Pago mensual Aprox.',
    features: ['Consulta de cortesía', 'Todos los gastos de clínica', 'Noches de hospitalización, medicinas dentro de la clínica','Honorarios médicos, enfermeria'],
    mostPopular: true,
  },
  {
    name: '12 Meses',
    id: 'tier-freelancer',
    href: '/solicitud',
    price: { monthly: '$413', annually: '$550' },
    description: 'Pago mensual Aprox.',
    features: ['Consulta de cortesía', 'Todos los gastos de clínica', 'Noches de hospitalización, medicinas dentro de la clínica','Honorarios médicos, enfermeria'],
    mostPopular: false,
  },
  {
    name: '15 Meses',
    id: 'tier-startup',
    href: '/solicitud',
    price: { monthly: '$336', annually: '$448' },
    description: 'Pago mensual Aprox.',
    features: ['Consulta de cortesía', 'Todos los gastos de clínica', 'Noches de hospitalización, medicinas dentro de la clínica','Honorarios médicos, enfermeria'],
    mostPopular: false,
  },
  {
    name: '18 Meses',
    id: 'tier-enterprise',
    href: '/solicitud',
    price: { monthly: '$288', annually: '$385' },
    description: 'Pago mensual Aprox.',
    features: ['Consulta de cortesía', 'Todos los gastos de clínica', 'Noches de hospitalización, medicinas dentro de la clínica','Honorarios médicos, enfermeria'],
    mostPopular: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SecondFeature() {
  const [frequency, setFrequency] = useState<{ value: 'manga' | 'bypass'; label: string; priceSuffix: string }>(frequencies[0])

  return (
    <div className="bg-white py-2 sm:py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-[#e84e15]">Mensualidades</h2>
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Las cuotas mas bajas del mercado
          </p>
        </div>
        {/* <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
          loyalty, and driving sales.
        </p> */}
        <div className="mt-16 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-gray-200"
            >
              {frequencies.map((option) => (
                <Radio
                  key={option.value}
                  value={option}
                  className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-[#e84e15] data-[checked]:text-white"
                >
                  {option.label}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-[#e84e15]' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8',
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.mostPopular ? 'text-[#e84e15]' : 'text-gray-900',
                  'text-lg/8 font-semibold',
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  {frequency.value === 'manga' ? tier.price.monthly : tier.price.annually}
                </span>
                /mensual<span className="text-sm/6 font-semibold text-gray-600">{frequency.priceSuffix}</span>
              </p>
              <Link
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-[#e84e15] text-white shadow-sm hover:bg-[#111827]'
                    : 'text-[#e84e15] ring-1 ring-inset ring-indigo-200 hover:ring-[#111827]',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                )}
              >
                Mas info...!
              </Link>
              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#e84e15]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// export default function SecondFeature() {
//     return (
//         <div className="py-24 sm:py-32 lg:pb-40">
//             <div className="mx-auto max-w-7xl px-6 lg:px-8">
//                 <div className="mx-auto max-w-2xl text-center">
//                     <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
//                         Data to enrich your online business
//                     </h1>
//                     <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
//                         Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//                         fugiat veniam occaecat.
//                     </p>
//                     <div className="mt-10 flex items-center justify-center gap-x-6">
//                         <a
//                             href="#"
//                             className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                         >
//                             Get started
//                         </a>
//                         <a href="#" className="text-sm/6 font-semibold text-gray-900">
//                             Learn more <span aria-hidden="true">→</span>
//                         </a>
//                     </div>
//                 </div>
//                 <div className="mt-16 flow-root sm:mt-24">
//                     <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
//                         <img
//                             alt="App screenshot"
//                             src="https://tailwindui.com/plus-assets/img/component-images/project-app-screenshot.png"
//                             width={2432}
//                             height={1442}
//                             className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }