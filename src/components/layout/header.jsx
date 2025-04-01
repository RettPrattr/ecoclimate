'use client'

import Image from 'next/image'
import Link from 'next/link'
import data from 'data/data.json' // Импортируем общий JSON
import Burger from './burger'

export default function Header() {
    // Используем данные из globalData
    const { logo, internalLinks, button, contacts } = data.header

    return (
        <header className='sticky top-0 z-20 bg-[--background-color] text-[--text-color]'>
            <div className='container'>
                <div
                    className='flex flex-row items-center justify-between gap-[--gap-mobile]
                        lg:gap-[calc(var(--gap-pc)/2)] xl:gap-[--gap-pc] py-[--gap-mobile]
                        lg:py-[calc(2*var(--gap-pc)/3)]'>
                    {/* Логотип */}
                    {logo && (
                        <Link href='/' className='shrink-0'>
                            <Image
                                src={logo.url}
                                width={200}
                                height={200}
                                alt={logo.alt}
                                className='h-full w-auto object-contain
                                    lg:min-h-[calc(var(--button-line-h)*var(--button)+var(--y-button)*2)]'
                            />
                        </Link>
                    )}

                    {/* Навигация */}
                    <nav role='navigation' className='hidden lg:flex lg:flex-grow'>
                        <ul
                            className='flex flex-row items-center gap-[calc(var(--gap-pc)/2)]
                                xl:gap-[--gap-pc]'>
                            {internalLinks.map(({ link, text }) => (
                                <li key={text}>
                                    <Link
                                        href={link} // Якорная ссылка
                                        className='text-[length:--p] leading-[--p-line-h] transition-opacity
                                            hover:opacity-[--text-opacity-grade]'>
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Контакты (видны только на больших экранах) */}
                    <div className='hidden lg:flex lg:flex-row lg:items-center lg:gap-[calc(var(--gap-pc)/2)]'>
                        <a
                            href={`tel:${contacts.phone}`}
                            className='flex flex-row items-center text-[length:--p] leading-[--p-line-h]'>
                            <Phone className='mr-[calc(var(--gap-pc)/3)] size-5' />
                            {contacts.phone}
                        </a>
                        <a
                            href='#contacts'
                            className='flex flex-row items-center text-[length:--p] leading-[--p-line-h]'>
                            <Location className='mr-[calc(var(--gap-pc)/3)] size-5' />
                            {contacts.address}
                        </a>
                    </div>

                    {/* Кнопка "Оставить заявку" */}
                    <Link
                        href={button.link} // Якорная ссылка
                        className='button second shrink-0 ml-[--gap-mobile]
                            lg:ml-[calc(var(--padding-pc)/2)] xl:ml-[--padding-pc]'>
                        {button.text}
                    </Link>

                    {/* Бургер для мобильных устройств */}
                    <Burger className='lg:hidden' />
                </div>
            </div>
        </header>
    )
}