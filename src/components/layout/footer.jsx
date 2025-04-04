'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="bg-[--second-color] text-[--text-color] pb-8" id="contacts">
			<div className="container">
				{/* Первый ряд */}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 lg:py-10 gap-6">
					{/* Логотип */}
					<Image
						src="/icons/logo-white.svg"
						width={200}
						height={200}
						alt="Логотип компании"
						className="h-auto w-auto object-contain max-h-24"
					/>

					{/* Навигация */}
					<div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center">
						{[
							{ link: '#conditioners', text: 'Кондиционеры' },
							{ link: '#advantages', text: 'Преимущества' },
							{ link: '#services', text: 'Услуги' },
							{ link: '#stages', text: 'Этапы' },
							{ link: '#about', text: 'О нас' },
							{ link: '#contacts', text: 'Контакты' }
						].map(({ link, text }) => (
							<Link
								key={text}
								href={link}
								className="text-[--text-color] hover:opacity-80 transition-opacity"
							>
								{text}
							</Link>
						))}
					</div>

					{/* Социальные сети */}
					<div className="flex">
						{/* Первый элемент — без ml-3 */}
						<a
							href=""
							target="_blank"
							rel="noopener noreferrer"
							className="hover:opacity-80 transition-opacity md:ml-3"
						>
							<Image src="/icons/vk.svg" width={36} height={36} alt="VK" />
						</a>

						{/* Второй элемент — ml-3 на всех разрешениях + md:ml-3 */}
						<a
							href=""
							target="_blank"
							rel="noopener noreferrer"
							className="hover:opacity-80 transition-opacity ml-3 md:ml-3"
						>
							<Image src="/icons/tg.svg" width={36} height={36} alt="Telegram" />
						</a>

						{/* Третий элемент — ml-3 на всех разрешениях + md:ml-3 */}
						<a
							href=""
							target="_blank"
							rel="noopener noreferrer"
							className="hover:opacity-80 transition-opacity ml-3 md:ml-3"
						>
							<Image src="/icons/wp.svg" width={36} height={36} alt="Whatsapp" />
						</a>
					</div>

				</div>

				{/* Второй ряд */}
				<div className="flex flex-col md:flex-row justify-between items-start pt-6 lg:pt-10 gap-6">
					{/* Адрес */}
					<div>
						<p>г. Ярославль<br /> пр-кт Фрунзе 3</p>
					</div>

					{/* Копирайт и ссылки */}
					<div className="flex flex-col md:items-end md:text-right">
						<p>© Экоклимат {new Date().getFullYear()}</p>
						<div className="flex flex-col">
							<Link
								href="/policy"
								className="hover:opacity-80 transition-opacity"
							>
								Политика конфиденциальности
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
