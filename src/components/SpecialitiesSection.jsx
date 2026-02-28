import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Zap, Brain, Heart, Bone, Baby, Dna, Microscope, Activity,
    ArrowRight
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

const specialities = [
    {
        id: 'emergency',
        icon: Zap,
        title: '24×7 Emergency & Trauma Care',
        description:
            'Round-the-clock emergency response with dedicated trauma bays, resuscitation teams, and critical care units ready at all times.',
        color: 'from-red-500 to-orange-500',
        bg: 'bg-red-50',
        border: 'border-red-100',
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
    },
    {
        id: 'neuro',
        icon: Brain,
        title: 'Neurosciences',
        description:
            'Comprehensive brain and spine care including neurosurgery, neurology, and rehabilitation, delivered by India-certified specialists.',
        color: 'from-violet-500 to-purple-600',
        bg: 'bg-violet-50',
        border: 'border-violet-100',
        iconBg: 'bg-violet-100',
        iconColor: 'text-violet-600',
    },
    {
        id: 'stroke',
        icon: Activity,
        title: 'Stroke Care & Early Intervention',
        description:
            'Rapid stroke diagnosis and treatment within the golden hour with our stroke unit and fibrinolysis protocols.',
        color: 'from-blue-500 to-cyan-500',
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
    },
    {
        id: 'spine',
        icon: Bone,
        title: 'Spine & Orthopaedic Care',
        description:
            'Minimally invasive spine surgery, joint replacement, sports medicine, and advanced orthopaedic rehabilitation.',
        color: 'from-teal-500 to-green-500',
        bg: 'bg-teal-50',
        border: 'border-teal-100',
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
    },
    {
        id: 'obs',
        icon: Heart,
        title: 'Obstetrics & Gynaecology',
        description:
            'Complete women\'s healthcare from prenatal care through delivery to post-menopausal health, handled with empathy.',
        color: 'from-pink-500 to-rose-500',
        bg: 'bg-pink-50',
        border: 'border-pink-100',
        iconBg: 'bg-pink-100',
        iconColor: 'text-pink-600',
    },
    {
        id: 'fertility',
        icon: Dna,
        title: 'Fertility & Reproductive Medicine',
        description:
            'State-of-the-art IVF, IUI, and reproductive technologies with personalised treatment plans and compassionate support.',
        color: 'from-indigo-500 to-blue-600',
        bg: 'bg-indigo-50',
        border: 'border-indigo-100',
        iconBg: 'bg-indigo-100',
        iconColor: 'text-indigo-600',
    },
    {
        id: 'diagnostics',
        icon: Microscope,
        title: 'Advanced Diagnostics',
        description:
            'High-resolution MRI, CT, digital X-ray, advanced lab services, and cardiac diagnostics under one roof.',
        color: 'from-amber-500 to-yellow-500',
        bg: 'bg-amber-50',
        border: 'border-amber-100',
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-600',
    },
    {
        id: 'critical',
        icon: Baby,
        title: 'Critical Care & Inpatient Services',
        description:
            'Level III ICU with 24/7 intensivists, multi-specialty support, ventilator management, and family-centered care.',
        color: 'from-cyan-500 to-teal-600',
        bg: 'bg-cyan-50',
        border: 'border-cyan-100',
        iconBg: 'bg-cyan-100',
        iconColor: 'text-cyan-600',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

export default function SpecialitiesSection() {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="section-padding bg-white" id="specialities">
            <div className="container-custom">
                <div className="mb-10">
                    <SectionHeading
                        badge="Our Expertise"
                        title="World-Class"
                        highlight="Medical Specialities"
                        subtitle="Experience premium healthcare across 8 specialised departments, each equipped with cutting-edge technology."
                        center={true}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {specialities.map((spec, i) => {
                        const Icon = spec.icon;
                        return (
                            <motion.div
                                key={spec.id}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
                                variants={cardVariants}
                                onMouseEnter={() => setHovered(spec.id)}
                                onMouseLeave={() => setHovered(null)}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={`specialty-card group relative overflow-hidden cursor-pointer flex flex-col ${spec.bg} ${spec.border} border`}
                            >
                                {/* Gradient glow on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-8 transition-opacity duration-300 rounded-2xl pointer-events-none`}
                                />

                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 rounded-2xl ${spec.iconBg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                                >
                                    <Icon className={`w-7 h-7 ${spec.iconColor}`} />
                                </div>

                                <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug font-heading">
                                    {spec.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                                    {spec.description}
                                </p>

                                <Link
                                    to={`/departments#${spec.id}`}
                                    className={`inline-flex items-center gap-1 text-sm font-semibold mt-auto ${spec.iconColor} hover:gap-2 transition-all duration-200`}
                                >
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
