import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2.5, label }) {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
    const animRef = useRef(null);

    useEffect(() => {
        if (!inView) return;

        const startTime = performance.now();
        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

        animRef.current = requestAnimationFrame(function tick(now) {
            const progress = Math.min((now - startTime) / (duration * 1000), 1);
            const easedProgress = easeOutQuart(progress);
            setCount(Math.floor(easedProgress * end));

            if (progress < 1) {
                animRef.current = requestAnimationFrame(tick);
            } else {
                setCount(end);
            }
        });

        return () => cancelAnimationFrame(animRef.current);
    }, [inView, end, duration]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold font-heading text-white mb-2 whitespace-nowrap">
                {prefix}{count.toLocaleString()}{suffix}
            </div>
            {label && (
                <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">{label}</div>
            )}
        </div>
    );
}
