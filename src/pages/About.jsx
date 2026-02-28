import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import StatsSection from '../components/StatsSection';

function PageHero() {
    return (
        <section
            className="pt-32 pb-20 px-4 relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #050f28 0%, #0a2452 60%, #051828 100%)',
            }}
        >
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'radial-gradient(circle at 30% 60%, rgba(10,102,194,0.2) 0%, transparent 60%)',
                }}
            />
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white"
                        style={{ background: 'rgba(0,184,184,0.2)', border: '1px solid rgba(0,184,184,0.4)' }}>
                        About Us
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading">
                        Nandi Hospital &<br />
                        <span style={{ background: 'linear-gradient(135deg, #00B8B8, #60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            Research Centre
                        </span>
                    </h1>
                    <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                        Over two decades of compassionate care, clinical excellence, and medical innovation
                        serving the people of Salem and Tamil Nadu.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

const team = [
    { name: 'Dr. S. Nandakumar', role: 'Founder & Chief Neurologist', img: 'N', color: 'from-blue-500 to-cyan-500' },
    { name: 'Dr. Priya Venkatesh', role: 'Head of Obstetrics & Gynaecology', img: 'P', color: 'from-pink-500 to-rose-500' },
    { name: 'Dr. Rajan Murugesan', role: 'Senior Orthopaedic Surgeon', img: 'R', color: 'from-teal-500 to-green-500' },
    { name: 'Dr. Kavitha Sundaram', role: 'Head of Fertility & Reproductive Medicine', img: 'K', color: 'from-violet-500 to-purple-600' },
];

const milestones = [
    { year: '2000', event: 'Nandi Hospital founded in Salem with 50 beds and core specialities.' },
    { year: '2005', event: 'Expanded to 150 beds; launched dedicated neurosciences unit.' },
    { year: '2010', event: 'Opened state-of-the-art fertility centre; first IVF success in Salem.' },
    { year: '2015', event: 'Launched Level III ICU and 24×7 Stroke Response Unit.' },
    { year: '2020', event: 'Achieved NABH accreditation; treated 50,000th patient.' },
    { year: '2024', event: 'Expanded research wing; advanced robotics and minimally invasive surgery.' },
];

export default function About() {
    return (
        <div>
            <PageHero />

            {/* Mission & Vision */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeading badge="Who We Are" title="Our" highlight="Story & Values" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <ScrollReveal direction="left">
                            <div className="space-y-6">
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    At Nandi Hospital &amp; Research Centre, we are committed to delivering accessible,
                                    affordable, and patient-centred healthcare backed by modern medical technology and
                                    experienced specialists.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We provide advanced, evidence-based treatment across Emergency &amp; Trauma Care,
                                    Neurosciences, Stroke Management, Spine Care, Orthopaedics, Obstetrics &amp;
                                    Gynaecology, and Fertility services — ensuring safe outcomes and compassionate support
                                    at every stage of care.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['NABH Accredited', 'ISO 9001:2015', '24×7 Emergency', '50,000+ Patients'].map((badge) => (
                                        <span key={badge} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold border border-primary-100">
                                            <CheckCircle2 className="w-4 h-4 text-primary-500" />
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: Target, title: 'Our Mission', desc: 'Evidence-based, compassionate healthcare that improves lives and restores hope.', color: '#0A66C2' },
                                    { icon: Eye, title: 'Our Vision', desc: 'To be Tamil Nadu\'s most trusted multispeciality hospital.', color: '#00B8B8' },
                                    { icon: Award, title: 'Our Values', desc: 'Integrity, Excellence, Compassion, Transparency, Innovation.', color: '#8B5CF6' },
                                    { icon: Users, title: 'Our Promise', desc: 'Every patient gets the care we would want for our own family.', color: '#EC4899' },
                                ].map((card) => {
                                    const Icon = card.icon;
                                    return (
                                        <motion.div
                                            key={card.title}
                                            whileHover={{ y: -5 }}
                                            className="glass-card rounded-2xl p-6"
                                        >
                                            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                                                style={{ background: `${card.color}15` }}>
                                                <Icon className="w-5 h-5" style={{ color: card.color }} />
                                            </div>
                                            <h3 className="font-bold text-gray-900 mb-2 font-heading">{card.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Timeline */}
                    <SectionHeading badge="Our Journey" title="Key" highlight="Milestones" />
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
                            style={{ background: 'linear-gradient(to bottom, #0A66C2, #00B8B8)' }} />
                        <div className="space-y-8">
                            {milestones.map((m, i) => (
                                <ScrollReveal key={m.year} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                                    <div className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <div className="glass-card rounded-2xl p-6 inline-block w-full">
                                                <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-bold text-white"
                                                    style={{ background: 'linear-gradient(135deg, #0A66C2, #00B8B8)' }}>
                                                    {m.year}
                                                </span>
                                                <p className="text-gray-700 text-sm leading-relaxed">{m.event}</p>
                                            </div>
                                        </div>
                                        <div className="relative flex-shrink-0 hidden md:flex">
                                            <div className="w-4 h-4 rounded-full border-2 border-primary-500 bg-white" />
                                        </div>
                                        <div className="flex-1 hidden md:block" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <StatsSection />

            {/* Team */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeading badge="Expert Team" title="Meet Our" highlight="Specialists" subtitle="Experienced doctors dedicated to your wellness." />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, i) => (
                            <ScrollReveal key={member.name} delay={i * 0.1}>
                                <motion.div whileHover={{ y: -8 }} className="glass-card rounded-2xl p-6 text-center">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg`}>
                                        {member.img}
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1 font-heading">{member.name}</h3>
                                    <p className="text-gray-500 text-sm">{member.role}</p>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/contact" className="btn-primary px-8 py-3.5 text-base">
                            Book a Consultation <ArrowRight className="inline w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
