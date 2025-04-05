'use client'

import Link from 'next/link'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function Contacts({ className, ...props }) {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <section id='contacts' className='py-[--padding-pc] pb-24 bg-[--white-bc]'>
            <div className='content-container flex flex-col md:flex-row'>
                {/* Левая часть: Контакты */}
                <div className='mb-6 flex w-full flex-col md:mb-0 md:mr-12 md:w-5/12'>
                    <h2 className='text-[48px] font-bold text-[--second-color] mb-6'>
                        Контакты
                    </h2>
                    <div className='flex flex-col gap-4'>
                        {/* Телефон */}
                        <div className='flex flex-col'>
                            <span className='mb-2 text-base text-[--second-color] md:text-lg'>Телефон</span>
                            <a
                                className='w-fit hover:text-[--main-color] transiition-colors text-xl font-bold text-[--second-color] xs:text-2xl md:text-3xl'
                                href='tel:+79602811414'>
                                +7 (960) 281-14-14
                            </a>
                        </div>

                        {/* Адрес */}
                        {/* Адрес */}
                        <div className='flex flex-col'>
                            <span className='mb-2 text-base text-[--second-color] md:text-lg'>Адрес</span>
                            <a
                                className='w-fit hover:text-[--main-color] transition-colors text-xl font-bold text-[--second-color] xs:text-2xl md:text-3xl'
                                href='https://yandex.ru/maps/?ll=39.875955%2C57.599195&z=16&pt=39.875955,57.599195'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                г. Ярославль, пр-кт Фрунзе 3
                            </a>
                        </div>


                        <div className='flex flex-col'>
                            <span className='mb-2 text-base text-[--second-color] md:text-lg'>Почта</span>
                            <a
                                className='w-fit hover:text-[--main-color] transiition-colors text-xl font-bold text-[--second-color] xs:text-2xl md:text-3xl'
                                href='mailto:info@reinspace.ru'>
                                ecoclimat76@mail.ru
                            </a>
                        </div>
                    </div>
                </div>

                {/* Правая часть: Карта */}
                <div className='flex w-full flex-col md:w-7/12'>
                    <YMaps query={{ lang: 'ru_RU', load: 'Map,Placemark' }}>
                        <Map
                            onLoad={() => {
                                setIsLoading(true)
                            }}
                            className={`relative z-10 h-[370px] w-full ${className}`}
                            {...props}
                            defaultState={{
                                center: [57.599195, 39.875955],
                                zoom: 12
                            }}>
                            {isLoading &&
                                createPortal(
                                    <div className='absolute left-0 top-0 z-[2003] h-full w-full' />,
                                    document.querySelector('.ymaps-2-1-79-inner-panes')
                                )}
                            <Placemark
                                options={{
                                    iconLayout: 'default#image',
                                    iconImageHref: '/icons/placemark.svg',
                                    iconImageSize: [50, 50],
                                    iconImageOffset: [-25, -50]
                                }}
                                properties={{
                                    hintContent: 'Офис'
                                }}
                                modules={['geoObject.addon.hint']}
                                className='relative z-10'
                                defaultGeometry={[57.599195, 39.875955]}
                            />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </section>
    )
}