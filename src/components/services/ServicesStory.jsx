import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServicesStory = () => {
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
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-8"
                    >
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                            <p className="text-[10px] tracking-[0.3em] text-white/50 uppercase font-medium">
                                OUR COMMITMENT
                            </p>
                            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                            Excellence-Driven{' '}
                            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                Solutions
                            </span>
                            <br />
                            <span className="text-white/80">For Every Client</span>
                        </h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base lg:text-lg text-white/60 leading-relaxed max-w-3xl mx-auto"
                        >
                            Every engagement is approached with a commitment to excellence, precision, and long-term value.
                            From strategic consulting to comprehensive digital transformation, we deliver tailored solutions
                            that drive measurable business outcomes. Your growth is our priority, and results are how we
                            measure success.
                        </motion.p>

                        {/* Core Values Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 pt-16"
                        >
                            {[
                                { title: "Strategic Focus", desc: "Data-driven insights aligned with your business objectives" },
                                { title: "Proven Methods", desc: "Industry best practices refined over 7+ years" },
                                { title: "Lasting Impact", desc: "Sustainable solutions that deliver long-term value" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                    className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500"
                                >
                                    <h3 className="text-xl lg:text-2xl font-light text-white mb-4 leading-tight">{item.title}</h3>
                                    <p className="text-sm text-white/60 leading-relaxed font-light">{item.desc}</p>

                                    {/* Hover Gradient Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="pt-12"
                        >
                            <Link
                                to="/about"
                                className="group inline-flex items-center gap-4 text-white hover:text-white/80 transition-all duration-300"
                            >
                                <span className="w-16 h-[1px] bg-white group-hover:w-24 transition-all duration-500"></span>
                                <span className="text-[11px] font-semibold tracking-[0.3em] uppercase flex items-center gap-3">
                                    Learn More About Me
                                    <BsArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesStory;
