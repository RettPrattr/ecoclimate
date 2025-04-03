'use client'

import Image from 'next/image'
import Link from 'next/link'
import LinkButton from '@/components/link-button'
import useBlazeSlider from '@/hooks/useBlazeSlider'

export default function Conditioners({ title = '', items = [] }) {
	const elRef = useBlazeSlider({
		all: {
			loop: true,
			slidesToShow: 3,
			slideGap: '24px',
			transitionDuration: 300,
			autoplayInterval: 0,
			breakpoints: {
				'(max-width: 1024px)': { slidesToShow: 2 },
				'(max-width: 640px)': { slidesToShow: 1 },
			},
		},
	})

	return (
		<section id="conditioners" className="py-16 bg-[--white-bc] text-[--text-color]">
			<div className="content-container">
				<h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">{title}</h2>

				<div className="blaze-slider group relative" ref={elRef}>
					{/* Навигация */}
					<button className="blaze-prev absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 hidden md:block">
						<Image src="/icons/arrow-left.svg" alt="Prev" width={24} height={24} />
					</button>
					<button className="blaze-next absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 hidden md:block">
						<Image src="/icons/arrow-right.svg" alt="Next" width={24} height={24} />
					</button>

					<div className="blaze-container">
						<div className="blaze-track-container">
							<div className="blaze-track">
								{items?.map(({ name, catalogLink, price, image, description }, index) => (
									<div key={index} className="blaze-slide px-3">
										<div className="flex flex-col h-full border border-[--second-color] rounded-md p-4 md:p-6 bg-white text-black">
											{/* Изображение */}
											{image && (
												<div className="aspect-[3/2] w-full mb-4 border border-[--second-color]">
													<Image
														src={image}
														width={800}
														height={800}
														alt={name}
														className="w-full h-auto object-cover rounded"
													/>
												</div>
											)}

											{/* Название */}
											<h3 className="text-lg font-semibold mb-2 text-[--second-color]">{name}</h3>

											{/* Описание */}
											{description && (
												<p className="text-sm opacity-70 mb-4 flex-grow">{description}</p>
											)}

											{/* Ссылка */}
											<Link
												href="#form"
												className="flex items-center text-[18px] text-[--main-color] mt-auto group"
											>
												Проконсультироваться
												<Image
													src="/icons/arrow.svg"
													alt="Стрелка"
													width={8}
													height={8}
													className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
												/>
											</Link>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
