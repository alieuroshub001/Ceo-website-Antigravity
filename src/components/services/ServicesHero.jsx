import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ServicesHero = () => {
    return (
        <section className="relative pt-40 pb-32 bg-gradient-to-b from-black via-[#0a0a09] to-black overflow-hidden">
            {/* Elegant gradient effects */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-white/[0.03] to-transparent rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center items-center space-x-3 text-[10px] tracking-[0.3em] text-white/40 uppercase font-medium mb-12"
                    >
                        <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
                        <span className="text-white/20">/</span>
                        <span className="text-white/70">Services</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center space-y-8"
                    >
                        <div className="space-y-6">
                            <p className="text-[10px] tracking-[0.3em] text-white/50 uppercase font-medium flex items-center justify-center gap-3">
                                <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                                EXPERTISE THAT DRIVES RESULTS
                                <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                            </p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight leading-tight">
                                Strategic <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Services</span>
                                <br />
                                <span className="text-white/80">For Growth</span>
                            </h1>
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base lg:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed"
                        >
                            Empowering executives and organizations with transformative advisory services,
                            strategic leadership, and innovative solutions tailored to achieve sustainable excellence.
                        </motion.p>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
                        >
                            <Link
                                to="/appointment"
                                className="group relative px-10 py-5 bg-white text-black text-sm font-semibold tracking-wide rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-white/20 flex items-center space-x-3"
                            >
                                <span>Book Consultation</span>
                                <BsArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href="#services-list"
                                className="px-10 py-5 bg-white/5 text-white text-sm font-medium tracking-wide rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                            >
                                Explore Offerings
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 mt-16 border-t border-white/5"
                        >
                            <div className="space-y-2">
                                <div className="text-4xl lg:text-5xl font-light text-white">30+</div>
                                <div className="text-xs tracking-[0.2em] text-white/50 uppercase">Years Experience</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl lg:text-5xl font-light text-white">500+</div>
                                <div className="text-xs tracking-[0.2em] text-white/50 uppercase">Projects Delivered</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl lg:text-5xl font-light text-white">100%</div>
                                <div className="text-xs tracking-[0.2em] text-white/50 uppercase">Client Satisfaction</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
