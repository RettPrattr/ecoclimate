import '@/styles/global.css'
import 'blaze-slider/dist/blaze.css'

import Footer from 'components/layout/footer'
import Header from 'components/layout/header'
import Promo from 'components/layout/promo'

import { Roboto } from 'next/font/google'
// import { Raleway } from 'next/font/google'

const roboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin']
})

// const raleway = Raleway({
//     weight: 'variable',
//     subsets: ['latin']
// })


export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body className={`mx-auto min-w-80 ${roboto.className}`}>
				<Promo className='hidden md:flex'/>
				<Header
				/>
				{/* <Script /> */}
				<main className='min-h-screen'>
					{children}
				</main>
				<Footer
				/>
			</body>
		</html>
	)
}
