'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import data from '@/data/data.json'
import Burger from './burger'
import LinkButton from '@/components/link-button'

export default function Header() {
	const { logo, internalLinks } = data.header
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const updateMobile = () => {
			setIsMobile(window.innerWidth < 1024)
		}
		updateMobile()
		window.addEventListener('resize', updateMobile)
		return () => window.removeEventListener('resize', updateMobile)
	}, [])

	useEffect(() => {
		document.body.classList.toggle('modal-opened-mobile', isMobileMenuOpen)
		return () => document.body.classList.remove('modal-opened-mobile')
	}, [isMobileMenuOpen])

	const handleLinkClick = () => {
		setIsMobileMenuOpen(false)
	}

	return (
		<header
			className={`
				sticky top-[-1px] z-20 text-[--text-color]
				${isMobileMenuOpen ? 'mobile-menu-open' : 'bg-[--white-bc]'}
			`}
		>
			<div className="content-container relative">
				<div className="flex items-center justify-between py-4 lg:py-6">
                <div
	className={`
		z-40 relative w-[133px] h-[45px] lg:w-[200px] lg:h-[70px]
		${!isMobile ? 'top-[2px]' : ''}
	`}
>
	<Image
		src={
			isMobile
				? isMobileMenuOpen
					? '/icons/wh-logo.svg'
					: '/icons/gr-logo.svg'
				: '/icons/desk-header-logo.svg'
		}
		alt="Логотип"
		fill
		className="object-contain"
	/>
	<Link
		href="/"
		aria-label="На главную"
		className="absolute inset-0 z-10"
		onClick={handleLinkClick}
	/>
</div>


					<nav role="navigation" className="hidden lg:flex">
						<ul className="flex flex-row items-center">
							{internalLinks?.map(({ link, text }) => (
								<li
									key={text}
									className="will-change-transform text-[--second-color] hover:text-[--main-color] transition-colors mr-3 md:mr-4 xl:mr-6 last:mr-0"
								>
									<Link
										href={link}
										className="text-sm md:text-base will-change-transform opacity-80 hover:opacity-100 transition-opacity"
									>
										{text}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<div className="hidden lg:block">
						<LinkButton text="Отправить заявку" type={2} href="#form" />
					</div>

					<Burger
						className="lg:hidden z-50"
						isOpen={isMobileMenuOpen}
						onClick={() => setIsMobileMenuOpen((prev) => !prev)}
					/>
				</div>

				<div
					className={`mobile-menu lg:hidden fixed inset-0 z-20 flex flex-col justify-start pt-36 pb-10 transition-all duration-300
						${isMobileMenuOpen ? 'opened bg-[--second-color] visible opacity-100' : 'invisible opacity-0'}
					`}
				>
					<ul className="flex flex-col gap-4 text-[--white-bc] text-[18px] font-bold pl-4">
						{internalLinks?.map(({ link, text }) => (
							<li key={text}>
								<Link href={link} className="hover:underline" onClick={handleLinkClick}>
									{text}
								</Link>
							</li>
						))}
					</ul>

					<div className="mt-8 pl-4 text-[--white-bc] text-sm leading-relaxed">
						<Link href="#contacts" onClick={handleLinkClick} className="opacity-80 hover:underline">
							г. Ярославль пр-кт Фрунзе 3
						</Link>
					</div>

					<div className="mt-6 pl-4 flex gap-4">
						<a href="" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
							<Image src="/icons/vk.svg" width={48} height={48} alt="VK" />
						</a>
						<a href="" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
							<Image src="/icons/tg.svg" width={48} height={48} alt="Telegram" />
						</a>
						<a href="" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
							<Image src="/icons/wp.svg" width={48} height={48} alt="Whatsapp" />
						</a>
					</div>

					<div className="mt-6 pl-4">
						<Link
							href="#form"
							onClick={handleLinkClick}
							className="inline-block font-normal px-7 py-2 rounded-full transition-colors duration-300
								bg-transparent text-white border border-white hover:bg-white hover:text-[--background-color]"
						>
							<span className="relative md:top-[1px]">Отправить заявку</span>
						</Link>
					</div>

					<div className="mt-auto pl-6 text-[--white-bc] text-sm pt-10">
						<p className="mb-1">© Экоклимат {new Date().getFullYear()}</p>
						<Link href="/policy" className="hover:underline">
							Политика конфиденциальности
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}
