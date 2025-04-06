'use client'

import Image from 'next/image'
import Link from 'next/link'
import data from '@/data/data.json'

export default function Promo({ className = '' }) {
    const address = data.promo?.address
    const phone = data.promo?.phone

    if (!address || !phone) return null

    return (
        <div
            className={`flex flex-row items-center justify-center gap-48 bg-[--main-color] py-3 text-[--text-color] text-sm ${className}`}
        >
            {/* Адрес */}
            <Link
                href="#contacts"
                className="flex flex-row items-center gap-2 hover:opacity-80 transition-opacity duration-200"
            >
                <Image
                    src={address.icon.url}
                    width={24}
                    height={24}
                    alt={address.icon.alt}
                    className="size-5"
                />
                <span>{address.text}</span>
            </Link>

            {/* Телефон */}
            <Link
                href="#contacts"
                className="flex flex-row items-center gap-2 hover:opacity-80 transition-opacity duration-200"
            >
                <Image
                    src={phone.icon.url}
                    width={24}
                    height={24}
                    alt={phone.icon.alt}
                    className="size-5"
                />
                <span>{phone.text}</span>
            </Link>
        </div>
    )
}