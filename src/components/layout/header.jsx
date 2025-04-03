'use client'

import Image from 'next/image'
import Link from 'next/link'
import data from '@/data/data.json'
import Burger from './burger'
import LinkButton from '@/components/link-button'

// import Phone from '@/icons/phone.svg'
// import Location from '@/icons/location.svg'

export default function Header() {
    const { logo, internalLinks } = data.header

    return (
        <header className="sticky top-0 z-20 bg-[--white-bc] text-[--text-color]">
            <div className="content-container">
                <div className="flex flex-row items-center justify-between flex-wrap py-4 lg:gap-6 lg:py-6">
                    {/* Логотип */}
                    {logo && (
                        <Image
                            src="/icons/logo.svg"
                            width={200}
                            height={200}
                            alt={logo.alt}
                            className="h-auto w-auto object-contain max-h-24"
                        />
                    )}

                    {/* Навигация */}
                    <nav role="navigation" className="hidden lg:flex">
                        <ul className="flex flex-row items-center">
                            {internalLinks?.map(({ link, text }) => (
                                <li key={text} className="text-[--second-color] hover:text-[--main-color] transition-colors mr-3 md:mr-4 xl:mr-6 last:mr-0">
                                    <Link
                                        href={link}
                                        className="text-sm md:text-base opacity-80 hover:opacity-100 transition-opacity"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <LinkButton text="Отправить заявку" type={2} href="#conditioners" />


                    {/* Мобильное меню */}
                    <Burger className="lg:hidden" />
                </div>
            </div>
        </header>
    )
}