'use client'

// Импортируем данные из JSON
import data from '@/data/data.json'

// Импортируем компоненты
import Hero from '@/components/hero'
import Conditioners from '@/components/conditioners'
import Advantages from '@/components/advantages'
import Services from '@/components/services'
import Stages from '@/components/stages'
import About from '@/components/about'
import Contacts from '@/components/contacts'
import Form from '@/components/form'

export default function HomePage() {
    // Деструктурируем данные из JSON
    const { hero, conditioners, advantages, services, stages, about, contacts, form } = data

    return (
        <>
            {/* Hero */}
            <Hero {...hero} />

            {/* Кондиционеры */}
            <Conditioners {...conditioners} />

            {/* Преимущества */}
            <Advantages {...advantages} />

            {/* Услуги */}
            <Services {...services} />

            {/* Этапы */}
            <Stages {...stages} />

            {/* О нас */}
            <About {...about} />

            {/* Контакты */}
            <Contacts {...contacts} />

            {/* Форма */}
            <Form {...form} />
        </>
    )
}