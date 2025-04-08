'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import data from '@/data/data.json'
import Burger from './burger'
import LinkButton from '@/components/link-button'

export default function Header() {
  const { logo, internalLinks } = data.header
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const pathname = usePathname()

  // Определяем, находимся ли мы на странице политики
  const isPolicyPage = pathname === '/policy'

  useEffect(() => {
    const updateMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    updateMobile()
    window.addEventListener('resize', updateMobile)
    return () => window.removeEventListener('resize', updateMobile)
  }, [])

  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop

        if (scrollTop > lastScrollTop && scrollTop > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollTop(scrollTop)
      }

      if (!isMobileMenuOpen) {
        window.addEventListener('scroll', handleScroll)
      }

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobile, lastScrollTop, isMobileMenuOpen])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('modal-opened-mobile')
      document.body.style.overflow = 'hidden'
    } else {
      document.body.classList.remove('modal-opened-mobile')
      document.body.style.overflow = ''
    }
    return () => {
      document.body.classList.remove('modal-opened-mobile')
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`
        ${isMobile
          ? `fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
              isVisible ? 'translate-y-0' : '-translate-y-full'
            } ${isMobileMenuOpen ? 'bg-[--second-color]' : 'bg-[--white-bc]'}`
          : 'sticky top-[-1px] z-20 bg-[--white-bc]'}
        text-[--text-color]
      `}
    >
      <div className="content-container relative">
        {/* Верхняя панель */}
        <div className="flex items-center justify-between py-4 lg:py-6 z-50 relative">
          {/* Логотип */}
          <div
            className={`
              z-40 relative w-[133px] h-[45px] lg:w-[200px] lg:h-[70px]
              ${!isMobile ? 'top-[2px]' : ''}
            `}
          >
            <Image
              src={
                isMobile
                  ? isMobileMenuOpen
                    ? '/icons/wh-logo.svg'
                    : '/icons/gr-logo.svg'
                  : '/icons/desk-header-logo.svg'
              }
              alt="Логотип"
              fill
              className="object-contain"
            />
            <Link
              href="/"
              aria-label="На главную"
              className="absolute inset-0 z-10"
              onClick={handleLinkClick}
            />
          </div>

          {/* Навигация (ПК) */}
          <nav role="navigation" className="hidden lg:flex">
            <ul className="flex flex-row items-center">
              {internalLinks?.map(({ link, text }) => (
                <li
                  key={text}
                  className="will-change-transform text-[--second-color] hover:text-[--main-color] transition-colors mr-3 md:mr-4 xl:mr-6 last:mr-0"
                >
                  <Link
                    href={isPolicyPage ? `/#${link}` : `#${link}`}
                    className="text-sm md:text-base will-change-transform opacity-80 hover:opacity-100 transition-opacity"
                    onClick={handleLinkClick} // Добавлено для закрытия мобильного меню
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Кнопка (ПК) */}
          <div className="hidden lg:block">
            <LinkButton text="Отправить заявку" type={2}href={isPolicyPage ? `/#form` : `#form`} />
          </div>

          {/* Бургер (моб) */}
          <Burger
            className="lg:hidden z-50"
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          />
        </div>

        {/* Мобильное меню */}
        <div
          className={`
            mobile-menu lg:hidden fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] z-40
            flex flex-col justify-start pt-20 pb-10 overflow-y-hidden
            transition-all duration-300
            ${isMobileMenuOpen ? 'opened bg-[--second-color] visible opacity-100' : 'invisible opacity-0'}
          `}
        >
          <ul className="flex flex-col gap-4 text-[--white-bc] text-[18px] font-bold pl-4">
            {internalLinks?.map(({ link, text }) => (
              <li key={text}>
                <Link
                  href={isPolicyPage ? `/#${link}` : `#${link}`}
                  className="hover:underline"
                  onClick={handleLinkClick}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-20 pl-4 text-[--white-bc] text-sm leading-relaxed">
            <Link href="#contacts" onClick={handleLinkClick} className="opacity-80 hover:underline">
              г. Ярославль пр-кт Фрунзе 3
            </Link>
          </div>

          <div className="mt-6 pl-4 flex gap-4">
            <a href="https://vk.com/id1025121437" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/icons/vk.svg" width={54} height={54} alt="VK" />
            </a>
            <a href="https://t.me/Ecoclimat76" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/icons/tg.svg" width={54} height={54} alt="Telegram" />
            </a>
            <a href="https://wa.me/79806640456" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/icons/wp.svg" width={54} height={54} alt="Whatsapp" />
            </a>
          </div>

          <div className="mt-6 pl-4">
            <Link
			  href={isPolicyPage ? `/#form` : `#form`}
              onClick={handleLinkClick}
              className="inline-block font-normal px-8 py-3 rounded-full transition-colors duration-300
                bg-transparent text-white border border-white hover:bg-white hover:text-[--background-color]"
            >
              <span className="relative md:top-[1px]">Отправить заявку</span>
            </Link>
          </div>

          <div className="mt-auto pl-6 text-[--white-bc] text-sm pt-10">
            <p className="mb-1">© Экоклимат {new Date().getFullYear()}</p>
            <Link href="/policy" onClick={handleLinkClick} className="hover:underline">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
