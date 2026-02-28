import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
    Zap, Brain, Activity, Bone, Heart, Dna, Microscope, Baby, ArrowRight, Clock
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';

const departments = [
    {
        id: 'emergency',
        icon: Zap,
        title: '24×7 Emergency & Trauma Care',
        color: '#EF4444',
        bg: '#FEF2F2',
        features: ['Trauma Bay & Resuscitation', 'Critical Care Ambulance', 'Burn & Poison Management', 'Pediatric Emergency'],
        description:
            'Our emergency department operates 24 hours a day, 365 days a year. Equipped with 10 trauma bays, a full resuscitation team, and direct links to all specialities, we handle every emergency with speed and precision.',
    },
    {
        id: 'neuro',
        icon: Brain,
        title: 'Neurosciences & Neurology',
        color: '#7C3AED',
        bg: '#F5F3FF',
        features: ['Brain Tumour Surgery', 'Epilepsy Management', 'Parkinson\'s Treatment', 'Memory Disorders'],
        description:
            'A comprehensive neurosciences programme covering the full spectrum of brain, spine, and nerve conditions. Our neurosurgeons use neuro-navigation and minimally invasive techniques for optimal outcomes.',
    },
    {
        id: 'stroke',
        icon: Activity,
        title: 'Stroke Care & Early Intervention',
        color: '#0A66C2',
        bg: '#EFF6FF',
        features: ['Stroke Code Protocol', 'Thrombolysis (tPA)', 'Thrombectomy', 'Stroke Rehabilitation'],
        description:
            'Time is brain. Our certified Stroke Unit provides gold-standard care within the critical first hours. We run a 24×7 stroke code protocol with door-to-needle times under 30 minutes.',
    },
    {
        id: 'spine',
        icon: Bone,
        title: 'Spine & Orthopaedic Care',
        color: '#00B8B8',
        bg: '#F0FDFA',
        features: ['Disc Replacement', 'Joint Replacement', 'Sports Medicine', 'Scoliosis Correction'],
        description:
            'From sports injuries to complex spinal deformities, our orthopaedic team uses the latest implants, robotic assistance, and minimally invasive approaches for faster recovery.',
    },
    {
        id: 'obs',
        icon: Heart,
        title: 'Obstetrics & Gynaecology',
        color: '#EC4899',
        bg: '#FDF2F8',
        features: ['High-Risk Pregnancy', 'Laparoscopic Surgery', 'PCOS Management', 'Menopause Care'],
        description:
            "Comprehensive women's healthcare from adolescent gynaecology to menopause. Our maternity suites offer a family-centred birth experience with expert neonatal backup.",
    },
    {
        id: 'fertility',
        icon: Dna,
        title: 'Fertility & Reproductive Medicine',
        color: '#6366F1',
        bg: '#EEF2FF',
        features: ['IVF / ICSI', 'IUI Treatment', 'Egg Freezing', 'Surrogacy Counselling'],
        description:
            'Our fertility centre has helped hundreds of families grow. Using cutting-edge embryology laboratories and individualised protocols, we offer the highest success rates in the region.',
    },
    {
        id: 'diagnostics',
        icon: Microscope,
        title: 'Advanced Diagnostics',
        color: '#D97706',
        bg: '#FFFBEB',
        features: ['3T MRI', '128-slice CT', 'Digital X-ray', 'Cardiac Echo & Stress Test'],
        description:
            'Fast, accurate diagnosis enables better treatment. Our diagnostic wing operates 24×7 with same-day results for most investigations, linked digitally to treating consultants.',
    },
    {
        id: 'critical',
        icon: Baby,
        title: 'Critical Care & ICU Services',
        color: '#0891B2',
        bg: '#F0F9FF',
        features: ['Level III ICU', '24×7 Intensivists', 'NICU / PICU', 'Ventilator Management'],
        description:
            'Our 30-bed Level III ICU offers multi-organ support, continuous monitoring, and round-the-clock intensivist coverage. Dedicated NICU and PICU units support the most vulnerable patients.',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

export default function Departments() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;
        // Wait for the page to paint before scrolling
        const id = hash.replace('#', '');
        const timeout = setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Flash highlight so the user can spot the card
                el.style.transition = 'box-shadow 0.4s ease';
                el.style.boxShadow = '0 0 0 3px rgba(0,184,184,0.6)';
                setTimeout(() => { el.style.boxShadow = ''; }, 1800);
            }
        }, 400);
        return () => clearTimeout(timeout);
    }, [hash]);

    return (
        <div>
            {/* Page Hero */}
            <section
                className="pt-32 pb-20 px-4 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #050f28 0%, #0a2452 60%, #051828 100%)' }}
            >
                <div className="absolute inset-0"
                    style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, rgba(0,184,184,0.2), transparent 60%)' }} />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-4">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white"
                            style={{ background: 'rgba(0,184,184,0.2)', border: '1px solid rgba(0,184,184,0.4)' }}>
                            Our Departments
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading">
                            8 Speciality<br />
                            <span style={{ background: 'linear-gradient(135deg, #00B8B8, #60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                Departments
                            </span>
                        </h1>
                        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                            World-class care under one roof. Each department is staffed by board-certified specialists
                            with access to the latest medical technology.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Departments grid */}
            <section id="all-departments" className="relative section-padding bg-white" style={{ scrollMarginTop: '80px' }}>
                <div className="container-custom">
                    <SectionHeading
                        badge="Specialities"
                        title="Explore Our"
                        highlight="Departments"
                        subtitle="Each department is a dedicated centre of excellence with specialist staff and advanced infrastructure."
                    />

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                    >
                        {departments.map((dept, i) => {
                            const Icon = dept.icon;
                            return (
                                <motion.div
                                    key={dept.id}
                                    id={dept.id}
                                    custom={i}
                                    variants={cardVariants}
                                    whileHover={{ y: -6, scale: 1.01 }}
                                    className="rounded-3xl p-8 cursor-default transition-all duration-300 group"
                                    style={{
                                        background: dept.bg,
                                        border: `1px solid ${dept.color}20`,
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                                        scrollMarginTop: '100px',
                                    }}
                                >
                                    <div className="flex items-start gap-5">
                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                            style={{ background: `${dept.color}18` }}
                                        >
                                            <Icon className="w-7 h-7" style={{ color: dept.color }} />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="font-bold text-gray-900 text-xl mb-3 font-heading">{dept.title}</h2>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">{dept.description}</p>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {dept.features.map((f) => (
                                                    <span
                                                        key={f}
                                                        className="px-3 py-1 rounded-full text-xs font-semibold"
                                                        style={{ background: `${dept.color}15`, color: dept.color }}
                                                    >
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>

                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all"
                                                style={{ color: dept.color }}
                                            >
                                                Book Consultation <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Emergency CTA */}
            <section
                className="py-16 px-4"
                style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)' }}
            >
                <div className="max-w-3xl mx-auto text-center text-white space-y-4">
                    <Clock className="w-12 h-12 mx-auto animate-pulse" />
                    <h2 className="text-3xl font-bold font-heading">Medical Emergency?</h2>
                    <p className="text-red-100 text-lg">
                        Our emergency team is available 24 hours a day, 7 days a week.
                        Don't wait — call now.
                    </p>
                    <a
                        href="tel:+919876543210"
                        className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-red-600 font-bold text-lg hover:scale-105 transition-transform shadow-xl mt-4"
                        id="emergency-page-call"
                    >
                        <Zap className="w-5 h-5" />
                        Call Emergency Now
                    </a>
                </div>
            </section>
        </div>
    );
}
