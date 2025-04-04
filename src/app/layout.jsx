import '@/styles/global.css'
import 'blaze-slider/dist/blaze.css'

import Footer from 'components/layout/footer'
import Header from 'components/layout/header'
import Promo from 'components/layout/promo'

import { Nunito } from 'next/font/google'
import { Raleway } from 'next/font/google'

const nunito = Nunito({
	weight: 'variable',
	subsets: ['latin']
})

const raleway = Raleway({
    weight: 'variable',
    subsets: ['latin']
})


export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body className={`mx-auto min-w-80 ${nunito.className}`}>
				<Promo className='hidden md:flex'/>
				<Header
				/>
				{/* <Script /> */}
				<main className='min-h-screen bg-[--background-color]'>
					{children}
				</main>
				<Footer
				/>
			</body>
		</html>
	)
}
