'use client'

import Link from 'next/link'
import Image from 'next/image'
import data from '@/data/data.json'

export default function Promo() {
	const { address, phone } = data.promo

	return (
		<Link
			href="#contacts"
			className="group flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-24 bg-[--main-color] py-3 text-[--text-color] text-sm"
		>
			{/* Адрес */}
			<div className="flex flex-row items-center gap-3">
				<Image
					src="/icons/location.svg"
					width={24}
					height={24}
					alt="Адрес"
					className="size-6"
				/>
				<span>{address}</span>
			</div>

			{/* Телефон */}
			<div className="flex flex-row items-center gap-3">
				<Image
					src="/icons/phone.svg"
					width={24}
					height={24}
					alt="Телефон"
					className="size-6"
				/>
				<span>{phone}</span>
			</div>
		</Link>
	)
}
