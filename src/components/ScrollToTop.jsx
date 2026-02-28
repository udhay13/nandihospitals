import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Wait for the page to render, then scroll to the anchor with navbar offset
            const id = hash.replace('#', '');
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    const navbarOffset = 100; // floating navbar height + spacing
                    const top = el.getBoundingClientRect().top + window.scrollY - navbarOffset;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [pathname, hash]);

    return null;
}
