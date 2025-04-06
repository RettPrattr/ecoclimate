'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import ReactInputMask from 'react-input-mask'
import Link from 'next/link'
import LinkButton from '@/components/link-button'
import sendMessage from '@/utils/server/telegram'

const schema = z.object({
  name: z.string().min(3, 'Введите имя'),
  phone: z
    .string()
    .min(18, 'Введите номер полностью')
    .regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Введите корректный номер телефона'),
})

export default function Form({
  id = 'form',
  title = '',
  subtitle = '',
  description = '',
  buttonText = 'Отправить',
  successButtonText = 'Успешно',
  consentText = 'Нажимая кнопку “Отправить”, вы соглашаетесь с ',
  policyLink = {
    text: 'политикой конфиденциальности',
    url: '/policy',
  },
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    await sendMessage(`Имя: ${data.name}\nТелефон: ${data.phone}`)
  }

  return (
    <section id={id} className="raleway bg-[--white-bc] text-[--text-color] pb-16 relative z-10">
      <div className="content-container !px-[16px]">
        <div className="bg-[--main-color] -mb-[220px] px-12 py-10 md:py-16 relative z-20">
          <div className="flex flex-col">
            {subtitle && (
              <h3 className="text-xl md:text-2xl font-medium text-[--text-color] mb-4">
                {subtitle}
              </h3>
            )}

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !leading-[1.3] mb-6">
              {title}
            </h2>

            <p className="text-[18px] text-[--text-color] mb-10">{description}</p>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
              {/* Блок ввода + кнопка в одном ряду */}
              <div className="flex w-full flex-col md:flex-row items-start gap-4 md:gap-6">
                {/* Имя */}
                <div className="w-full md:w-[42%]">
                  <input
                    type="text"
                    placeholder="Имя"
                    {...register('name')}
                    className={`w-full bg-transparent text-white border-2 px-5 py-3 rounded-full placeholder-white outline-none transition-colors duration-200 ${
                      errors.name ? 'border-red-500' : 'border-white'
                    }`}
                  />
                  <div className="hidden md:block min-h-[20px] mt-2">
                    {errors.name && (
                      <p className="text-sm text-red-300">{errors.name.message}</p>
                    )}
                  </div>
                </div>

                {/* Телефон */}
                <div className="w-full md:w-[42%]">
                  <ReactInputMask
                    mask="+7 (999) 999-99-99"
                    {...register('phone')}
                    onChange={(e) => setValue('phone', e.target.value)}
                    placeholder="Телефон"
                    className={`w-full bg-transparent text-white border-2 px-5 py-3 rounded-full placeholder-white outline-none transition-colors duration-200 ${
                      errors.phone ? 'border-red-500' : 'border-white'
                    }`}
                  />
                  <div className="hidden md:block min-h-[20px] mt-2">
                    {errors.phone && (
                      <p className="text-sm text-red-300">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Кнопка */}
                <div className="w-full md:w-[16%] flex items-end">
                  <LinkButton
                    text={isSubmitSuccessful ? successButtonText : buttonText}
                    type={3}
                    className="w-full text-center py-[17px]"
                    disabled={isSubmitting || isSubmitSuccessful}
                  />
                </div>
              </div>

              <p className="text-sm text-[--text-color]">
                {consentText}
                <Link href={policyLink.url} className="text-sm underline">
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
