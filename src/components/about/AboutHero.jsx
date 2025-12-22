import { motion } from 'framer-motion';

const AboutHero = () => {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden pt-20">
            {/* Abstract Background Art */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-[100px] rotate-[-10deg]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="text-xs md:text-sm font-bold tracking-[0.5em] text-accent uppercase mb-6">
                        Executive Portfolio
                    </p>
                    <h1 className="text-5xl md:text-8xl font-serif text-white uppercase tracking-tight mb-8 leading-[0.9]">
                        Sheikh <span className="text-white/20 italic font-sans font-light">Nabeel</span>
                    </h1>
                    <div className="max-w-xl mx-auto">
                        <p className="text-white/60 font-light text-sm md:text-base leading-relaxed">
                            Navigate the complexities of the digital age with a partner who understands the intersection of strategy, technology, and leadership.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
