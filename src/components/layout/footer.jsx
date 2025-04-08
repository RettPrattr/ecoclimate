// components/Footer.js

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  // Определяем, находимся ли мы на странице политики
  const isPolicyPage = pathname === '/policy'

  return (
    <footer className={`${isPolicyPage ? 'pt-6 md:pt-12' : 'pt-48'} bg-[--second-color] text-[--text-color] pb-12 md:pb-8`} id="contacts">
      <div className="container">
        {/* Первый ряд */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 lg:py-10 gap-6">
          {/* Логотип */}
          <Link href="/" aria-label="На главную" className="hover:opacity-100">
            <Image
              src="/icons/footer-logo.svg"
              width={200}
              height={200}
              alt="Логотип компании"
              className="h-auto w-auto object-contain max-h-24"
            />
          </Link>

          {/* Навигация */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center">
            {[
              { link: 'conditioners', text: 'Кондиционеры' },
              { link: 'advantages', text: 'Преимущества' },
              { link: 'services', text: 'Услуги' },
              { link: 'stages', text: 'Этапы' },
              { link: 'about', text: 'О нас' },
              { link: 'contacts', text: 'Контакты' }
            ].map(({ link, text }) => (
              <Link
                key={text}
                href={isPolicyPage ? `/#${link}` : `#${link}`} // Если мы на странице политики, добавляем /
                className="text-[--text-color] hover:opacity-80 transition-opacity"
              >
                {text}
              </Link>
            ))}
          </div>

          {/* Социальные сети */}
          <div className="flex">
            <a
              href="https://vk.com/id1025121437"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity md:ml-3"
            >
              <Image src="/icons/vk.svg" width={36} height={36} alt="VK" />
            </a>

            <a
              href="https://t.me/Ecoclimat76"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity ml-3 md:ml-3"
            >
              <Image src="/icons/tg.svg" width={36} height={36} alt="Telegram" />
            </a>

            <a
              href="https://wa.me/79806640456"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity ml-3 md:ml-3"
            >
              <Image src="/icons/wp.svg" width={36} height={36} alt="Whatsapp" />
            </a>
          </div>
        </div>

        {/* Второй ряд */}
        <div className="flex flex-col md:flex-row justify-between items-start pt-6 lg:pt-10 gap-6">
          {/* Адрес */}
		  <a
			className=''
			href='https://yandex.ru/maps/?ll=39.875955%2C57.599195&z=16&pt=39.875955,57.599195'
			target='_blank'
			rel='noopener noreferrer'
		>
			г. Ярославль,<br /> пр-кт Фрунзе, д. 3
		</a>

          {/* Копирайт и ссылки */}
          <div className="flex flex-col md:items-end md:text-right">
            <p>© Экоклимат {new Date().getFullYear()}</p>
            <div className="flex flex-col">
              <Link
                href={isPolicyPage ? '/policy' : '/policy'} // Если мы на странице политики, добавляем /
                className="hover:opacity-80 transition-opacity"
              >
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
