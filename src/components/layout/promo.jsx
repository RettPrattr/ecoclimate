'use client'

import Link from 'next/link'
import Image from 'next/image'
import data from '@/data/data.json' // Импортируем данные из JSON

export default function Promo() {
    const { address, phone } = data.promo

    return (
        <Link
            href='#contacts' // Прокрутка до блока контактов
            className='group flex flex-row items-center justify-center gap-[120px]
                bg-[--main-color] py-[--y-button] text-[--text-color]'>
            {/* Блок с адресом */}
            <div className='flex flex-row items-center gap-[calc(var(--gap-pc)/2)]'>
                <Image
                    src='/icons/location.svg' // Путь к иконке адреса
                    width={24}
                    height={24}
                    alt='Адрес'
                    className='size-6'
                />
                <span className='text-[length:--hint] leading-[var(--hint-line-h)]'>
                    {address}
                </span>
            </div>

            {/* Блок с телефоном */}
            <div className='flex flex-row items-center gap-[calc(var(--gap-pc)/2)]'>
                <Image
                    src='/icons/phone.svg' // Путь к иконке телефона
                    width={24}
                    height={24}
                    alt='Телефон'
                    className='size-6'
                />
                <span className='text-[length:--hint] leading-[var(--hint-line-h)]'>
                    {phone}
                </span>
            </div>
        </Link>
    )
}