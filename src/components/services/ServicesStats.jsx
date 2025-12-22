import { motion } from 'framer-motion';

const ServicesStats = () => {
    const stats = [
        { value: "100+", label: "Happy Client" },
        { value: "100+", label: "Project Done" },
        { value: "7+", label: "Experience" },
        { value: "100+", label: "Cool Number" }
    ];

    return (
        <section className="bg-accent py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-black/10">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-5xl md:text-6xl font-light text-black mb-2">{stat.value}</span>
                            <span className="text-xs font-bold tracking-[0.2em] text-black/60 uppercase">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesStats;
