import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesHero = () => {
    return (
        <section className="relative pt-40 pb-20 bg-black overflow-hidden">
            {/* Subtle abstract background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl font-light text-white uppercase tracking-tight mb-6">
                        Services
                    </h1>
                    <div className="flex justify-center items-center space-x-3 text-[11px] tracking-[0.2em] text-white/40 uppercase font-medium">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="text-accent/50">/</span>
                        <span className="text-accent">Services</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesHero;
