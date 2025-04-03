'use client'

import Link from 'next/link'
import LinkButton from '@/components/link-button'

export default function Services({ title, description, services }) {
	return (
		<section id="services" className="bg-[--background-color] text-[--text-color] py-16">
			<div className="container">
				<div className="flex flex-col md:flex-row gap-12">
					{/* Левая часть */}
					<div className="w-full md:w-1/2 flex flex-col justify-center">
						{/* Плашка "Услуги" */}
						<div className="mb-6 md:mb-8 px-4 py-2 bg-[--main-color] text-[--background-color] text-center uppercase font-medium">
							Услуги
						</div>

						{/* Заголовок */}
						<h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8">
							{title}
						</h2>

						{/* Описание */}
						<p className="text-base opacity-70 mb-6 md:mb-8">
							{description}
						</p>

						{/* Кнопка */}
						<LinkButton text="Оставить заявку" type={4} href="#form" />
					</div>

					{/* Правая часть - Сетка услуг */}
					<div className="w-full md:w-1/2 relative">
						<div className="grid grid-cols-2 gap-px h-[400px] border border-[--text-color]">
							{services?.map(({ title, description, link }, index) => (
								<div
									key={index}
									className="group bg-transparent hover:bg-[--main-color] transition-colors duration-300 flex flex-col justify-center items-center p-4"
								>
									<h3 className="text-lg font-medium text-[--text-color] text-center mb-2">
										{title}
									</h3>
									<p className="text-sm text-[--text-color] opacity-80 text-center mb-2">
										{description}
									</p>
									<Link
										href={link}
										className="text-sm text-[--text-color] underline opacity-70 hover:opacity-100 transition-opacity"
									>
										Выбрать услугу
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
