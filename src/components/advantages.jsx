'use client'

import Image from 'next/image'
import LinkButton from '@/components/link-button'

export default function Advantages({ image, title, description, items }) {
	return (
		<section id="advantages" className="bg-[--background-color] text-[--text-color] py-16">
			<div className="container">
				<div className="flex flex-col md:flex-row gap-12">
					{/* Левая часть - Изображение */}
					<div className="w-full md:w-1/2 relative">
						<Image
							src={image.url}
							width={800}
							height={800}
							alt={image.alt}
							className="w-full h-auto object-cover"
						/>

						{/* Мини-блок поверх изображения */}
						<div className="absolute bottom-6 left-6 bg-[--background-color] p-4 rounded-md shadow-md">
							<span className="block text-2xl font-bold text-[--main-color] leading-snug">
								20+
							</span>
							<p className="text-sm text-[--text-color] opacity-80 mt-2 leading-relaxed">
								лет опыта
							</p>
						</div>
					</div>

					{/* Правая часть - Текстовый контент */}
					<div className="w-full md:w-1/2 flex flex-col justify-center">
						{/* Заголовок */}
						<h2 className="text-3xl md:text-4xl font-semibold mb-8">
							<span className="text-[--main-color]">Преимущества</span>{' '}
							<span className="text-[--second-color]">нашей компании</span>
						</h2>

						{/* Описание */}
						<p className="text-base opacity-70 mb-8">{description}</p>

						{/* Список преимуществ */}
						<div className="flex flex-col gap-6">
							{items?.map(({ icon, text }, index) => (
								<div key={index} className="flex flex-row items-start gap-4">
									<Image
										src={icon.url}
										width={24}
										height={24}
										alt={icon.alt}
										className="size-6"
									/>
									<p className="text-base text-[--second-color]">{text}</p>
								</div>
							))}
						</div>

						{/* Кнопка */}
						<div className="mt-8">
							<LinkButton text="Оставить заявку" type={2} href="#form" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
