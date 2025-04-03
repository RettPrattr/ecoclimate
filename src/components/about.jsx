'use client'

export default function About({ title, items }) {
	return (
		<section id="about" className="bg-[--background-color] text-[--text-color] py-16">
			<div className="container">
				<div className="px-4 md:px-8 py-8 md:py-16">
					{/* Заголовок */}
					<h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
						{title}
					</h2>

					{/* Блок с показателями */}
					<div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
						{items?.map(({ value, description }, index) => (
							<div key={index} className="flex flex-col items-center text-center">
								{/* Число */}
								<span className="text-2xl md:text-3xl font-bold text-[--second-color] leading-snug">
									{value}
								</span>

								{/* Описание */}
								<p className="text-sm text-[--text-color] opacity-70 mt-2 leading-relaxed">
									{description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
