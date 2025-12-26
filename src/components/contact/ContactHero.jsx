import { motion } from 'framer-motion';

const ContactHero = () => {
    return (
        <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
                {/* Grid Pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                }}></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium tracking-[0.2em] text-accent mb-6 uppercase backdrop-blur-sm">
                        Contact Me
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
                        Let's <span className="text-white font-medium">Engineer</span> Your Vision
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
                        Connect with me to architect scalable, future-proof software solutions that drive real business growth.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactHero;
