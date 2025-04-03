'use client'

import sendMessage from '@/utils/telegram'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useCallback, useMemo, useRef } from 'react'
import { useForm } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'
import { z } from 'zod'
import TextInput from './text-input'

export default function RequestForm({
	className,
	buttonText,
	successButtonText
}) {
	const formRef = useRef(null)

	const schema = useMemo(
		() =>
			z.object({
				name: z.string().min(1, 'Обязательное поле'),
				phone: z.string().min(18, 'Введите номер полностью')
			}),
		[]
	)

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful, isSubmitting }
	} = useForm({
		resolver: zodResolver(schema)
	})

	const submit = useCallback(async data => {
		const { name, phone } = data
		const { current } = formRef

		const isTgSended = await sendMessage(
			`*Новая заявка на скидку!*\n\nФИО: ${name}\nТелефон: ${phone}`
		)

		if (isTgSended) {
			current.querySelectorAll('input').forEach(input => {
				input.setAttribute('disabled', true)
			})
		}
	}, [])

	return (
		<form
			className={className}
			ref={formRef}
			onSubmit={handleSubmit(submit)}>
			<div className='flex flex-col items-center justify-between md:flex-row'>
				<TextInput
					name='name'
					placeholder='ФИО'
					id='name'
					error={errors.name?.message}
					inputProps={register('name')}
					className='mt-[calc(var(--gap-mobile)/2+var(--hint-line-h)*var(--hint)+0.25rem)]
						w-full first:mt-0 md:ml-[--gap-pc] md:mt-0 md:w-1/2 md:first:ml-0'
				/>
				<TextInput
					error={errors.phone?.message}
					className='mt-[calc(var(--gap-mobile)/2+var(--hint-line-h)*var(--hint)+0.25rem)]
						w-full first:mt-0 md:ml-[--gap-pc] md:mt-0 md:w-1/2 md:first:ml-0'
					inputProps={register('phone')}
					id='phone'
					name='phone'
					placeholder='Phone'>
					<ReactInputMask
						type='tel'
						placeholder='Телефон'
						mask='+7 (999) 999-99-99'
						alwaysShowMask={false}
						maskChar=''
						className='input w-full'
						inputRef={register('phone').ref}
						{...register('phone')}
					/>
				</TextInput>
			</div>
			<span className='mt-[--gap-mobile] block md:mt-[--gap-pc]'>
				<span className='opacity-[--text-opacity-grade]'>
					{' '}
					Отправляя заявку, вы даёте{' '}
				</span>
				<Link
					href='https://api.avs.moscow/uploads/Soglasie_na_obrabotku_personalnyh_dannyh_2c17bbf7ba.pdf'
					download
					target='_blank'
					className='decoration-skip-ink-none text-[length:inherit] text-inherit
						underline opacity-[--text-opacity-grade] transition-opacity
						md:hover:opacity-100'>
					согласие на обработку персональных данных
				</Link>
				<span className='opacity-[--text-opacity-grade]'>
					{' '}
					и&nbsp;соглашаетесь с{' '}
				</span>
				<Link
					href='/policy'
					className='decoration-skip-ink-none text-[length:inherit] text-inherit
						underline opacity-[--text-opacity-grade] transition-opacity
						md:hover:opacity-100'>
					политикой конфиденциальности
				</Link>
			</span>
			<button
				type='submit'
				disabled={isSubmitSuccessful || isSubmitting}
				className='button background
					mt-[calc(var(--gap-mobile)/2+var(--hint-line-h)*var(--hint)+0.25rem)]
					w-full md:mt-[--gap-pc]'>
				{isSubmitSuccessful ? successButtonText : buttonText}
			</button>
		</form>
	)
}