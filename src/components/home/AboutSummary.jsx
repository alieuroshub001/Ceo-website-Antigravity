import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const AboutSummary = () => {
    const socialLinks = [
        { name: 'Facebook', icon: Facebook, url: '#' },
        { name: 'Instagram', icon: Instagram, url: '#' },
        { name: 'LinkedIn', icon: Linkedin, url: '#' },
        { name: 'YouTube', icon: Youtube, url: '#' }
    ];

    return (
        <section className="relative py-32 bg-gradient-to-b from-black via-[#0a0a09] to-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[140px]"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <div className="inline-block">
                                <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-medium">About Me</span>
                                <div className="w-12 h-[1px] bg-gradient-to-r from-white/50 to-transparent mt-2"></div>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                                Global Strategist &<br />
                                <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    Digital Transformer
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-base text-white/60 leading-relaxed">
                                I'm Sheikh Nabeel – Entrepreneur, Business Strategist & CEO of EurosHub. With over 7 years of experience, I help founders, startups, and global teams simplify complex operations, implement scalable systems, and grow through digital innovation.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link
                                to="/about"
                                className="group inline-flex items-center space-x-3 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <span className="text-sm font-medium text-white tracking-wide">Learn More About Me</span>
                                <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Side - Stats & Social */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-12"
                    >
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.04] transition-all duration-300">
                                <div className="text-4xl font-light text-white mb-2">7+</div>
                                <div className="text-xs text-white/50 tracking-wider uppercase">Years Experience</div>
                            </div>

                            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.04] transition-all duration-300">
                                <div className="text-4xl font-light text-white mb-2">100+</div>
                                <div className="text-xs text-white/50 tracking-wider uppercase">Projects Delivered</div>
                            </div>

                            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.04] transition-all duration-300">
                                <div className="text-4xl font-light text-white mb-2">50+</div>
                                <div className="text-xs text-white/50 tracking-wider uppercase">Global Clients</div>
                            </div>

                            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.04] transition-all duration-300">
                                <div className="text-4xl font-light text-white mb-2">15+</div>
                                <div className="text-xs text-white/50 tracking-wider uppercase">Countries Served</div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-8">
                            <p className="text-[10px] tracking-widest text-white/30 uppercase mb-6">Connect With Me</p>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            className="flex items-center space-x-3 px-4 py-3 bg-white/[0.02] border border-white/5 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                                        >
                                            <Icon className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                                            <span className="text-xs text-white/50 group-hover:text-white transition-colors">{social.name}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSummary;
