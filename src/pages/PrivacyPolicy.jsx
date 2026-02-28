import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Bell, Mail, ChevronRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';

const sections = [
    {
        icon: Database,
        title: 'Information We Collect',
        color: '#0A66C2',
        points: [
            'Personal identification information (name, date of birth, gender)',
            'Contact details (phone number, email address, postal address)',
            'Medical history, diagnoses, prescriptions and treatment records',
            'Insurance and payment information for billing purposes',
            'Website usage data collected through cookies and analytics tools',
        ],
    },
    {
        icon: Eye,
        title: 'How We Use Your Information',
        color: '#00B8B8',
        points: [
            'To provide, coordinate and manage your medical care and treatment',
            'To process appointments, billing and insurance claims',
            'To send appointment reminders, health updates and important notices',
            'To improve our services through anonymised research and analytics',
            'To comply with applicable legal, regulatory and accreditation requirements',
        ],
    },
    {
        icon: Lock,
        title: 'Data Security',
        color: '#7C3AED',
        points: [
            'All patient data is stored on encrypted, access-controlled servers',
            'Only authorised clinical and administrative staff can access your records',
            'We follow NABH guidelines and applicable data protection standards',
            'Regular security audits and vulnerability assessments are conducted',
            'Paper records are stored securely and disposed of per retention policies',
        ],
    },
    {
        icon: Shield,
        title: 'Sharing of Information',
        color: '#EC4899',
        points: [
            'We do not sell or rent your personal information to any third party',
            'Information may be shared with treating specialists within the hospital',
            'Insurance providers receive only information necessary for claim processing',
            'Disclosure to government or regulatory bodies only as legally required',
            'Anonymised data may be used for medical research and quality improvement',
        ],
    },
    {
        icon: Bell,
        title: 'Your Rights',
        color: '#F59E0B',
        points: [
            'Request access to a copy of your personal and medical records',
            'Request corrections to inaccurate or incomplete information',
            'Withdraw consent for non-essential communications at any time',
            'Request deletion of data where permitted by applicable law',
            'Lodge a complaint with the appropriate data protection authority',
        ],
    },
    {
        icon: Mail,
        title: 'Contact & Updates',
        color: '#10B981',
        points: [
            'For privacy-related queries, contact: privacy@nandihospitals.com',
            'This policy was last updated in February 2025',
            'We reserve the right to update this policy; changes will be posted here',
            'Continued use of our services after updates implies acceptance',
            'You may request a printed copy of this policy at our reception desk',
        ],
    },
];

export default function PrivacyPolicy() {
    return (
        <div>
            {/* Hero */}
            <section
                className="pt-32 pb-20 px-4 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #050f28 0%, #0a2452 60%, #051828 100%)' }}
            >
                <div
                    className="absolute inset-0"
                    style={{ backgroundImage: 'radial-gradient(circle at 30% 60%, rgba(10,102,194,0.2) 0%, transparent 60%)' }}
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
                            Privacy<br />
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #00B8B8, #60A5FA)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Policy
                            </span>
                        </h1>
                        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                            Your privacy matters to us. This policy explains how Nandi Hospital &amp; Research Centre
                            collects, uses, and protects your personal and medical information.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Sections */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeading
                        badge="Our Commitment"
                        title="How We Protect"
                        highlight="Your Privacy"
                        subtitle="We are committed to safeguarding your personal information with the highest standards of security and transparency."
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
