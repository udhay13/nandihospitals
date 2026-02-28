import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = {
    specialities: [
        { label: '24×7 Emergency & Trauma', path: '/departments#emergency' },
        { label: 'Neurosciences', path: '/departments#neuro' },
        { label: 'Stroke Care', path: '/departments#stroke' },
        { label: 'Spine & Orthopaedics', path: '/departments#spine' },
        { label: 'Obstetrics & Gynaecology', path: '/departments#obs' },
        { label: 'Fertility & Reproductive', path: '/departments#fertility' },
    ],
    quickLinks: [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Departments', path: '/departments' },
        { label: 'Patient Care', path: '/patient-care' },
        { label: 'Contact Us', path: '/contact' },
    ],
};

export default function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* Top gradient section */}
            <div
                className="pt-20 pb-12"
                style={{
                    background: 'linear-gradient(135deg, #050f28 0%, #0a2452 50%, #051828 100%)',
                }}
            >
                {/* Decorative blobs */}
                <div
                    className="absolute top-0 left-1/4 w-72 h-72 rounded-full opacity-10"
                    style={{
                        background: 'radial-gradient(circle, #0A66C2, transparent)',
                        filter: 'blur(60px)',
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10"
                    style={{
                        background: 'radial-gradient(circle, #00B8B8, transparent)',
                        filter: 'blur(60px)',
                    }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Brand column */}
                        <div className="lg:col-span-1">
                            <Link to="/" className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                    style={{ background: 'linear-gradient(135deg, #0A66C2, #00B8B8)' }}
                                >
                                    <Heart className="w-6 h-6 text-white" fill="white" />
                                </div>
                                <div>
                                    <div className="font-bold text-xl text-white font-heading">Nandi Hospital</div>
                                    <div className="text-xs text-blue-300">& Research Centre</div>
                                </div>
                            </Link>
                            <p className="text-blue-200 text-sm leading-relaxed mb-6">
                                Advanced multispeciality healthcare in Salem. Delivering compassionate, precise,
                                and modern medical care to every patient.
                            </p>
                            <div className="flex items-center gap-3">
                                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                                        style={{
                                            background: 'rgba(255,255,255,0.1)',
                                            border: '1px solid rgba(255,255,255,0.15)',
                                        }}
                                        aria-label={`Social media link ${i + 1}`}
                                    >
                                        <Icon className="w-4 h-4 text-blue-200" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Specialities */}
                        <div>
                            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">
                                Specialities
                            </h4>
                            <ul className="space-y-2.5">
                                {footerLinks.specialities.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.path}
                                            className="flex items-center gap-2 text-blue-300 text-sm hover:text-white transition-colors duration-150 group"
                                        >
                                            <ChevronRight className="w-3 h-3 text-teal-400 group-hover:translate-x-1 transition-transform" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">
                                Quick Links
                            </h4>
                            <ul className="space-y-2.5">
                                {footerLinks.quickLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.path}
                                            className="flex items-center gap-2 text-blue-300 text-sm hover:text-white transition-colors duration-150 group"
                                        >
                                            <ChevronRight className="w-3 h-3 text-teal-400 group-hover:translate-x-1 transition-transform" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">
                                Contact Us
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-blue-200 text-sm">
                                        Nandi Hospital & Research Centre,<br />
                                        Salem, Tamil Nadu, India
                                    </span>
                                </li>
                                <li>
                                    <a
                                        href="tel:+919876543210"
                                        className="flex items-center gap-3 text-blue-200 text-sm hover:text-white transition-colors"
                                    >
                                        <Phone className="w-4 h-4 text-teal-400" />
                                        +91 98765 43210
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:info@nandihospitals.com"
                                        className="flex items-center gap-3 text-blue-200 text-sm hover:text-white transition-colors"
                                    >
                                        <Mail className="w-4 h-4 text-teal-400" />
                                        info@nandihospitals.com
                                    </a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Clock className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <span className="text-white font-semibold text-sm block">Emergency:</span>
                                        <span className="text-blue-200 text-sm">Open 24 Hours · 7 Days a Week</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                className="py-5 border-t"
                style={{
                    background: 'rgba(3, 8, 20, 0.95)',
                    borderColor: 'rgba(255,255,255,0.08)',
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-blue-400 text-xs">
                        © {new Date().getFullYear()} Nandi Hospital & Research Centre. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5 text-xs text-blue-400">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
