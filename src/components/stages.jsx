'use client'

import Image from 'next/image'
import LinkButton from '@/components/link-button'

export default function Stages({ title, description, items }) {
	return (
		<section id="stages" className="bg-[--background-color] text-[--text-color] py-16">
			<div className="container">
				<div className="px-4 md:px-8">
					{/* Заголовок */}
					<h2 className="text-3xl md:text-4xl font-semibold uppercase mb-12">
						{title}
					</h2>

					{/* Блок с описанием и кнопкой */}
					<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
						<p className="w-full md:w-1/2 text-base">{description}</p>
						<LinkButton text="Оставить заявку" type={4} href="#form" />
					</div>

					{/* Этапы */}
					<div className="scrollbar-hide flex w-full flex-row overflow-x-auto gap-6">
						{items?.map(({ title, image }, index) => (
							<div
								key={index}
								className="flex flex-col shrink-0 w-3/4 md:w-1/3"
							>
								{/* Изображение */}
								{image && (
									<Image
										src={image.url}
										width={800}
										height={800}
										alt={image.alt}
										className="aspect-[16/11] w-full h-auto object-cover"
									/>
								)}

								{/* Подпись */}
								<p className="mt-4 text-lg font-medium">{title}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
