import Link from 'next/link'

export default function LinkButton({ text = '', href = '#', type = 1, className = '' }) {
	const baseStyles = `inline-block font-normal px-7 py-2 rounded-full transition-colors duration-300`

	const typeStyles = {
		1: 'bg-[--main-color] text-white hover:bg-[--lightening]',
		2: 'bg-transparent text-[--second-color] border border-[--main-color] hover:bg-[--second-color] hover:text-[--main-color]',
		3: 'bg-white text-[--main-color] hover:bg-[--background-color] hover:text-[--text-color]',
		4: 'bg-transparent text-white border border-white hover:bg-white hover:text-[--background-color]',
	}

	const classes = `${baseStyles} ${typeStyles[type] || typeStyles[1]} ${className}`

	if (type === 3) {
		return (
			<button type="submit" className={classes}>
				{text}
			</button>
		)
	}

	return (
		<Link href={href} className={classes}>
			{text}
		</Link>
	)
}
