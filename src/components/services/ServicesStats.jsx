import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Counter = ({ value, duration = 2 }) => {
    const [isInView, setIsInView] = useState(false);
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));
    const ref = useRef(null);

    // Extract number and suffix from value (e.g., "7+" -> 7 and "+")
    const numericValue = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/[0-9]/g, '');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isInView) {
                    setIsInView(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isInView]);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, numericValue, { duration });
            return controls.stop;
        }
    }, [isInView, numericValue, duration, count]);

    return (
        <motion.span ref={ref} className="text-5xl lg:text-6xl font-light text-white group-hover:scale-110 transition-transform duration-500">
            <motion.span>{rounded}</motion.span>
            {suffix}
        </motion.span>
    );
};

const ServicesStats = () => {
    const stats = [
        { value: "7+", label: "Years Experience" },
        { value: "500+", label: "Projects Delivered" },
        { value: "100+", label: "Organizations Served" },
        { value: "100%", label: "Client Satisfaction" }
    ];

    return (
        <section className="relative py-32 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                     linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}></div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-white/5 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                        <p className="text-[10px] tracking-[0.3em] text-white/50 uppercase font-medium">
                            PROVEN TRACK RECORD
                        </p>
                        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                        Excellence in{' '}
                        <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            Numbers
                        </span>
                    </h2>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500"
                        >
                            {/* Content */}
                            <div className="flex flex-col items-center text-center space-y-4">
                                <Counter value={stat.value} duration={2.5} />
                                <span className="text-xs tracking-[0.2em] text-white/60 uppercase font-medium">
                                    {stat.label}
                                </span>
                            </div>

                            {/* Hover Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesStats;
