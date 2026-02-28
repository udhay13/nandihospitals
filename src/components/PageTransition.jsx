import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const variants = {
    initial: {
        opacity: 0,
        y: 24,
        scale: 0.98,
        filter: 'blur(6px)',
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
    },
    out: {
        opacity: 0,
        y: -16,
        scale: 0.98,
        filter: 'blur(4px)',
    },
};

const transition = {
    type: 'spring',
    stiffness: 260,
    damping: 28,
    mass: 0.6,
};

export default function PageTransition({ children }) {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={location.pathname}
                initial="initial"
                animate="in"
                exit="out"
                variants={variants}
                transition={transition}
                style={{ willChange: 'opacity, transform, filter' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
