import { motion } from 'framer-motion';
import sirNabeelImage from '../../assets/sir-nabeel.png';

const AboutHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0a0a09] to-black">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20 pb-12">
                <div className="grid lg:grid-cols-2 gap-0 items-center">
                    {/* Left Side: Content */}
                    <div className="text-center lg:text-left space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            <p className="text-xs md:text-sm font-light tracking-[0.5em] text-white/50 uppercase">
                                Strategic Advisor
                            </p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight leading-tight">
                                Sheikh <span className="text-white">Nabeel</span>
                            </h1>
                            <div className="max-w-xl mx-auto lg:mx-0">
                                <p className="text-white/60 font-light text-sm md:text-base leading-relaxed">
                                    Empowering businesses to scale through innovation, strategy, and executive leadership.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Portrait */}
                    <div className="relative flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-full max-w-lg"
                        >
                            {/* Glow Effect Behind Image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 rounded-2xl blur-3xl"></div>

                            {/* Image Container */}
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={sirNabeelImage}
                                    alt="Sheikh Nabeel - Strategic Advisor"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
