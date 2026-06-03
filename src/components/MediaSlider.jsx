import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

/* ─────────────────────────────────────────────
   Slide data – images & videos from /public
───────────────────────────────────────────── */
const slides = [
  {
    type: 'video',
    src: '/videos/C0947.MP4',
    poster: '/images/DSC01427.JPG',
    headline: 'Advanced Multispeciality',
    highlight: 'Care in Salem',
    sub: `24\u00d77 Emergency \u00b7 Neuro \u00b7 Ortho \u00b7 Women\u2019s Health`,
    cta: 'Book Appointment',
    ctaTo: '/contact',
  },
  {
    type: 'image',
    src: '/images/DSC01427.JPG',
    headline: 'Where Healing Meets',
    highlight: 'Compassion',
    sub: 'State-of-the-art infrastructure with a human touch — Est. 2000.',
    cta: 'Our Departments',
    ctaTo: '/departments',
  },
  {
    type: 'video',
    src: '/videos/C0957.MP4',
    poster: '/images/DSC01431.JPG',
    headline: 'Stroke & Neuro',
    highlight: 'Excellence',
    sub: 'Rapid response stroke management and spine surgery by top specialists.',
    cta: 'Learn More',
    ctaTo: '/departments',
  },
  {
    type: 'image',
    src: '/images/DSC01434.JPG',
    headline: 'Your Health Journey',
    highlight: 'Starts Here',
    sub: 'Trusted by 5,000+ patients across Salem and surrounding regions.',
    cta: 'Patient Care',
    ctaTo: '/patient-care',
  },
  {
    type: 'video',
    src: '/videos/C1023.MP4',
    poster: '/images/DSC01441.JPG',
    headline: 'World-Class',
    highlight: 'Surgical Suite',
    sub: 'Modern operating theatres, ICU, and 100+ specialist doctors on call.',
    cta: 'Book Appointment',
    ctaTo: '/contact',
  },
  {
    type: 'image',
    src: '/images/DSC01443.JPG',
    headline: '20+ Years of',
    highlight: 'Trusted Care',
    sub: '24×7 emergency services, compassionate nursing, and expert consultants.',
    cta: 'About Us',
    ctaTo: '/about',
  },
  {
    type: 'image',
    src: '/images/DSC01456.JPG',
    headline: 'Women & Child',
    highlight: 'Health Experts',
    sub: 'Comprehensive maternity, gynaecology, and paediatrics under one roof.',
    cta: 'Book Appointment',
    ctaTo: '/contact',
  },
  {
    type: 'image',
    src: '/images/DSC01458.JPG',
    headline: 'Orthopaedics &',
    highlight: 'Spine Care',
    sub: 'Advanced joint replacement, spine surgery, and physiotherapy.',
    cta: 'Our Departments',
    ctaTo: '/departments',
  },
];

const SLIDE_DURATION = 5000; // ms per slide
const TRANSITION_MS = 900;

/* ─────────────────────────────────────────────
   Text animation variants
───────────────────────────────────────────── */
const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
  exit: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
};
const textItem = {
  hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -20, filter: 'blur(6px)', transition: { duration: 0.4, ease: 'easeIn' } },
};

/* ─────────────────────────────────────────────
   Video slide renderer
───────────────────────────────────────────── */
function VideoSlide({ slide, isActive }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    if (isActive) {
      ref.current.currentTime = 0;
      ref.current.play().catch(() => {});
    } else {
      ref.current.pause();
    }
  }, [isActive]);

  return (
    <video
      ref={ref}
      src={slide.src}
      poster={slide.poster}
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ transform: 'scale(1.06)' }}
    />
  );
}

