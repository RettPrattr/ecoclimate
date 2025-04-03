'use client'

import Image from 'next/image'
import LinkButton from '@/components/link-button'

export default function Stages({ title, description, items }) {
    return (
        <section id="stages" className="bg-[--second-color] text-[--text-color] py-16">
            <div className="content-container">
                <div className="">
                    {/* Заголовок */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-8">
                        {title}
                    </h2>

                    {/* Блок с описанием и кнопкой */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
                        <p className="w-full md:w-1/2 text-[18px] opacity-85">{description}</p>
                        <LinkButton text="Оставить заявку" type={4} href="#form" />
                    </div>

                    {/* Этапы */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {items?.map(({ title, image }, index) => (
                            <div key={index} className="flex flex-col mb-2">
                                {/* Изображение */}
                                {image && (
                                    <Image
                                        src={image.url}
                                        width={800}
                                        height={800}
                                        alt={image.alt}
                                        className="aspect-[16/11] w-full h-auto object-cover"
                                    />
                                )}

                                {/* Подпись */}
                                <p className="mt-4 text-[24px] font-medium">{title}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
