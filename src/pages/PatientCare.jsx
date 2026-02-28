import { motion } from 'framer-motion';
import {
    Receipt, BedDouble, Building2, MessageCircle, Zap, HeartPulse,
    ShieldCheck, Clock, Ambulance, Users
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';

const careFeatures = [
    {
        icon: Receipt,
        title: 'Ethical & Transparent Billing',
        description: 'Clear, itemised billing with no hidden charges. We accept all major insurance providers for cashless treatment.',
        color: '#0A66C2',
    },
    {
        icon: BedDouble,
        title: 'ICU & Inpatient Services',
        description: 'Comfortable, well-equipped rooms with dedicated nursing. Level III ICU with 24×7 intensivist monitoring.',
        color: '#7C3AED',
    },
    {
        icon: Building2,
        title: 'Modern Infrastructure',
        description: 'State-of-the-art hospital facilities including modular OTs, digital radiology, and advanced diagnostics.',
        color: '#00B8B8',
    },
    {
        icon: MessageCircle,
        title: 'Patient-Centric Communication',
        description: 'Regular family counselling, clear doctor explanations, and multilingual support for all patients.',
        color: '#EC4899',
    },
    {
        icon: Ambulance,
        title: 'Emergency Support System',
        description: '24×7 ambulance services with trained paramedics, AED equipment, and real-time coordination with ER.',
        color: '#EF4444',
    },
    {
        icon: ShieldCheck,
        title: 'Infection Control',
        description: 'NABH-certified infection control protocols to ensure a safe, sterile environment for all patients.',
        color: '#10B981',
    },
    {
        icon: HeartPulse,
        title: 'Rehabilitation Services',
        description: 'Comprehensive physiotherapy, occupational therapy, and speech therapy for faster recovery.',
        color: '#F59E0B',
    },
    {
        icon: Users,
        title: 'Dedicated Patient Relations',
        description: 'A dedicated patient relations team to assist with admission, discharge, insurance, and queries.',
        color: '#6366F1',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export default function PatientCare() {
    return (
        <div>
            {/* Page Hero */}
            <section
                className="pt-32 pb-20 px-4 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #050f28 0%, #0a2452 60%, #051828 100%)' }}
            >
                <div className="absolute inset-0"
                    style={{ backgroundImage: 'radial-gradient(circle at 60% 40%, rgba(10,102,194,0.2), transparent 60%)' }} />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-4">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white"
                            style={{ background: 'rgba(0,184,184,0.2)', border: '1px solid rgba(0,184,184,0.4)' }}>
                            Patient Care
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading">
                            Putting Patients<br />
                            <span style={{ background: 'linear-gradient(135deg, #00B8B8, #60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                First, Always
                            </span>
                        </h1>
                        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                            At Nandi Hospital, every process, protocol, and policy is designed with one goal:
                            to provide the best possible experience for our patients and their families.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeading
                        badge="Our Commitments"
                        title="Patient Care"
                        highlight="Standards"
                        subtitle="We hold ourselves to the highest standards in every aspect of patient care and hospital operations."
                    />

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        {careFeatures.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    variants={cardVariants}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="glass-card rounded-2xl p-6 group cursor-default"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                                        style={{ background: `${feature.color}15` }}
                                    >
                                        <Icon className="w-7 h-7" style={{ color: feature.color }} />
                                    </motion.div>
                                    <h3 className="font-bold text-gray-900 mb-2 font-heading text-base">{feature.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                                    <div
                                        className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                                        style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Insurance & Payments */}
            <section className="section-padding section-gradient">
                <div className="container-custom">
                    <SectionHeading
                        badge="Payments"
                        title="Cashless &"
                        highlight="Insurance Support"
                        subtitle="We work with all major insurance providers to ensure you get care without financial stress."
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {['Government Schemes', 'ESI / CGHS', 'Corporate TPA', 'Private Insurance'].map((ins, i) => (
                            <ScrollReveal key={ins} delay={i * 0.1}>
                                <div className="glass-card rounded-2xl p-5 text-center">
                                    <ShieldCheck className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                                    <div className="font-semibold text-gray-800 text-sm">{ins}</div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-white text-center">
                <ScrollReveal>
                    <div className="max-w-2xl mx-auto space-y-6">
                        <Clock className="w-12 h-12 mx-auto text-primary-500 animate-pulse-slow" />
                        <h2 className="text-3xl font-bold font-heading text-gray-900">
                            Need Medical Assistance?
                        </h2>
                        <p className="text-gray-500">
                            Our team is ready to help. Book an appointment or walk in any time — our emergency
                            services never close.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-primary px-8 py-3.5 text-base" id="patient-care-cta">
                                Book Appointment
                            </Link>
                            <a href="tel:+919876543210" className="btn-outline px-8 py-3.5 text-base" id="patient-care-call">
                                Call Emergency
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
