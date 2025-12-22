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
        <section className="bg-black pb-32">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    <div className="md:col-span-4">
                        <div className="sticky top-32">
                            <p className="text-[10px] tracking-[0.4em] text-accent font-bold uppercase mb-6">Expertise</p>
                            <h2 className="text-3xl md:text-4xl font-light text-white uppercase leading-tight mb-8">
                                My Services & <br /> Capabilities
                            </h2>
                            <p className="text-white/40 text-sm leading-relaxed mb-8">
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
                                    className="flex items-baseline space-x-8 border-b border-white/5 py-8 group hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-sm"
                                >
                                    <span className="text-sm text-accent/70 font-mono">0{idx + 1}</span>
                                    <h3 className="text-xl md:text-2xl text-white/80 font-light uppercase group-hover:text-white transition-colors">
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
