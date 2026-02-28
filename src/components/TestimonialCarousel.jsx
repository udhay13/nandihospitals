import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Priya Ramanan',
        location: 'Salem, Tamil Nadu',
        rating: 5,
        avatar: 'P',
        color: 'from-purple-500 to-pink-500',
        text:
            'Nandi Hospital saved my father\'s life during his stroke. The emergency team responded within minutes and the neuro specialists were exceptional. We are forever grateful for the care provided.',
        dept: 'Neurosciences & Stroke Care',
    },
    {
        name: 'Karthik Selvam',
        location: 'Erode, Tamil Nadu',
        rating: 5,
        avatar: 'K',
        color: 'from-blue-500 to-cyan-500',
        text:
            'I underwent spine surgery at Nandi Hospital and the results have been life-changing. The orthopaedic team was highly professional, and the post-op care was extraordinary. Highly recommend.',
        dept: 'Spine & Orthopaedic Care',
    },
    {
        name: 'Meera Subramaniam',
        location: 'Namakkal, Tamil Nadu',
        rating: 5,
        avatar: 'M',
        color: 'from-teal-500 to-green-500',
        text:
            'After years of fertility struggles, we finally welcomed our baby girl thanks to the amazing team at Nandi\'s fertility centre. The whole experience was handled with immense care and dignity.',
        dept: 'Fertility & Reproductive Medicine',
    },
    {
        name: 'Suresh Annamalai',
        location: 'Salem, Tamil Nadu',
        rating: 5,
        avatar: 'S',
        color: 'from-orange-500 to-red-500',
        text:
            'Emergency trauma care at Nandi was first-class. My son was brought in after an accident and within hours was operated on and stabilised. The transparency in communication was impressive.',
        dept: '24×7 Emergency & Trauma Care',
    },
];

export default function TestimonialCarousel() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const next = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    const variants = {
        enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
        center: { opacity: 1, x: 0 },
        exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
    };

    const t = testimonials[current];

    return (
        <div className="relative max-w-4xl mx-auto pt-4">
            {/* Quote mark */}
            <div
                className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl font-bold opacity-10 select-none"
                style={{ color: '#0A66C2' }}
                aria-hidden="true"
            >
                ❝
            </div>

            <AnimatePresence custom={direction} mode="wait">
                <motion.div
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'tween', duration: 0.45, ease: 'easeInOut' }}
                    className="glass-card rounded-3xl p-8 md:p-12 text-center"
                >
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400" fill="#FBBF24" />
                        ))}
                    </div>

                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                        "{t.text}"
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <div
                            className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                        >
                            {t.avatar}
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-gray-900 text-lg">{t.name}</div>
                            <div className="text-primary-500 text-sm font-medium">{t.dept}</div>
                            <div className="text-gray-400 text-xs">{t.location}</div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
                <button
                    onClick={prev}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                        background: 'rgba(10, 102, 194, 0.1)',
                        border: '1px solid rgba(10, 102, 194, 0.2)',
                    }}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-5 h-5 text-primary-600" />
                </button>

                <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                            className="transition-all duration-300 rounded-full"
                            style={{
                                width: i === current ? '24px' : '8px',
                                height: '8px',
                                background: i === current
                                    ? 'linear-gradient(90deg, #0A66C2, #00B8B8)'
                                    : 'rgba(10, 102, 194, 0.3)',
                            }}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                        background: 'rgba(10, 102, 194, 0.1)',
                        border: '1px solid rgba(10, 102, 194, 0.2)',
                    }}
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-5 h-5 text-primary-600" />
                </button>
            </div>
        </div>
    );
}
