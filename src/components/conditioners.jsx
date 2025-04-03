'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Conditioners({ title = '', items = [] }) {
	return (
		<section id="conditioners" className="bg-[--background-color] text-[--text-color] py-16">
			<div className="container">
				{/* Заголовок */}
				<h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
					{title}
				</h2>

				{/* Список кондиционеров */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{items?.map(({ name, catalogLink, price, image, description }, index) => (
						<div
							key={index}
							className="flex flex-col rounded-md overflow-hidden border border-[--main-color] bg-[--lightening] p-4 md:p-6"
						>
							{/* Изображение */}
							<div className="aspect-[3/2] w-full mb-4">
								<Image
									src={image}
									width={800}
									height={800}
									alt={name}
									className="w-full h-auto object-cover"
								/>
							</div>

							{/* Название */}
							<h3 className="text-xl font-medium mb-2">{name}</h3>

							{/* Описание */}
							<p className="text-sm opacity-70 mb-4 flex-grow">{description}</p>

							{/* Ссылка */}
							<Link href="#form" className="button second mt-auto w-full text-center">
								Проконсультироваться
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
