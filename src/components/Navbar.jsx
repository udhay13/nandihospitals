import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ChevronDown, Menu, X, Heart, MapPin } from 'lucide-react';

const navItems = [
    { label: 'Home', path: '/' },
    {
        label: 'Departments',
        path: '/departments',
        dropdown: [
            { label: '24×7 Emergency & Trauma', path: '/departments#emergency' },
            { label: 'Neurosciences', path: '/departments#neuro' },
            { label: 'Stroke Care', path: '/departments#stroke' },
            { label: 'Spine & Orthopaedics', path: '/departments#spine' },
            { label: 'Obstetrics & Gynaecology', path: '/departments#obs' },
            { label: 'Fertility & Reproductive', path: '/departments#fertility' },
            { label: 'Advanced Diagnostics', path: '/departments#diagnostics' },
            { label: 'Critical Care', path: '/departments#critical' },
        ],
    },
    { label: 'About Us', path: '/about' },
    { label: 'Patient Care', path: '/patient-care' },
    { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        // Home page has a full-viewport dark hero — only go solid after scrolling past it.
        // All other pages have a ~320px dark header — switch after clearing that.
        const threshold = location.pathname === '/'
            ? window.innerHeight * 0.85
            : 320;

        // Reset immediately when route changes (new page starts at top with dark hero)
        setScrolled(window.scrollY > threshold);

        const handleScroll = () => setScrolled(window.scrollY > threshold);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    useEffect(() => {
        setMobileOpen(false);
        setActiveDropdown(null);
    }, [location]);

    return (
        <>
            {/* Floating Navbar wrapper — shrinks inward on scroll */}
            <div
                className="fixed top-0 left-0 right-0 z-50 pt-4"
                style={{
                    paddingLeft: scrolled ? '4rem' : '1rem',
                    paddingRight: scrolled ? '4rem' : '1rem',
                    transition: 'padding 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
            >
                <motion.nav
                    initial={{ y: -120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="max-w-7xl mx-auto transition-all duration-500"
                    style={{
                        borderRadius: '999px',
                        padding: '10px 24px',
                        background: scrolled
                            ? 'rgba(8, 15, 40, 0.88)'
                            : 'rgba(8, 15, 40, 0.50)',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        border: '1px solid rgba(255,255,255,0.18)',
                        boxShadow: scrolled
                            ? '0 8px 40px rgba(0,0,0,0.40), 0 0 0 1px rgba(255,255,255,0.08)'
                            : '0 8px 32px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05)',
                        transition: 'background 0.4s ease, box-shadow 0.4s ease',
                    }}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <div className="relative">
                                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                                    style={{ background: 'linear-gradient(135deg, #0A66C2, #00B8B8)' }}>
                                    <Heart className="w-5 h-5 text-white" fill="white" />
                                </div>
                                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse border-2 border-white" />
                            </div>
                            <div>
                                <div className="font-bold text-base font-heading leading-none text-white">
                                    Nandi Hospital
                                </div>
                                <div className="text-[10px] font-medium text-blue-200">
                                    & Research Centre
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-0.5">
                            {navItems.map((item) => (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {item.dropdown ? (
                                        <button
                                            className="flex items-center gap-1 px-3.5 py-2 rounded-full font-medium text-sm text-white/90 hover:text-white hover:bg-white/12 transition-all duration-200"
                                        >
                                            {item.label}
                                            <ChevronDown
                                                className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                    ) : (
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `px-3.5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${isActive
                                                    ? 'text-white bg-white/18'
                                                    : 'text-white/90 hover:text-white hover:bg-white/12'
                                                }`
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    )}

                                    {/* Dropdown */}
                                    <AnimatePresence>
                                        {item.dropdown && activeDropdown === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-3 w-64 rounded-2xl shadow-xl overflow-hidden z-50"
                                                style={{
                                                    background: 'rgba(255, 255, 255, 0.97)',
                                                    backdropFilter: 'blur(20px)',
                                                    border: '1px solid rgba(10, 102, 194, 0.12)',
                                                    boxShadow: '0 20px 60px rgba(10, 102, 194, 0.18)',
                                                }}
                                            >
                                                <div className="p-2">
                                                    {item.dropdown.map((sub, i) => (
                                                        <NavLink
                                                            key={i}
                                                            to={sub.path}
                                                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-150"
                                                        >
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                                                            {sub.label}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <a
                                href="tel:+919876543210"
                                className="flex items-center gap-1.5 text-xs font-bold text-red-300"
                            >
                                <Phone className="w-3.5 h-3.5 animate-pulse" />
                                24×7 Emergency
                            </a>
                            <Link
                                to="/contact"
                                className="btn-primary text-sm px-5 py-2"
                                id="navbar-book-appointment"
                                style={{ borderRadius: '999px' }}
                            >
                                Book Appointment
                            </Link>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 rounded-full text-white hover:bg-white/10 transition-all"
                            aria-label="Toggle menu"
                        >
                            <motion.div
                                animate={{ rotate: mobileOpen ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </motion.div>
                        </button>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu — compact right-side dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -8 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="fixed z-40"
                        style={{
                            top: '76px',
                            right: '16px',
                            width: '220px',
                            background: 'rgba(8, 15, 40, 0.95)',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                            borderRadius: '16px',
                            border: '1px solid rgba(255,255,255,0.12)',
                            boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
                        }}
                    >
                        <div className="px-3 py-3 space-y-0.5">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                >
                                    {item.dropdown ? (
                                        <div>
                                            <button
                                                onClick={() =>
                                                    setActiveDropdown(
                                                        activeDropdown === item.label ? null : item.label
                                                    )
                                                }
                                                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-white/90 hover:bg-white/10 transition-all"
                                            >
                                                {item.label}
                                                <ChevronDown
                                                    className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {activeDropdown === item.label && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="ml-3 mt-0.5 space-y-0.5 overflow-hidden"
                                                    >
                                                        {item.dropdown.map((sub, j) => (
                                                            <NavLink
                                                                key={j}
                                                                to={sub.path}
                                                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-white/70 hover:text-white hover:bg-white/10 transition-all"
                                                            >
                                                                <div className="w-1 h-1 rounded-full bg-teal-400" />
                                                                {sub.label}
                                                            </NavLink>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `block px-3 py-2 rounded-xl text-sm font-medium transition-all ${isActive
                                                    ? 'text-white bg-white/15'
                                                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                                                }`
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    )}
                                </motion.div>
                            ))}

                            <div className="pt-2 mt-2 space-y-2 border-t border-white/10">
                                <a
                                    href="tel:+919876543210"
                                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-red-300 hover:bg-white/10 transition-all"
                                >
                                    <Phone className="w-3.5 h-3.5 animate-pulse" />
                                    24×7 Emergency
                                </a>
                                <Link
                                    to="/contact"
                                    id="mobile-book-appointment"
                                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-white transition-all hover:opacity-90"
                                    style={{ background: 'linear-gradient(135deg, #0A66C2, #00B8B8)' }}
                                >
                                    Book Appointment
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
