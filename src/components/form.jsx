'use client'

import Link from 'next/link'
import formatText from '@/utils/format-text'
import LinkButton from '@/components/link-button'

export default function Form({
    title = '',
    subtitle = '',
    description = '',
    buttonText = 'Оставить заявку',
    successButtonText = 'Успешно отправлено',
    policyLink = {
        text: 'политикой конфиденциальности',
        url: '/policy'
    }
}) {
    return (
        <section id="form" className="raleway bg-[--main-color] text-[--text-color] py-16">
            <div className="content-container">
                <div className="flex flex-col">
                    {/* Подзаголовок */}
                    <h3 className="text-xl md:text-2xl font-medium text-[--text-color] mb-4">
                        {formatText(subtitle)}
                    </h3>

                    {/* Заголовок */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-[1.3] mb-6">
                        {formatText(title)}
                    </h2>

                    {/* Описание */}
                    <p className="text-[18px] text-[--text-color] mb-10">
                        {formatText(description)}
                    </p>

                    {/* Форма */}
                    <form className="w-full flex flex-col gap-6">
                        <div className="flex w-full flex-col md:flex-row items-center gap-4 md:gap-6">
                            <input
                                type="text"
                                placeholder="Имя"
                                className="w-full md:w-[42%] bg-transparent text-white border border-white px-5 py-3 rounded-full placeholder-white outline-none"
                            />
                            <input
                                type="tel"
                                placeholder="7+"
                                className="w-full md:w-[42%] bg-transparent text-white border border-white px-5 py-3 rounded-full placeholder-white outline-none"
                            />
                            <div className="w-full md:w-[16%]">
                                <LinkButton
                                    text="Отправить"
                                    type={3}
                                    className="w-full text-center py-3"
                                />
                            </div>
                        </div>

                        <p className="text-sm text-[--text-color] mt-4">
                            Нажимая кнопку “Отправить”, вы соглашаетесь с{' '}
                            <Link href={policyLink.url} className="text-sm underline">
                            политикой конфиденциальности
                            </Link>
                        </p>
                    </form>


                </div>
            </div>
        </section>
    )
}
