import { motion } from 'framer-motion';

const TransformationQuote = () => {
    return (
        <section className="py-32 bg-black border-y border-white/5">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-5xl mx-auto"
                >
                    <p className="text-[10px] tracking-[1em] text-white/30 uppercase mb-12">
                        TRANSFORMATION
                    </p>
                    <h2 className="text-4xl md:text-7xl font-light tracking-tight text-white leading-[1.1] mb-16">
                        Everything great starts with <span className="text-accent font-medium">Digital</span> and ends with <span className="italic opacity-50">Strategy</span>.
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-left">
                        <div className="max-w-xs">
                            <h4 className="text-xs tracking-[0.3em] font-bold text-white mb-4 uppercase">The Vision</h4>
                            <p className="text-[11px] font-light text-white/40 leading-relaxed uppercase">
                                Navigating the complexities of AI and global markets requires a unique blend of foresight and experience.
                            </p>
                        </div>
                        <div className="w-px h-12 bg-white/10 hidden md:block"></div>
                        <div className="max-w-xs">
                            <h4 className="text-xs tracking-[0.3em] font-bold text-white mb-4 uppercase">The Network</h4>
                            <p className="text-[11px] font-light text-white/40 leading-relaxed uppercase">
                                Connect with a global collective of C-Suite veterans and industry pioneers dedicated to your growth.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TransformationQuote;
