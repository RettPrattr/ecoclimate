'use client'

import Image from 'next/image'
import LinkButton from '@/components/link-button'

export default function Hero({ title, description, image }) {
	return (
		<section id="hero" className="mt-20 md:mt-0 bg-[--white-bc] text-[--text-color] pt-8 md:pt-16 pb-16">
			<div className="content-container">
				<div className="flex flex-col md:flex-row gap-12">
					{/* Левая часть - Текстовый контент */}
					<div className="w-full md:w-1/2 flex flex-col justify-center">
						<div className="rounded-lg w-fit mb-6 px-4 py-2 bg-[--main-color] text-[--white-bc] text-center font-medium">
							№1 в Ярославле и ЯО
                        </div>
						{/* Заголовок */}
						<h1 className="mb-4">
							<span className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-[1.3] mb-6 text-[--main-color]">Продажа, установка, ремонт и обслуживание</span>{' '}
							<span className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-[1.3] text-[--second-color]">климатической техники</span>
						</h1>

						{/* Описание */}
						<p className="text-[18px] text-[--second-color] mb-10">
							{description}
						</p>

						{/* Кнопки */}
						<div className="flex flex-col text-center md:flex-row gap-4 md:gap-6">
							<LinkButton text="Оставить заявку" type={1} href="#form" />
							<LinkButton text="Выбрать кондиционер" type={2} href="#conditioners" />
						</div>
					</div>

					{/* Правая часть - Изображение */}
					<div className="hidden md:block w-full md:w-1/2 relative overflow-visible">
						<div className="absolute top-0 right-[-27.5%] w-[140%]">
							<Image
								src={image.url}
								width={1000}
								height={1000}
								alt={image.alt}
								className="w-full h-auto object-cover rounded-md"
							/>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}
