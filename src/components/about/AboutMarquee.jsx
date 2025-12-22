import { motion } from 'framer-motion';

const AboutMarquee = () => {
    const items = [
        "Business Strategy",
        "Digital Systems",
        "Operations",
        "Client Experience", // Shortened for cleaner marquee
        "Growth",
        "Management"
    ];

    return (
        <section className="py-16 bg-black border-y border-white/5 overflow-hidden">
            <div className="relative">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

                <div className="flex whitespace-nowrap">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        className="flex space-x-16 items-center"
                    >
                        {[...items, ...items, ...items, ...items].map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-16">
                                <span className={`text-3xl md:text-5xl font-light uppercase tracking-tight ${idx % 2 === 0 ? 'text-white/20' : 'text-white/80'}`}>
                                    {item}
                                </span>
                                <span className="w-2 h-2 bg-accent rounded-full opacity-50"></span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMarquee;
