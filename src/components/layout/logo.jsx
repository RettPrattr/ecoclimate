'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ isMobile = false, isMenuOpen = false, className = '', onClick }) {
	const logoSrc = isMobile
		? isMenuOpen
			? '/icons/wh-logo.svg'
			: '/icons/gr-logo.svg'
		: '/icons/desk-header-logo.svg'

	return (
		<div className={`relative inline-flex items-center justify-center ${className}`}>
			<Image
				src={logoSrc}
				alt="Логотип"
				fill
				className="object-contain"
			/>
			<Link
				href="/"
				aria-label="На главную"
				className="absolute inset-0 z-10"
				onClick={onClick}
			/>
		</div>
	)
}
