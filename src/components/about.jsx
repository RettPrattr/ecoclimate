'use client'

export default function About({ title, items }) {
    return (
        <section id="about" className="bg-[--white-bc] py-16">
            <div className="container">
                <div className="py-8">
                    {/* Блок с показателями */}
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        {items?.map(({ value, description }, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center text-center ${index === 1 ? 'md:mx-48' : ''
                                    }`}
                            >
                                {/* Число */}
                                <span className="raleway block text-6xl md:text-8xl font-bold text-[--main-color] leading-snug">
                                    {value}
                                </span>

                                {/* Описание */}
                                <p className="text-[18px] text-[--main-color] opacity-80 mt-3 leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
