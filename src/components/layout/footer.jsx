'use client'

import Image from 'next/image'
import Link from 'next/link'
import data from '@/data/data.json'

export default function Footer() {
	const { internalLinks, contacts } = data

	return (
		<footer className="bg-[--background-color-footer] text-[--text-color]" id="contacts">
			<div className="container">
				{/* Первый ряд */}
				<div className="flex flex-col md:flex-row justify-between items-center py-6 lg:py-10 gap-6">
					{/* Логотип */}
					<div>
						<h3 className="font-semibold">Экоклимат</h3>
					</div>

					{/* Навигация */}
					<div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
						{internalLinks?.map(({ link, text }) => (
							<Link
								key={text}
								href={link}
								className="text-[--text-color] opacity-80 hover:opacity-100 transition-opacity"
							>
								{text}
							</Link>
						))}
					</div>

					{/* Социальные сети */}
					<div className="flex gap-4 md:gap-6">
						{[
							{ href: 'https://facebook.com', icon: '/icons/facebook.svg', alt: 'Facebook' },
							{ href: 'https://instagram.com', icon: '/icons/instagram.svg', alt: 'Instagram' },
							{ href: 'https://twitter.com', icon: '/icons/twitter.svg', alt: 'Twitter' }
						]?.map(({ href, icon, alt }) => (
							<a
								key={alt}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="opacity-80 hover:opacity-100 transition-opacity"
							>
								<Image src={icon} width={24} height={24} alt={alt} />
							</a>
						))}
					</div>
				</div>

				{/* Второй ряд */}
				<div className="flex flex-col md:flex-row justify-between items-start pt-6 lg:pt-10 border-t border-white/20 gap-6">
					{/* Адрес */}
					<div>
						<p>{contacts.address}</p>
					</div>

					{/* Копирайт и ссылки */}
					<div className="flex flex-col items-end gap-4 text-right">
						<p>© Экоклимат {new Date().getFullYear()}</p>
						<div className="flex flex-col gap-2">
							<Link
								href="/policy"
								className="opacity-80 hover:opacity-100 transition-opacity"
							>
								Политика конфиденциальности
							</Link>
							<Link
								href="https://api.avs.moscow/uploads/Soglasie_na_obrabotku_personalnyh_dannyh_2c17bbf7ba.pdf"
								download
								target="_blank"
								className="opacity-80 hover:opacity-100 transition-opacity"
							>
								Согласие на обработку персональных данных
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
