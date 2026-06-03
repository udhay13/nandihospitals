import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Calendar, MapPin, ChevronDown, Shield, Clock, Award, Activity } from 'lucide-react';

// Decorative floating SVG icons
function FloatingIcon({ icon: Icon, style, color = '#0A66C2' }) {
    return (
        <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute pointer-events-none"
            style={style}
        >
            <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl"
                style={{
                    background: `rgba(255,255,255,0.12)`,
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.25)',
                }}
            >
                <Icon className="w-7 h-7" style={{ color }} />
            </div>
        </motion.div>
    );
}

export default function HeroSection() {
    const videoRef = useRef(null);

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
    };

    return (
        <section className="relative h-screen flex flex-col overflow-hidden" aria-label="Hero">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover scale-105"
                    style={{ filter: 'brightness(0.65)' }}
                    poster="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&q=80"
                >
                    <source
                        src="https://assets.mixkit.co/videos/5491/5491-720.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            {/* Gradient overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background:
                        'linear-gradient(135deg, rgba(5,10,35,0.82) 0%, rgba(10,40,80,0.65) 50%, rgba(0,30,50,0.85) 100%)',
                }}
            />

            {/* Floating medical icons */}
            <FloatingIcon
                icon={Shield}
                style={{ top: '22%', left: '6%', animationDelay: '0s' }}
                color="#00B8B8"
            />
            <FloatingIcon
                icon={Activity}
                style={{ top: '30%', right: '7%', animationDelay: '1.5s' }}
                color="#60A5FA"
            />
            <FloatingIcon
                icon={Award}
                style={{ bottom: '28%', left: '9%', animationDelay: '0.8s' }}
                color="#A78BFA"
            />
            <FloatingIcon
                icon={Clock}
                style={{ bottom: '20%', right: '10%', animationDelay: '2.2s' }}
                color="#F59E0B"
            />

            {/* Content — fills full height, items distributed evenly */}
            <div className="relative z-20 w-full flex-1 flex flex-col justify-evenly items-center text-center px-4 sm:px-6 lg:px-8"
                style={{ paddingTop: '80px', paddingBottom: '24px' }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full flex flex-col justify-evenly items-center gap-0"
                    style={{ flex: 1 }}
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants}>
                        <span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
                            style={{
                                background: 'rgba(0,184,184,0.2)',
                                border: '1px solid rgba(0,184,184,0.5)',
                                backdropFilter: 'blur(8px)',
                            }}
                        >
                            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                            Salem's Premier Multispeciality Hospital · Est. 2000
                        </span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white leading-tight mx-auto max-w-4xl"
                    >
                        Advanced Multispeciality{' '}
                        <span
                            style={{
                                background: 'linear-gradient(135deg, #00B8B8, #60A5FA)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Care in Salem
                        </span>
                        <br />
                        <span className="text-xl sm:text-3xl md:text-4xl font-bold opacity-90">
                            24×7 Emergency &amp; Neuro Excellence
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed"
                    >
                        Providing 24-hour emergency services, stroke management, spine &amp; orthopaedic
                        treatment, and comprehensive women's healthcare under one roof.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-row flex-wrap items-center justify-center gap-3"
                    >
                        <Link
                            to="/contact"
                            id="hero-book-appointment"
                            className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-bold text-white text-sm sm:text-base transition-all duration-300 hover:scale-105"
                            style={{
                                background: 'linear-gradient(135deg, #0A66C2, #00B8B8)',
                                boxShadow: '0 8px 30px rgba(10,102,194,0.5)',
                            }}
                        >
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            Book Appointment
                        </Link>

                        <a
                            href="tel:+919876543210"
                            id="hero-emergency-call"
                            className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-bold text-white text-sm sm:text-base transition-all duration-300 hover:scale-105"
                            style={{
                                background: 'rgba(220,38,38,0.85)',
                                border: '2px solid rgba(255,100,100,0.5)',
                                backdropFilter: 'blur(8px)',
                                boxShadow: '0 8px 30px rgba(220,38,38,0.3)',
                            }}
                        >
                            <Phone className="w-4 h-4 animate-pulse flex-shrink-0" />
                            Emergency
                        </a>

                        <a
                            href="https://maps.app.goo.gl/KF2ZKDKfukRbzhmb8"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="hero-directions"
                            className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-bold text-white text-sm sm:text-base transition-all duration-300 hover:scale-105"
                            style={{
                                background: 'rgba(255,255,255,0.1)',
                                border: '2px solid rgba(255,255,255,0.35)',
                                backdropFilter: 'blur(12px)',
                            }}
                        >
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            Get Directions
                        </a>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
                    >
                        {[
                            { value: '20+', label: 'Years of Care' },
                            { value: '5,000+', label: 'Patients Treated' },
                            { value: '24×7', label: 'Emergency' },
                            { value: '10+', label: 'Specialist Doctors' },
                        ].map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="text-2xl sm:text-3xl font-extrabold text-white whitespace-nowrap">{s.value}</div>
                                <div className="text-blue-300 text-[11px] sm:text-xs font-medium uppercase tracking-wider mt-0.5">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>


        </section>
    );
}
