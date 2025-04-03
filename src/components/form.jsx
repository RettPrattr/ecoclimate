'use client'

import Link from 'next/link'
import formatText from '@/utils/format-text'
import LinkButton from '@/components/link-button'

export default function Form({
	title = '',
	subtitle = '',
	description = '',
	buttonText = 'Оставить заявку',
	successButtonText = 'Успешно отправлено',
	policyLink = {
		text: 'политикой конфиденциальности',
		url: '/policy'
	}
}) {
	return (
		<section id='form' className='bg-[--main-color] text-[--text-color] py-[--padding-pc]'>
			<div className='container'>
				<div className='margin-x padding-y'>
					<div className='flex flex-col items-center'>
						{/* Заголовок */}
						<h3 className='text-[length:--h3] font-medium leading-[--h3-line-h] mb-[--gap-mobile] md:mb-[--gap-pc]'>
							{formatText(subtitle)}
						</h3>
						<h2 className='text-[length:--h2] font-semibold leading-[--h2-line-h] uppercase mb-[--gap-mobile] md:mb-[--gap-pc]'>
							{formatText(title)}
						</h2>

						{/* Описание */}
						<p className='text-[length:--p] opacity-[--text-opacity-grade] mb-[calc(var(--gap-mobile)*2)] md:mb-[calc(var(--gap-pc)*2)]'>
							{formatText(description)}
						</p>

						{/* Форма */}
						<form className='w-full max-w-lg mx-auto flex flex-col gap-[--gap-mobile] md:gap-[--gap-pc]'>
							{/* Инпуты и кнопка в ряд */}
							<div className='flex flex-row gap-[--gap-mobile] md:gap-[--gap-pc]'>
								<input
									type='text'
									placeholder='Имя'
									className='flex-1 px-[--gap-mobile] py-[calc(var(--gap-mobile)/2)] border border-[--border-color] rounded-md'
								/>
								<input
									type='tel'
									placeholder='Телефон'
									className='flex-1 px-[--gap-mobile] py-[calc(var(--gap-mobile)/2)] border border-[--border-color] rounded-md'
								/>
								<LinkButton
									text="Отправить"
									type={3}
									href=""
								/>
							</div>

							{/* Текст соглашения */}
							<p className='text-[length:--hint] opacity-70 mt-[--gap-mobile] md:mt-[--gap-pc] text-center'>
								Нажимая кнопку “Отправить”, вы соглашаетесь с{' '}
								<Link
									href={policyLink.url}
									className='text-[--second-color] underline'>
									{policyLink.text}
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
