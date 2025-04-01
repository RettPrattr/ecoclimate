'use client'

import Image from 'next/image'
import Link from 'next/link'
import data from '@/data/data.json' // Импортируем общий JSON

export default function Footer() {
    // Используем данные из globalData
    const { internalLinks, contacts } = data

    return (
        <footer
            className='bg-[--background-color-footer] text-[--text-color]'
            id='contacts'>
            <div className='container'>
                {/* Первый ряд */}
                <div className='flex flex-col md:flex-row justify-between items-center py-[--gap-mobile] lg:py-[--gap-pc]'>
                    {/* Левая часть - Логотип */}
                    <div className='mb-[--gap-mobile] md:mb-0'>
                        <h3 className='text-[--text-color] font-semibold'>Экоклимат</h3>
                    </div>

                    {/* Центральная часть - Навигационные ссылки */}
                    <div className='flex flex-col md:flex-row gap-[--gap-mobile] md:gap-[--gap-pc]'>
                        {internalLinks.map(({ link, text }) => (
                            <Link
                                key={text}
                                href={link} // Якорные ссылки
                                className='text-[--text-color] opacity-[--text-opacity-grade] transition-opacity hover:opacity-100'>
                                {text}
                            </Link>
                        ))}
                    </div>

                    {/* Правая часть - Социальные сети */}
                    <div className='flex gap-[--gap-mobile] md:gap-[--gap-pc]'>
                        <a
                            href='https://facebook.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-[--text-color] opacity-[--text-opacity-grade] transition-opacity hover:opacity-100'>
                            <Image
                                src='/icons/facebook.svg'
                                width={24}
                                height={24}
                                alt='Facebook'
                            />
                        </a>
                        <a
                            href='https://instagram.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-[--text-color] opacity-[--text-opacity-grade] transition-opacity hover:opacity-100'>
                            <Image
                                src='/icons/instagram.svg'
                                width={24}
                                height={24}
                                alt='Instagram'
                            />
                        </a>
                        <a
                            href='https://twitter.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-[--text-color] opacity-[--text-opacity-grade] transition-opacity hover:opacity-100'>
                            <Image
                                src='/icons/twitter.svg'
                                width={24}
                                height={24}
                                alt='Twitter'
                            />
                        </a>
                    </div>
                </div>

                {/* Второй ряд */}
                <div className='flex flex-col md:flex-row justify-between items-start pt-[--gap-mobile] lg:pt-[--gap-pc] border-t border-[--border-color]'>
                    {/* Левая часть - Адрес */}
                    <div className='mb-[--gap-mobile] md:mb-0'>
                        <p className='text-[--text-color]'>{contacts.address}</p>
                    </div>

                    {/* Правая часть - Копирайт и ссылки */}
                    <div className='flex flex-col items-end'>
                        <p className='text-[--text-color] mb-[--gap-mobile] md:mb-[--gap-pc]'>
                            © Экоклимат {new Date().getFullYear()}
                        </p>
                        <div className='flex flex-col gap-[--gap-mobile] md:gap-[--gap-pc]'>
                            <Link
                                href='/policy'
                                className='text-[--text-color] opacity-[--text-opacity-grade] transition-opacity hover:opacity-100'>
                                Политика конфиденциальности
                            </Link>
                            <Link
                                href='https://api.avs.moscow/uploads/Soglasie_na_obrabotku_personalnyh_dannyh_2c17bbf7ba.pdf'
                                download
                                target='_blank'
                                className='text-[--text-color] opacity-[--text-opacity-grade] transition-opacity hover:opacity-100'>
                                Согласие на обработку персональных данных
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}