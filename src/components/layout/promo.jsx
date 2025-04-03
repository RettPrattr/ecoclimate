'use client'

import Link from 'next/link'
import Image from 'next/image'
import data from '@/data/data.json'

export default function Promo() {
	const address = data.promo?.address
	const phone = data.promo?.phone

	if (!address || !phone) return null // защита от ошибок

	return (
		<Link
			href="#contacts"
			className="group flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-24 bg-[--main-color] py-3 text-[--text-color] text-sm"
		>
			{/* Адрес */}
			<div className="flex flex-row items-center gap-3">
				<Image
					src={address.icon.url}
					width={24}
					height={24}
					alt={address.icon.alt}
					className="size-5"
				/>
				<span>{address.text}</span>
			</div>

			{/* Телефон */}
			<div className="flex flex-row items-center gap-3">
				<Image
					src={phone.icon.url}
					width={24}
					height={24}
					alt={phone.icon.alt}
					className="size-4"
				/>
				<span>{phone.text}</span>
			</div>
		</Link>
	)
}
