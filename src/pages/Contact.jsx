import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Ambulance } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import ScrollReveal from '../components/ScrollReveal';

const contactInfo = [
    {
        icon: MapPin,
        title: 'Our Location',
        lines: ['Nandi Hospital & Research Centre', 'Salem, Tamil Nadu – 636 001', 'India'],
        color: '#0A66C2',
    },
    {
        icon: Phone,
        title: 'Phone Numbers',
        lines: ['+91 98765 43210 (General)', '+91 91234 56789 (Emergency)', '+91 98888 12345 (Appointments)'],
        color: '#00B8B8',
    },
    {
        icon: Mail,
        title: 'Email Us',
        lines: ['info@nandihospitals.com', 'appointments@nandihospitals.com', 'emergency@nandihospitals.com'],
        color: '#8B5CF6',
    },
    {
        icon: Clock,
        title: 'Working Hours',
        lines: ['OPD: Mon–Sat 8AM–8PM', 'Emergency: 24×7, Always Open', 'Diagnostics: 24×7'],
        color: '#EC4899',
    },
];

export default function Contact() {
    return (
        <div>
            {/* Page Hero */}
            <section
                className="pt-32 pb-20 px-4 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #050f28 0%, #0a2452 60%, #051828 100%)' }}
            >
                <div className="absolute inset-0"
                    style={{ backgroundImage: 'radial-gradient(circle at 50% 60%, rgba(0,184,184,0.15), transparent 60%)' }} />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-4">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white"
                            style={{ background: 'rgba(0,184,184,0.2)', border: '1px solid rgba(0,184,184,0.4)' }}>
                            Contact & Appointments
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading">
                            Get in<br />
                            <span style={{ background: 'linear-gradient(135deg, #00B8B8, #60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                Touch With Us
                            </span>
                        </h1>
                        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                            Book an appointment, ask a question, or reach our emergency team — we are always here for you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {contactInfo.map((info, i) => {
                            const Icon = info.icon;
                            return (
                                <ScrollReveal key={info.title} delay={i * 0.1}>
                                    <div className="glass-card rounded-2xl p-6 h-full">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                            style={{ background: `${info.color}15` }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: info.color }} />
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-3 font-heading">{info.title}</h3>
                                        <div className="space-y-1">
                                            {info.lines.map((line, j) => (
                                                <p key={j} className="text-gray-500 text-sm">{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>

                    {/* Two-column: Map + Form */}
                    <SectionHeading
                        badge="Book Now"
                        title="Book an"
                        highlight="Appointment"
                        subtitle="Fill in the form below and we'll confirm your appointment within 2 hours."
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Google Map */}
                        <ScrollReveal direction="left">
                            <div className="space-y-4">
                                <div
                                    className="rounded-3xl overflow-hidden shadow-2xl border"
                                    style={{
                                        borderColor: 'rgba(10,102,194,0.15)',
                                        boxShadow: '0 20px 60px rgba(10,102,194,0.15)',
                                    }}
                                >
                                    <iframe
                                        title="Nandi Hospital Location"
                                        src="https://maps.google.com/maps?q=NANDI%20HOSPITAL%20AND%20RESEARCH%20CENTRE,%20Tharamangalam,%20Tamil%20Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="380"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>

                                {/* Emergency banner */}
                                <div
                                    className="rounded-2xl p-6 flex items-center gap-4"
                                    style={{ background: 'linear-gradient(135deg, #FEF2F2, #FFF)', border: '1px solid #FEE2E2' }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                                        <Ambulance className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Medical Emergency?</div>
                                        <a href="tel:+919876543210" className="text-red-600 font-bold text-lg hover:underline">
                                            Call: +91 98765 43210
                                        </a>
                                        <p className="text-gray-500 text-xs">Available 24 hours, 7 days a week</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Contact Form */}
                        <ScrollReveal direction="right">
                            <div
                                className="rounded-3xl p-8"
                                style={{
                                    background: 'rgba(255,255,255,0.95)',
                                    border: '1px solid rgba(10,102,194,0.1)',
                                    boxShadow: '0 20px 60px rgba(10,102,194,0.1)',
                                }}
                            >
                                <h3 className="font-bold text-gray-900 text-xl mb-6 font-heading">
                                    Request an Appointment
                                </h3>
                                <ContactForm />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
