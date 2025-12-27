import { motion } from 'framer-motion';
import { BsCheckCircleFill, BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import sirNabeel from '../../assets/sir-nabeel.png';

const ServicesIntro = () => {
    const highlights = [
        'Strategic Leadership & Advisory',
        'Digital Transformation Excellence',
        'Board-Level Governance',
        'Proven Track Record of Success'
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

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Section Label */}
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-gradient-to-r from-white/50 to-transparent"></span>
                            <p className="text-[10px] tracking-[0.3em] text-white/50 uppercase font-medium">
                                WHY CHOOSE US
                            </p>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                                Delivering Excellence
                                <br />
                                <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    At Every Level
                                </span>
                            </h2>

                            <h3 className="text-xl lg:text-2xl text-white/70 font-light leading-relaxed">
                                Tailored Solutions to Accelerate Growth & Operational Excellence
                            </h3>
                        </div>

                        {/* Description */}
                        <p className="text-base text-white/60 leading-relaxed max-w-xl">
                            As a seasoned executive and strategic advisor with over 7 years of experience,
                            I partner with organizations to drive transformation, optimize performance, and
                            achieve sustainable competitive advantage in today's dynamic business landscape.
                        </p>

                        {/* Highlights */}
                        <div className="space-y-4 pt-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <BsCheckCircleFill className="text-white/40 text-sm flex-shrink-0" />
                                    <span className="text-sm text-white/70 tracking-wide">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="pt-8"
                        >
                            <Link
                                to="/appointment"
                                className="group inline-flex items-center gap-4 text-white hover:text-white/80 transition-all duration-300"
                            >
                                <span className="w-16 h-[1px] bg-white group-hover:w-24 transition-all duration-500"></span>
                                <span className="text-[11px] font-semibold tracking-[0.3em] uppercase flex items-center gap-3">
                                    Schedule Consultation
                                    <BsArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Single Image Block */}
                    <div className="relative h-[500px] lg:h-auto w-full flex items-end justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-md lg:absolute lg:right-0 lg:bottom-0 z-0"
                        >
                            {/* Image with Gradient Mask */}
                            <div className="relative">
                                <img
                                    src={sirNabeel}
                                    className="w-full h-auto object-contain mask-image-gradient"
                                    alt="Sheikh Nabeel - Executive Leadership"
                                    style={{
                                        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                                    }}
                                />

                                {/* Bottom Fade Overlay for extra blending */}
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesIntro;
