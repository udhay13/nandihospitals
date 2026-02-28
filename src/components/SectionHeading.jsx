import { motion } from 'framer-motion';

export default function SectionHeading({
    badge,
    title,
    highlight,
    subtitle,
    center = true,
    light = false,
}) {
    return (
        <div className={`mb-14 ${center ? 'text-center' : ''}`}>
            {badge && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 mb-4"
                >
                    <span
                        className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${light
                                ? 'bg-white/20 text-white border border-white/30'
                                : 'bg-primary-50 text-primary-600 border border-primary-100'
                            }`}
                    >
                        {badge}
                    </span>
                </motion.div>
            )}

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight ${light ? 'text-white' : 'text-gray-900'
                    }`}
            >
                {title}{' '}
                {highlight && (
                    <span className="gradient-text">{highlight}</span>
                )}
            </motion.h2>

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`mt-4 text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-blue-100' : 'text-gray-500'
                        }`}
                >
                    {subtitle}
                </motion.p>
            )}

            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className={`mt-5 h-1 w-16 rounded-full ${center ? 'mx-auto' : ''}`}
                style={{ background: 'linear-gradient(90deg, #0A66C2, #00B8B8)' }}
            />
        </div>
    );
}
