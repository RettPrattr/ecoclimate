'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ isMobile = false, isMenuOpen = false, className = '' }) {
	let logoSrc = '/icons/logo.svg'
	let logoHeight = '70px'

	if (isMobile) {
		logoSrc = isMenuOpen ? '/icons/logo-mob 1.svg' : '/icons/logo-mob.svg'
		logoHeight = '45px'
	}

	return (
		<div
			className={`relative top-[6px] inline-flex items-center justify-center ${className}`}
			style={{ height: logoHeight }}
		>
			<Image
				src={logoSrc}
				width={200}
				height={50}
				alt="Логотип"
				className="h-auto w-auto object-contain max-h-full"
			/>
			<Link
				href="/"
				aria-label="На главную"
				className="absolute inset-0 z-10"
			/>
		</div>
	)
}
