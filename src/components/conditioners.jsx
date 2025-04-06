'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
		<section
			id="conditioners"
			className="py-4 md:py-16 bg-[--white-bc] text-[--text-color] overflow-x-hidden"
		>
			<div className="content-container">
				<div className="blaze-slider relative" ref={sliderRef}>
					{/* Контейнер слайдов */}
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

					{/* Стрелки */}
					<div
						className="flex justify-center md:justify-between gap-3
						mt-4 md:mt-0 md:absolute md:top-1/2 md:left-[-30px] md:right-[-30px] md:-translate-y-1/2
						px-4 md:px-0 z-[999]"
					>
						{/* Prev */}
						<button className="blaze-prev group w-[44px] h-[44px] flex items-center justify-center">
							<svg
								width="45"
								height="46"
								viewBox="0 0 45 46"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="transition-colors duration-300"
							>
								<g clipPath="url(#clip0_0_6)">
									<path
										className="circle transition-colors duration-300"
										d="M44.5 23.4375C44.5 11.2872 34.6503 1.4375 22.5 1.4375C10.3497 1.4375 0.5 11.2872 0.5 23.4375C0.5 35.5878 10.3497 45.4375 22.5 45.4375C34.6503 45.4375 44.5 35.5878 44.5 23.4375Z"
										fill="white"
										stroke="var(--main-color)"
									/>
									<path
										className="arrow transition-colors duration-300"
										d="M26.5029 32.9359C26.1054 32.9345 25.7245 32.7764 25.4429 32.4959L17.4429 24.4959C17.1595 24.216 17 23.8342 17 23.4359C17 23.0376 17.1595 22.6558 17.4429 22.3759L25.4429 14.3759C25.8168 13.9746 26.38 13.8094 26.9114 13.9451C27.4429 14.0809 27.8579 14.4958 27.9936 15.0273C28.1294 15.5588 27.9642 16.122 27.5629 16.4959L20.6229 23.4359L27.5629 30.3759C27.8462 30.6558 28.0057 31.0376 28.0057 31.4359C28.0057 31.8342 27.8462 32.216 27.5629 32.4959C27.2812 32.7764 26.9003 32.9345 26.5029 32.9359Z"
										fill="var(--second-color)"
									/>
								</g>
								<defs>
									<clipPath id="clip0_0_6">
										<rect width="45" height="46" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</button>

						{/* Next (отражённый prev) */}
						<button className="blaze-next group w-[44px] h-[44px] flex items-center justify-center rotate-180">
							<svg
								width="45"
								height="46"
								viewBox="0 0 45 46"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="transition-colors duration-300"
							>
								<g clipPath="url(#clip0_0_6)">
									<path
										className="circle transition-colors duration-300"
										d="M44.5 23.4375C44.5 11.2872 34.6503 1.4375 22.5 1.4375C10.3497 1.4375 0.5 11.2872 0.5 23.4375C0.5 35.5878 10.3497 45.4375 22.5 45.4375C34.6503 45.4375 44.5 35.5878 44.5 23.4375Z"
										fill="white"
										stroke="var(--main-color)"
									/>
									<path
										className="arrow transition-colors duration-300"
										d="M26.5029 32.9359C26.1054 32.9345 25.7245 32.7764 25.4429 32.4959L17.4429 24.4959C17.1595 24.216 17 23.8342 17 23.4359C17 23.0376 17.1595 22.6558 17.4429 22.3759L25.4429 14.3759C25.8168 13.9746 26.38 13.8094 26.9114 13.9451C27.4429 14.0809 27.8579 14.4958 27.9936 15.0273C28.1294 15.5588 27.9642 16.122 27.5629 16.4959L20.6229 23.4359L27.5629 30.3759C27.8462 30.6558 28.0057 31.0376 28.0057 31.4359C28.0057 31.8342 27.8462 32.216 27.5629 32.4959C27.2812 32.7764 26.9003 32.9345 26.5029 32.9359Z"
										fill="var(--second-color)"
									/>
								</g>
								<defs>
									<clipPath id="clip0_0_6">
										<rect width="45" height="46" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

function ConditionerCard({ name, catalogLink, price, image, description }) {
	return (
		<Link
			href="#form"
			className="hover:opacity-100 group flex flex-col min-h-[390px] md:min-h-[430px] h-full rounded-md p-4 md:p-6 bg-white text-black transition-opacity duration-300 z-100"
		>
			<div className="w-full h-[200px] mb-4 border border-[--main-color] rounded overflow-hidden">
				<Image
					src={image}
					width={400}
					height={200}
					alt={name}
					className="w-full h-full object-cover"
				/>
			</div>

			<h3 className="text-lg font-semibold text-[--second-color] mb-2">{name}</h3>

			<div className="flex flex-col flex-grow">
				<p className="text-sm opacity-70 mb-3 line-clamp-3">{description}</p>

				<div className="mt-auto">
					<div className="flex items-center text-[18px] text-[--main-color] opacity-100 group-hover:opacity-80 transition-opacity duration-300">
						Проконсультироваться
						<Image
							src="/icons/green-arrow.svg"
							alt="Стрелка"
							width={8}
							height={8}
							className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
						/>
					</div>
				</div>
			</div>
		</Link>
	)
}
