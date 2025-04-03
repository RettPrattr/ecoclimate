'use client'

import Link from 'next/link'
import Image from 'next/image'

import LinkButton from '@/components/link-button'

export default function Services({ title, description, items }) {
    return (
        <section id="services" className="bg-[--second-color] text-[--text-color] pt-24 pb-12">
            <div className="content-container">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Левая часть */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        {/* Плашка "Услуги" */}
                        <div className="rounded-lg w-fit mb-6 px-4 py-2 bg-[--main-color] text-[--white-bc] text-center font-medium">
                            Услуги
                        </div>

                        {/* Заголовок */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-[1.3] mb-6">
                            {title}
                        </h2>

                        {/* Описание */}
                        <p className="opacity-85 mb-6 md:mb-12">
                            {description}
                        </p>

                        {/* Кнопка */}
                        <LinkButton text="Оставить заявку" type={4} href="#form" className='w-fit' />
                    </div>

                    {/* Правая часть - Сетка услуг */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="grid grid-cols-2 grid-rows-2 border border-white/70">
                            {items?.map(({ title, description, link }, index) => {
                                const borderClasses = [
                                    'border-r border-b',
                                    'border-b',
                                    'border-r',
                                    ''
                                ][index]

                                return (
                                    <div
                                        key={index}
                                        className={`group cursor-pointer bg-transparent hover:bg-[--main-color] transition-colors duration-300 border-white/70 text-white p-6 flex flex-col justify-between items-start ${borderClasses}`}
                                    >
                                        <div className="flex flex-col flex-grow">
                                            <h3 className="text-[24px] font-semibold mb-6">{title}</h3>
                                            <p className="text-[18px] mb-7">{description}</p>
                                        </div>

                                        <Link
                                            href=""
                                            className="flex items-center text-[18px] mt-auto"
                                        >
                                            выбрать услугу
                                            <Image
                                                src="/icons/arrow.svg"
                                                alt="Стрелка"
                                                width={8}
                                                height={8}
                                                className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}