/* ─────────────────────────────────────────────
   Image slide renderer
───────────────────────────────────────────── */
function ImageSlide({ slide }) {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      initial={{ scale: 1.08 }}
      animate={{ scale: 1.0 }}
      transition={{ duration: SLIDE_DURATION / 1000 + 1, ease: 'linear' }}
      style={{
        backgroundImage: `url(${slide.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   Progress bar for current slide
───────────────────────────────────────────── */
function ProgressBar({ index, total, paused }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="h-[3px] rounded-full overflow-hidden"
          style={{ width: i === index ? 48 : 20, background: 'rgba(255,255,255,0.25)', transition: 'width 0.4s ease' }}
        >
          {i === index && (
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #00B8B8, #0A66C2)' }}
              initial={{ width: '0%' }}
              animate={{ width: paused ? '0%' : '100%' }}
              transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
              key={`${index}-progress`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main MediaSlider
───────────────────────────────────────────── */
export default function MediaSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((idx) => {
    setCurrent((idx + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, SLIDE_DURATION);
    return () => clearTimeout(timerRef.current);
  }, [current, paused, next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: 560 }}
      aria-label="Hero media slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slides ── */}
      <AnimatePresence mode="crossfade">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: TRANSITION_MS / 1000, ease: 'easeInOut' }}
        >
          {slide.type === 'video' ? (
            <VideoSlide slide={slide} isActive={true} />
          ) : (
            <ImageSlide slide={slide} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Cinematic gradient overlay ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(3,8,30,0.88) 0%, rgba(3,8,30,0.5) 55%, rgba(3,8,30,0.2) 100%), ' +
            'linear-gradient(to top, rgba(3,8,30,0.75) 0%, transparent 40%)',
        }}
      />

      {/* ── Vignette ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 120px rgba(0,0,0,0.6)',
        }}
      />

      {/* ── Slide counter badge ── */}
      <div
        className="absolute top-28 right-8 z-30 hidden md:flex items-center gap-2 text-white text-xs font-semibold tracking-widest uppercase"
        style={{
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.18)',
          backdropFilter: 'blur(10px)',
          borderRadius: 999,
          padding: '6px 14px',
        }}
      >
        <span style={{ color: '#00B8B8' }}>{String(current + 1).padStart(2, '0')}</span>
        <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* ── Content ── */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              variants={textContainer}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex flex-col gap-4 max-w-2xl"
            >
              {/* Live badge */}
              <motion.div variants={textItem}>
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                  style={{
                    background: 'rgba(0,184,184,0.18)',
                    border: '1px solid rgba(0,184,184,0.45)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  Salem's Premier Multispeciality Hospital · Est. 2000
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={textItem}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
                style={{ fontFamily: "'Montserrat', sans-serif", textShadow: '0 4px 24px rgba(0,0,0,0.4)' }}
              >
                {slide.headline}{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #00B8B8 0%, #60A5FA 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {slide.highlight}
                </span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                variants={textItem}
                className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-xl"
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
              >
                {slide.sub}
              </motion.p>

              {/* CTA row */}
              <motion.div variants={textItem} className="flex flex-wrap gap-3 pt-2">
                <Link
                  to={slide.ctaTo}
                  id={`slider-cta-${current}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm transition-all duration-300 hover:scale-105 hover:brightness-110"
                  style={{
                    background: 'linear-gradient(135deg, #0A66C2, #00B8B8)',
                    boxShadow: '0 8px 32px rgba(10,102,194,0.45)',
                  }}
                >
                  <Calendar className="w-4 h-4" />
                  {slide.cta}
                </Link>
                <a
                  href="tel:+919876543210"
                  id="slider-emergency"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(220,38,38,0.8)',
                    border: '1.5px solid rgba(255,100,100,0.45)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 8px 24px rgba(220,38,38,0.3)',
                  }}
                >
                  <Phone className="w-4 h-4 animate-pulse" />
                  Emergency
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="slider-directions"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1.5px solid rgba(255,255,255,0.3)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <MapPin className="w-4 h-4" />
                  Directions
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div variants={textItem} className="flex flex-wrap gap-6 pt-4">
                {[
                  { v: '20+', l: 'Years' },
                  { v: '5,000+', l: 'Patients' },
                  { v: '24×7', l: 'Emergency' },
                  { v: '100+', l: 'Doctors' },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="text-2xl font-extrabold text-white">{s.v}</div>
                    <div className="text-[11px] uppercase tracking-widest text-blue-300 font-semibold mt-0.5">{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Bottom control bar ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5"
        style={{ background: 'linear-gradient(to top, rgba(3,8,30,0.7), transparent)' }}
      >
        {/* Progress dots */}
        <ProgressBar index={current} total={slides.length} paused={paused} />

        {/* Prev / Next arrows */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1.5px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <ChevronLeft className="w-5 h-5 text-white group-hover:text-teal-300 transition-colors" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1.5px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <ChevronRight className="w-5 h-5 text-white group-hover:text-teal-300 transition-colors" />
          </button>
        </div>
      </div>

      {/* ── Vertical slide thumbnail strip (desktop) ── */}
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-3"
      >
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative overflow-hidden rounded-md transition-all duration-500"
            style={{
              width: i === current ? 52 : 40,
              height: i === current ? 70 : 52,
              border: i === current ? '2px solid #00B8B8' : '1.5px solid rgba(255,255,255,0.2)',
              opacity: i === current ? 1 : 0.55,
              boxShadow: i === current ? '0 4px 20px rgba(0,184,184,0.4)' : 'none',
            }}
          >
            <img
              src={s.type === 'image' ? s.src : s.poster ?? '/images/DSC01427.JPG'}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {i === current && (
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(0,184,184,0.35) 100%)' }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
