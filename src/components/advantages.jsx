'use client'

import Image from 'next/image'
import LinkButton from '@/components/link-button'

export default function Advantages({ image, title, description, items }) {
    return (
        <section
            id="advantages"
            className="bg-[--white-bc] text-[--text-color] pt-8 md:pt-16 overflow-visible"
        >
            <div className="content-container">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Левая часть - Изображение */}
                    <div className="w-full md:w-1/2">
                        <div className="relative origin-top-left w-full">
                            <Image
                                src="/images/advantages.png"
                                width={600}
                                height={600}
                                alt={image.alt}
                                className="w-full h-auto object-cover"
                            />

                            {/* Мини-блок поверх изображения */}
                            <div className="absolute bottom-[-55px] right-[-10px] md:bottom-[-55px] md:right-[-40px] bg-[--white-bc] w-[120px] h-[120px] flex flex-col items-center justify-center">
                                <span className="raleway block text-5xl md:text-6xl font-bold text-[--main-color] leading-snug">
                                    20+
                                </span>
                                <p className="text-[14px] md:text-[16px] text-[--main-color] opacity-80 leading-relaxed">
                                    опыта
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Правая часть - Текстовый контент */}
                    <div className="md:ml-12 w-full md:w-1/2 flex flex-col items-start">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-[1.3] mb-8">
                            <span className="text-[--main-color]">Преимущества</span>
                            <br />
                            <span className="text-[--second-color]">нашей компании</span>
                        </h2>

                        <p className="text-[--second-color] mb-8 md:w-[75%]">{description}</p>

                        <div className="flex flex-col">
                            {items?.map(({ icon, text }, index) => (
                                <div key={index} className="flex flex-row items-center gap-4 mb-4">
                                    <Image
                                        src={typeof icon === 'string' ? icon : icon?.url}
                                        width={24}
                                        height={24}
                                        alt={typeof icon === 'string' ? 'Иконка' : icon?.alt || 'Иконка'}
                                        className="size-6"
                                    />
                                    <p className="text-[18px] md:text-[24px] text-[--second-color] font-bold">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="w-full mb-8 md:mb-0 mt-8 flex justify-center md:justify-start">
                            <LinkButton text="Оставить заявку" type={2} href="#form" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
