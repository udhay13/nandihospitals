import { motion } from 'framer-motion';
import {
    Users, Clock, Microscope, Baby, Building2, ShieldCheck, HandHeart, DollarSign
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const reasons = [
    {
        number: '01',
        icon: Users,
        title: 'Experienced Specialist Team',
        description: 'Board-certified specialists with national and international training across every department.',
        color: '#0A66C2',
    },
    {
        number: '02',
        icon: Clock,
        title: '24×7 Emergency Care',
        description: 'Round-the-clock trauma care, ICU monitoring, and emergency interventions every day of the year.',
        color: '#EF4444',
    },
    {
        number: '03',
        icon: Microscope,
        title: 'Advanced Diagnostics',
        description: 'MRI, CT, PET scans, high-resolution lab workups and real-time diagnostic results on-site.',
        color: '#8B5CF6',
    },
    {
        number: '04',
        icon: Baby,
        title: 'Women\'s & Mother Care',
        description: 'Dedicated maternity suites, high-risk OB specialists, NICU, and fertility experts.',
        color: '#EC4899',
    },
    {
        number: '05',
        icon: Building2,
        title: 'Multispeciality Care',
        description: 'All major specialities under one roof — from neurology to orthopaedics to oncology.',
        color: '#00B8B8',
    },
    {
        number: '06',
        icon: ShieldCheck,
        title: 'Dedicated Critical Care',
        description: 'State-of-the-art ICU with 24/7 intensivist coverage and NABH-compliant protocols.',
        color: '#F59E0B',
    },
    {
        number: '07',
        icon: HandHeart,
        title: 'Transparent Approach',
        description: 'Clear billing, honest clinical opinions, and open communication with patients and families.',
        color: '#10B981',
    },
    {
        number: '08',
        icon: DollarSign,
        title: 'Affordable Healthcare',
        description: 'Premium care without premium costs. We accept cashless insurance from all major providers.',
        color: '#6366F1',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export default function WhyChooseSection() {
    return (
        <section className="section-padding section-gradient relative overflow-hidden" id="why-choose">
            {/* Decorative blob */}
            <div
                className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(10,102,194,0.06), transparent)',
                    filter: 'blur(80px)',
                }}
            />
            <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(0,184,184,0.06), transparent)',
                    filter: 'blur(60px)',
                }}
            />

            <div className="container-custom relative z-10">
                <SectionHeading
                    badge="Why Nandi?"
                    title="8 Reasons to"
                    highlight="Trust Us"
                    subtitle="Committed to excellence in patient care, innovation, and compassion — every single day."
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {reasons.map((reason) => {
                        const Icon = reason.icon;
                        return (
                            <motion.div
                                key={reason.number}
                                variants={cardVariants}
                                whileHover={{ y: -6, scale: 1.01 }}
                                className="glass-card rounded-2xl p-6 group cursor-default relative overflow-hidden"
                            >
                                {/* Number badge */}
                                <div
                                    className="absolute top-4 right-4 text-5xl font-black opacity-5 select-none font-heading"
                                    style={{ color: reason.color }}
                                >
                                    {reason.number}
                                </div>

                                {/* Icon */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                                    style={{ background: `${reason.color}15` }}
                                >
                                    <Icon className="w-6 h-6" style={{ color: reason.color }} />
                                </div>

                                <h3 className="font-bold text-gray-900 mb-2 font-heading text-base leading-snug">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>

                                {/* Bottom accent */}
                                <div
                                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                                    style={{ background: `linear-gradient(90deg, ${reason.color}, transparent)` }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
