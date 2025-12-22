import { motion } from 'framer-motion';

const SkillsSection = () => {
    const skills = [
        "Digital Transformation & Automation",
        "CRM Systems",
        "Project & Operations Management",
        "Growth Marketing & Funnel Strategy",
        "Brand Building & Market Positioning",
        "Client Experience & Account Management",
        "Business Strategy & Consulting"
    ];

    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <p className="text-[10px] tracking-[0.5em] text-accent font-bold uppercase mb-6">EXPERTISE</p>
                        <h2 className="text-3xl md:text-5xl font-light text-white uppercase mb-8">ABOUT MY SKILLS</h2>
                        <p className="text-white/60 font-light leading-relaxed uppercase">
                            Over 7 years of Experience I Specilaizes in:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {skills.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center space-x-4 border-b border-white/10 pb-4"
                            >
                                <span className="w-2 h-2 bg-accent rounded-full"></span>
                                <span className="text-sm md:text-lg text-white font-light tracking-wide uppercase">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
