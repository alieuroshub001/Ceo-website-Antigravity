import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';

const ServicesExpertise = () => {
    const [activeTab, setActiveTab] = useState('business');

    const filteredItems = servicesData.filter(item => item.category === activeTab);

    return (
        <section className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
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
                    className="text-center mb-16 max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                        <p className="text-[10px] tracking-[0.3em] text-white/50 uppercase font-medium">
                            MY EXPERTISE
                        </p>
                        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
                        Expertise That{' '}
                        <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            Drives Results
                        </span>
                    </h2>
                    <p className="text-base text-white/60 leading-relaxed max-w-2xl mx-auto mb-12">
                        My portfolio spans strategic business consulting and next-gen tech implementation.
                    </p>

                    {/* Category Tabs */}
                    <div className="inline-flex items-center gap-2 p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                        <button
                            onClick={() => setActiveTab('business')}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${activeTab === 'business'
                                ? 'bg-white text-black shadow-lg shadow-white/10'
                                : 'text-white/60 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            Business Expertise
                        </button>
                        <button
                            onClick={() => setActiveTab('tech')}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${activeTab === 'tech'
                                ? 'bg-white text-black shadow-lg shadow-white/10'
                                : 'text-white/60 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            Tech Expertise
                        </button>
                    </div>
                </motion.div>

                {/* Expertise Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 min-h-[400px]"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500"
                            >
                                {/* Category Badge */}
                                <span className="text-[9px] tracking-widest font-medium uppercase mb-4 inline-block px-3 py-1.5 rounded-lg bg-white/5 text-white/50 border border-white/10">
                                    {item.category}
                                </span>

                                {/* Service Name */}
                                <h3 className="text-lg lg:text-xl text-white font-light mb-4 leading-tight">{item.name}</h3>

                                {/* Explore Link */}
                                <Link
                                    to={`/services/${item.slug}`}
                                    className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase group-hover:text-white/70 transition-colors cursor-pointer relative z-10"
                                >
                                    <span>Explore Service</span>
                                    <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">→</span>
                                </Link>

                                {/* Hover Gradient Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesExpertise;
