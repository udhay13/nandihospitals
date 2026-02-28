import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

export default function FoundersVisionSection() {
    return (
        <section className="section-padding bg-white" id="founders-vision">
            <div className="container-custom">
                <SectionHeading
                    badge="Our Foundation"
                    title="Founders'"
                    highlight="Vision"
                    subtitle="Built on the promise of accessible, compassionate, and world-class healthcare for every person."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Illustration / Visual */}
                    <ScrollReveal direction="left">
                        <div className="relative">
                            <div
                                className="rounded-3xl overflow-hidden shadow-2xl"
                                style={{ boxShadow: '0 30px 80px rgba(10,102,194,0.2)' }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80"
                                    alt="Nandi Hospital Founders"
                                    className="w-full h-80 lg:h-96 object-cover"
                                    loading="lazy"
                                />
                                <div
                                    className="absolute inset-0 rounded-3xl"
                                    style={{
                                        background:
                                            'linear-gradient(to top, rgba(5,10,35,0.6) 0%, transparent 60%)',
                                    }}
                                />
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 shadow-xl"
                            >
                                <div className="text-3xl font-extrabold text-primary-600 font-heading">20+</div>
                                <div className="text-gray-500 text-xs font-medium">Years of Service</div>
                            </motion.div>

                            {/* Decorative blob */}
                            <div
                                className="absolute -top-8 -left-8 w-32 h-32 rounded-full"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(10,102,194,0.15), rgba(0,184,184,0.15))',
                                    filter: 'blur(20px)',
                                }}
                            />
                        </div>
                    </ScrollReveal>

                    {/* Content */}
                    <ScrollReveal direction="right">
                        <div className="space-y-6">
                            <div
                                className="rounded-3xl p-8 relative overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, #f8faff, #e8f4fd)',
                                    border: '1px solid rgba(10,102,194,0.1)',
                                }}
                            >
                                <Quote
                                    className="absolute top-4 right-4 w-16 h-16 text-primary-200"
                                    aria-hidden="true"
                                />
                                <p className="text-gray-700 text-lg leading-relaxed italic relative z-10">
                                    "Our vision was simple — to build a hospital where every patient, regardless of
                                    their background, receives the same level of care that we would want for our own
                                    families. We believe medicine is not just a profession; it is a calling."
                                </p>
                                <div className="mt-6 flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                                        style={{ background: 'linear-gradient(135deg, #0A66C2, #00B8B8)' }}
                                    >
                                        N
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Dr. Nandakumar & Team</div>
                                        <div className="text-primary-500 text-sm">Founders, Nandi Hospital</div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        title: 'Our Mission',
                                        desc: 'To deliver evidence-based, compassionate healthcare that improves lives.',
                                        colors: '#0A66C2, #00B8B8',
                                    },
                                    {
                                        title: 'Our Vision',
                                        desc: 'To be the most trusted multispeciality hospital in Tamil Nadu.',
                                        colors: '#00B8B8, #10B981',
                                    },
                                ].map((card) => (
                                    <div
                                        key={card.title}
                                        className="rounded-2xl p-5 text-white relative overflow-hidden"
                                        style={{
                                            background: `linear-gradient(135deg, ${card.colors})`,
                                        }}
                                    >
                                        <h4 className="font-bold text-lg mb-2 font-heading">{card.title}</h4>
                                        <p className="text-white/85 text-sm leading-relaxed">{card.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
