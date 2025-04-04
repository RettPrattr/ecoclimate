'use client'

import Image from 'next/image'
import Link from 'next/link'
import data from '@/data/data.json'
import Burger from './burger'
import LinkButton from '@/components/link-button'
import { useState, useEffect } from 'react'

export default function Header() {
	const { logo, internalLinks } = data.header
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	useEffect(() => {
		const bodyClass = 'modal-opened-mobile'
		document.body.classList.toggle(bodyClass, isMobileMenuOpen)
		return () => document.body.classList.remove(bodyClass)
	}, [isMobileMenuOpen])

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768 && isMobileMenuOpen) {
				setIsMobileMenuOpen(false)
			}
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [isMobileMenuOpen])

	const handleLinkClick = () => {
		setIsMobileMenuOpen(false)
	}

	return (
		<header className="sticky top-0 z-20 bg-[--white-bc] text-[--text-color]">
			<div className="content-container relative">
				<div className="flex items-center justify-between py-4 lg:py-6">
					<Image
						src={isMobileMenuOpen ? '/icons/logo-white.svg' : '/icons/logo.svg'}
						width={160}
						height={40}
						alt={logo.alt}
						className="h-auto w-auto object-contain max-h-[40px] z-30"
					/>

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

					<div className="hidden lg:block">
						<LinkButton text="Отправить заявку" type={2} href="#form" />
					</div>

					<Burger
						className="lg:hidden z-30"
						isOpen={isMobileMenuOpen}
						onClick={() => setIsMobileMenuOpen(prev => !prev)}
					/>
				</div>

				{/* Мобильное меню */}
				<div
					className={`mobile-menu lg:hidden fixed inset-0 z-20 flex flex-col justify-start pt-28 pb-10 transition-all duration-300
						${isMobileMenuOpen ? 'opened bg-[--second-color] visible opacity-100' : 'invisible opacity-0'}
					`}
				>
					<ul className="flex flex-col gap-4 text-[--white-bc] text-[18px] font-bold pl-6">
						{internalLinks?.map(({ link, text }) => (
							<li key={text}>
								<Link href={link} className="hover:underline" onClick={handleLinkClick}>
									{text}
								</Link>
							</li>
						))}
					</ul>

					{/* Адрес */}
					<div className="mt-8 pl-6 text-[--white-bc] text-sm leading-relaxed">
						<p>г. Ярославль пр-кт Фрунзе 3</p>
					</div>

					{/* Соцсети */}
					<div className="mt-6 pl-6 flex gap-4">
						<a
							href=""
							target="_blank"
							rel="noopener noreferrer"
							className="hover:opacity-80 transition-opacity"
						>
							<Image src="/icons/vk.svg" width={48} height={48} alt="VK" />
						</a>
						<a
							href=""
							target="_blank"
							rel="noopener noreferrer"
							className="hover:opacity-80 transition-opacity"
						>
							<Image src="/icons/tg.svg" width={48} height={48} alt="Telegram" />
						</a>
						<a
							href=""
							target="_blank"
							rel="noopener noreferrer"
							className="hover:opacity-80 transition-opacity"
						>
							<Image src="/icons/wp.svg" width={48} height={48} alt="Whatsapp" />
						</a>
					</div>

					{/* Кнопка */}
					<div className="mt-6 pl-6">
						<LinkButton text="Отправить заявку" type={4} href="#form" />
					</div>

					{/* Подвал */}
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
