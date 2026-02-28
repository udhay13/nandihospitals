import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Wait for the page to render (dealing with Framer Motion AnimatePresence mode="wait")
            const id = hash.replace('#', '');
            let attempts = 0;

            const scrollInterval = setInterval(() => {
                const el = document.getElementById(id);
                if (el) {
                    const navbarOffset = 100; // floating navbar height + spacing
                    const top = el.getBoundingClientRect().top + window.scrollY - navbarOffset;
                    window.scrollTo({ top, behavior: 'smooth' });
                    clearInterval(scrollInterval);
                } else if (attempts >= 10) {
                    // Give up after 1 second
                    clearInterval(scrollInterval);
                }
                attempts++;
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [pathname, hash]);

    return null;
}
