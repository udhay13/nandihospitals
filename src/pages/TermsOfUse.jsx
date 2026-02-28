import { motion } from 'framer-motion';
import { FileText, UserCheck, AlertTriangle, Globe, RefreshCw, Phone, ChevronRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';

const sections = [
    {
        icon: Globe,
        title: 'Use of This Website',
        color: '#0A66C2',
        points: [
            'This website is intended for general informational purposes only',
            'Content does not constitute medical advice, diagnosis or treatment',
            'Always consult a qualified healthcare professional for medical decisions',
            'You must be 18 years or older to use online services on this site',
            'Unauthorised use of this website may give rise to a claim for damages',
        ],
    },
    {
        icon: UserCheck,
        title: 'Patient Responsibilities',
        color: '#00B8B8',
        points: [
            'Provide accurate and complete personal and medical information',
            'Attend scheduled appointments or notify us in advance of cancellations',
            'Follow prescribed treatment plans and post-care instructions',
            'Treat all hospital staff and fellow patients with respect and courtesy',
            'Settle outstanding dues in accordance with the billing and payment policy',
        ],
    },
    {
        icon: FileText,
        title: 'Intellectual Property',
        color: '#7C3AED',
        points: [
            'All content on this website is the property of Nandi Hospital & Research Centre',
            'Text, images, logos and design elements are protected by copyright law',
            'You may not reproduce or distribute content without written permission',
            'The Nandi Hospital name and logo are registered trademarks',
            'Links to third-party sites are provided for convenience; we hold no responsibility for their content',
        ],
    },
    {
        icon: AlertTriangle,
        title: 'Limitation of Liability',
        color: '#EF4444',
        points: [
            'We strive for accuracy but do not guarantee the completeness of website content',
            'Nandi Hospital is not liable for decisions made based on website information alone',
            'Medical outcomes depend on individual health conditions and are not guaranteed',
            'We are not responsible for technical errors, downtime or data loss on the website',
            'Liability is limited to the maximum extent permitted under applicable law',
        ],
    },
    {
        icon: RefreshCw,
        title: 'Changes to These Terms',
        color: '#F59E0B',
        points: [
            'We reserve the right to modify these Terms of Use at any time',
            'Updated terms will be published on this page with a revised date',
            'Continued use of our services constitutes acceptance of revised terms',
            'Material changes will be notified via a prominent notice on the website',
            'It is your responsibility to review these terms periodically',
        ],
    },
    {
        icon: Phone,
        title: 'Contact & Governing Law',
        color: '#10B981',
        points: [
            'For queries regarding these terms, contact: legal@nandihospitals.com',
            'These terms are governed by the laws of the State of Tamil Nadu, India',
            'Disputes will be subject to the exclusive jurisdiction of Salem courts',
            'This document was last updated in February 2025',
            'A printed copy is available on request at our reception desk',
        ],
    },
];

export default function TermsOfUse() {
    return (
        <div>
            {/* Hero */}
            <section
                className="pt-32 pb-20 px-4 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #050f28 0%, #0a2452 60%, #051828 100%)' }}
            >
                <div
                    className="absolute inset-0"
                    style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, rgba(0,184,184,0.2) 0%, transparent 60%)' }}
                />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <span
                            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white"
                            style={{ background: 'rgba(0,184,184,0.2)', border: '1px solid rgba(0,184,184,0.4)' }}
                        >
                            Legal
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading">
                            Terms of<br />
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #00B8B8, #60A5FA)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Use
                            </span>
                        </h1>
                        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                            By accessing our website or using our services, you agree to the following terms
                            and conditions set out by Nandi Hospital &amp; Research Centre.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Sections */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeading
                        badge="Terms & Conditions"
                        title="Rules of"
                        highlight="Engagement"
                        subtitle="Please read these terms carefully before using our website or availing our healthcare services."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {sections.map((sec, i) => {
                            const Icon = sec.icon;
                            return (
                                <ScrollReveal key={sec.title} delay={i * 0.08}>
                                    <motion.div
                                        whileHover={{ y: -6 }}
                                        className="glass-card rounded-2xl p-8 h-full"
                                    >
                                        <div className="flex items-center gap-4 mb-5">
                                            <div
                                                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                                                style={{ background: `${sec.color}15` }}
                                            >
                                                <Icon className="w-6 h-6" style={{ color: sec.color }} />
                                            </div>
                                            <h2 className="font-bold text-gray-900 text-lg font-heading">{sec.title}</h2>
                                        </div>
                                        <ul className="space-y-2.5">
                                            {sec.points.map((point) => (
                                                <li key={point} className="flex items-start gap-2.5">
                                                    <ChevronRight
                                                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                                                        style={{ color: sec.color }}
                                                    />
                                                    <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
