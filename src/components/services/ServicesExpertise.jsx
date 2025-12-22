import { motion } from 'framer-motion';

const ServicesExpertise = () => {
    const expertiseItems = [
        { name: "DevOps", category: "tech" },
        { name: "Project Management", category: "business" },
        { name: "SaaS Solutions", category: "tech" },
        { name: "Data Analytics and Insights", category: "business" },
        { name: "Market Research", category: "business" },
        { name: "AI Solutions", category: "tech" },
        { name: "UI/UX Design", category: "tech" },
        { name: "ERP/CRM Software", category: "business" },
        { name: "E-Commerce Solutions", category: "tech" },
        { name: "Database Management", category: "business" },
        { name: "Cloud Solutions", category: "tech" },
        { name: "Staff Augmentation", category: "tech" },
        { name: "Cybersecurity", category: "tech" },
        { name: "Data Mining", category: "business" },
        { name: "Design & Development", category: "tech" },
        { name: "Maintenance & Support", category: "business" },
        { name: "Quality Assurance", category: "business" },
        { name: "Web Development", category: "tech" },
        { name: "Data Extraction/ETL", category: "business" },
        { name: "Virtual Assistance", category: "business" }
    ];

    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div>
                        <p className="text-[10px] tracking-[0.5em] text-accent font-bold uppercase mb-6">OUR EXPERTISE</p>
                        <h2 className="text-4xl md:text-5xl font-light text-white uppercase leading-tight">Expertise That <br /> Drives Results</h2>
                    </div>
                    <div className="max-w-md md:text-right mt-8 md:mt-0">
                        <p className="text-white/50 text-sm leading-relaxed">
                            Our portfolio spans strategic business consulting and next-gen tech implementation.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {expertiseItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white/5 border border-white/5 p-8 group hover:bg-white/10 hover:border-accent/20 transition-all duration-300"
                        >
                            <span className={`text-[9px] tracking-widest font-bold uppercase mb-4 inline-block px-2 py-1 rounded-sm ${item.category === 'tech' ? 'bg-blue-500/20 text-blue-300' : 'bg-green-500/20 text-green-300'}`}>
                                {item.category}
                            </span>
                            <h3 className="text-xl text-white font-light uppercase mb-4">{item.name}</h3>
                            <a href="#" className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-widest text-white/40 uppercase group-hover:text-accent transition-colors">
                                <span>Explore Service</span>
                                <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all">→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesExpertise;
