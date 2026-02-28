import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SpecialitiesSection from '../components/SpecialitiesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import StatsSection from '../components/StatsSection';
import FoundersVisionSection from '../components/FoundersVisionSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import SectionHeading from '../components/SectionHeading';

function FinalCTABanner() {
    return (
        <section
            className="py-24 px-4 relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #0A66C2 0%, #004e99 40%, #00B8B8 100%)',
                backgroundSize: '300% 300%',
                animation: 'gradient 10s ease infinite',
            }}
        >
            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
                style={{ background: 'white', filter: 'blur(80px)', transform: 'translate(40%, -40%)' }} />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-10"
                style={{ background: 'white', filter: 'blur(60px)', transform: 'translate(-30%, 30%)' }} />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="space-y-6"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white"
                        style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
                        ✦ Your Health Is Our Priority
                    </span>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-white font-heading">
                        Your Health Journey<br />
                        Starts Here
                    </h2>

                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                        Don't delay your care. Our specialists are available 24×7. Book your appointment
                        today or reach us for any emergency.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            to="/contact"
                            id="cta-banner-book"
                            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-primary-700 bg-white text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                        >
                            <Calendar className="w-5 h-5" />
                            Book Appointment
                        </Link>
                        <a
                            href="tel:+919876543210"
                            id="cta-banner-emergency"
                            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-lg transition-all duration-300 hover:scale-105"
                            style={{ background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.4)' }}
                        >
                            <Phone className="w-5 h-5 animate-pulse" />
                            Emergency: 24×7
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <div>
            <HeroSection />
            <SpecialitiesSection />
            <WhyChooseSection />
            <StatsSection />
            <FoundersVisionSection />

            {/* Testimonials */}
            <section className="section-padding section-gradient">
                <div className="container-custom">
                    <SectionHeading
                        badge="Patient Stories"
                        title="Trusted by"
                        highlight="Thousands"
                        subtitle="Hear from patients who experienced the Nandi difference first-hand."
                    />
                    <TestimonialCarousel />
                </div>
            </section>

            <FinalCTABanner />
        </div>
    );
}
