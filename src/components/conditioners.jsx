'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlazeSlider from 'blaze-slider'
import 'blaze-slider/dist/blaze.css'

export default function Conditioners({ title = '', items = [] }) {
	const sliderRef = useRef(null)

	useEffect(() => {
		if (sliderRef.current) {
			new BlazeSlider(sliderRef.current, {
				all: {
					slidesToShow: 3,
					slideGap: '12px',
					loop: true,
					transitionDuration: 300,
				},
				'(max-width: 1024px)': {
					slidesToShow: 2,
				},
				'(max-width: 768px)': {
					slidesToShow: 1,
				},
			})
		}
	}, [])

	return (
		<section id="conditioners" className="py-4 md:py-16 bg-[--white-bc] text-[--text-color]">
			<div className="content-container">
				<div className="blaze-slider group relative" ref={sliderRef}>
					<button className="blaze-prev absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 hidden md:block">
						<Image src="/icons/arrow-left.svg" alt="Prev" width={36} height={36} />
					</button>
					<button className="blaze-next absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 hidden md:block">
						<Image src="/icons/arrow-right.svg" alt="Next" width={36} height={36} />
					</button>

					<div className="blaze-container">
						<div className="blaze-track-container">
							<div className="blaze-track">
								{items.map((item, index) => (
									<div key={index} className="blaze-slide px-1.5 h-full">
										<ConditionerCard {...item} />
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="mt-6 flex justify-center items-center gap-6 md:hidden">
						<button className="blaze-prev">
							<Image src="/icons/arrow-left.svg" alt="Prev" width={36} height={36} />
						</button>
						<button className="blaze-next">
							<Image src="/icons/arrow-right.svg" alt="Next" width={36} height={36} />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

// Карточка кондиционера
function ConditionerCard({ name, catalogLink, price, image, description }) {
	return (
		<div className="flex flex-col h-full min-h-[480px] rounded-md p-4 md:p-6 bg-white text-black">
			{/* Изображение */}
			<div className="w-full h-[200px] mb-4 border border-[--second-color] overflow-hidden rounded">
				<Image
					src={image}
					width={400}
					height={200}
					alt={name}
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Название */}
			<h3 className="text-lg font-semibold text-[--second-color] mb-2">{name}</h3>

			{/* Описание — занимает всё доступное пространство */}
			<p className="text-sm opacity-70 flex-grow mb-4">{description}</p>

			{/* Ссылка — всегда прибита вниз */}
			<div>
				<Link
					href={catalogLink}
					target="_blank"
					className="flex items-center text-[18px] text-[--main-color]"
				>
					Проконсультироваться
					<Image
						src="/icons/green-arrow.svg"
						alt="Стрелка"
						width={8}
						height={8}
						className="ml-3 transition-transform duration-300 group-hover/link:translate-x-1"
					/>
				</Link>
			</div>
		</div>
	)
}

