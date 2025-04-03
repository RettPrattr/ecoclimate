'use client'

import Image from 'next/image'
import LinkButton from '@/components/link-button'
import useBlazeSlider from '@/hooks/useBlazeSlider'

export default function Conditioners({ title = '', items = [] }) {
    const elRef = useBlazeSlider({
        all: {
            slidesToShow: 3,
            slideGap: '24px',
            loop: false,
            transitionDuration: 300,
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

				<div className="blaze-slider" ref={elRef}>
					<div className="blaze-container">
						<div className="blaze-track-container">
							<div className="blaze-track">
								{items?.map(({ name, catalogLink, price, image, description }, index) => (
									<div key={index} className="blaze-slide px-3">
										<div className="flex flex-col h-full border border-[--main-color] rounded-md p-4 md:p-6">
											{/* Изображение */}
											{image && (
												<div className="aspect-[3/2] w-full mb-4">
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

											{/* Кнопка */}
											<LinkButton
												text="Проконсультироваться"
												type={2}
												href="#form"
											/>
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
