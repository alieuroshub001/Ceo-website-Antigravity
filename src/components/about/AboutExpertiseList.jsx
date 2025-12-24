import { motion } from 'framer-motion';

const AboutExpertiseList = () => {
    const list = [
        "Business Strategy & Digital Growth",
        "Operations Management & Automation",
        "CRM & Client Lifecycle Solutions",
        "Digital Funnels & Brand Positioning",
        "Team Management & Communication Systems"
    ];

    return (
        <section className="bg-gradient-to-b from-black via-[#0a0a09] to-black py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                    <div className="md:col-span-4">
                        <div className="sticky top-32">
                            <p className="text-[10px] tracking-[0.4em] md:tracking-[0.5em] text-white/50 uppercase mb-4 md:mb-6 font-light">Expertise</p>
                            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight mb-6 md:mb-8">
                                My Services & <br /> Capabilities
                            </h2>
                            <p className="text-white/60 text-sm leading-relaxed mb-6 md:mb-8 font-light">
                                Delivering comprehensive solutions tailored to modern business needs.
                            </p>
                            <a href="/contact" className="inline-flex items-center space-x-4 text-xs tracking-widest text-white border-b border-white/30 pb-1 hover:border-white transition-colors uppercase">
                                <span>Start a Project</span>
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-8">
                        <div className="">
                            {list.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-baseline space-x-6 md:space-x-8 border-b border-white/5 py-6 md:py-8 group hover:bg-black/50 transition-colors px-4 -mx-4 rounded-xl"
                                >
                                    <span className="text-xs md:text-sm text-white/50 font-mono">0{idx + 1}</span>
                                    <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light group-hover:text-white/90 transition-colors">
                                        {item}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutExpertiseList;
