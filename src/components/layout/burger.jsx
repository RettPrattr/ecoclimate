'use client'

export default function Burger({ className, isOpen, onClick }) {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-label="Открыть меню"
			className={`relative size-10 rounded-[--radius-icons] focus:outline-none ${className}`}
		>
			<span className="sr-only">Открыть меню</span>

			<div className="absolute left-1/2 top-1/2 h-[9px] w-full -translate-x-1/2 -translate-y-1/2">
				{/* Верхняя полоска */}
				<span
					aria-hidden="true"
					className={`absolute top-0 left-1/2 h-0.5 origin-center -translate-x-1/2 transition-all duration-300 ease-in-out
						${isOpen
							? 'top-1/2 w-6 rotate-45 bg-white'
							: 'w-[43px] bg-[--main-color]'
						}`}
				/>
				{/* Нижняя полоска */}
				<span
					aria-hidden="true"
					className={`absolute bottom-0 left-1/2 h-0.5 origin-center -translate-x-1/2 transition-all duration-300 ease-in-out
						${isOpen
							? 'top-1/2 w-6 -rotate-45 bg-white'
							: 'w-[43px] bg-[--main-color]'
						}`}
				/>
			</div>
		</button>
	)
}
