'use client'

import Link from 'next/link'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function Contacts({ className, ...props }) {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <section id='contacts' className='py-[--padding-pc] bg-[--background-color]'>
            <div className='content-container flex flex-col md:flex-row'>
                {/* Левая часть: Контакты */}
                <div className='mb-6 flex w-full flex-col md:mb-0 md:mr-12 md:w-7/12'>
                    <h2 className='text-2xl font-semibold mb-6 md:text-3xl'>
                        Свяжитесь с нами
                    </h2>
                    <div className='flex flex-col gap-4'>
                        {/* Телефон */}
                        <div className='flex flex-col'>
                            <span className='text-base opacity-50 md:text-lg'>Телефон</span>
                            <a
                                className='text-xl text-green-500 xs:text-2xl md:text-3xl'
                                href='tel:+79602811414'>  
                                +7 (960) 281-14-14
                            </a>
                        </div>

                        {/* Почта */}
                        <div className='flex flex-col'>
                            <span className='text-base opacity-50 md:text-lg'>Почта</span>
                            <a
                                className='text-xl xs:text-2xl md:text-3xl'
                                href='mailto:info@reinspace.ru'>
                                info@reinspace.ru
                            </a>
                        </div>

                        {/* Адрес */}
                        <div className='flex flex-col'>
                            <span className='text-base opacity-50 md:text-lg'>Адрес</span>
                            <p className='text-xl xs:text-2xl md:text-3xl'>
                                199048, Россия, Санкт-Петербург, <br />
                                6-я линия Васильевского острова, д. 61 <br />
                                (проходная 3), офис 301
                            </p>
                        </div>
                    </div>
                </div>

                {/* Правая часть: Карта */}
                <div className='flex w-full flex-col md:w-5/12'>
                    <YMaps query={{ lang: 'ru_RU', load: 'Map,Placemark' }}>
                        <Map
                            onLoad={() => {
                                setIsLoading(true)
                            }}
                            className={`relative z-10 h-[311px] w-full ${className}`}
                            {...props}
                            defaultState={{
                                center: [59.949077, 30.272138],
                                zoom: 12
                            }}>
                            {isLoading &&
                                createPortal(
                                    <div className='absolute left-0 top-0 z-[2003] h-full w-full backdrop-grayscale' />,
                                    document.querySelector('.ymaps-2-1-79-inner-panes')
                                )}
                            <Placemark
                                options={{
                                    iconLayout: 'default#image',
                                    iconImageHref: '/icons/placemark.svg',
                                    iconImageSize: [20, 20],
                                    iconImageOffset: [0, -5]
                                }}
                                properties={{
                                    hintContent: 'Офис'
                                }}
                                modules={['geoObject.addon.hint']}
                                className='relative z-10'
                                defaultGeometry={[59.949077, 30.272138]}
                            />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </section>
    )
}