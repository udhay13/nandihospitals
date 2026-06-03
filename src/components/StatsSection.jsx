import AnimatedCounter from './AnimatedCounter';
import SectionHeading from './SectionHeading';

const stats = [
    { end: 5000, suffix: '+', label: 'Patients Treated', prefix: '' },
    { end: 20, suffix: '+', label: 'Years of Excellence', prefix: '' },
    { end: 10, suffix: '+', label: 'Specialist Doctors', prefix: '' },
    { end: 24, suffix: '×7', label: 'Emergency Services', prefix: '' },
    { end: 8, suffix: '', label: 'Speciality Departments', prefix: '' },
    { end: 98, suffix: '%', label: 'Patient Satisfaction', prefix: '' },
];

export default function StatsSection() {
    return (
        <section
            className="section-padding relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #050f28 0%, #0a2452 50%, #051828 100%)',
            }}
        >
            {/* Decorative elements */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 20% 50%, rgba(10,102,194,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(0,184,184,0.12) 0%, transparent 60%)',
                }}
            />

            {/* Animated rings */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 animate-spin-slow pointer-events-none"
                aria-hidden="true"
            />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 animate-spin-slow pointer-events-none"
                style={{ animationDirection: 'reverse' }}
                aria-hidden="true"
            />

            <div className="container-custom relative z-10">
                <SectionHeading
                    badge="Our Impact"
                    title="Numbers That"
                    highlight="Speak Volumes"
                    subtitle="Every statistic represents a life touched, a family reassured, and a promise kept."
                    light
                />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="stat-card rounded-2xl p-6"
                            style={{
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(12px)',
                            }}
                        >
                            <AnimatedCounter
                                end={stat.end}
                                suffix={stat.suffix}
                                prefix={stat.prefix}
                                label={stat.label}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
