import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, Users, Award } from 'lucide-react';
import sirNabeel from '../../assets/sn.png';

const WhyChooseMe = () => {
    const reasons = [
        {
            icon: Target,
            title: "Results-Driven Approach",
            description: "Every strategy is designed with measurable outcomes in mind, ensuring your investment translates into tangible business growth."
        },
        {
            icon: Zap,
            title: "Rapid Implementation",
            description: "Leveraging proven frameworks and automation tools, I deliver fast results without compromising quality or strategic vision."
        },
        {
            icon: Users,
            title: "Hands-On Collaboration",
            description: "I work directly with your team, ensuring seamless integration and knowledge transfer for sustainable long-term success."
        },
        {
            icon: Award,
            title: "Proven Track Record",
            description: "With 7+ years of experience and 100+ successful projects, I bring expertise across industries and business stages."
        }
    ];

    return (
        <section className="relative py-12 bg-gradient-to-b from-black via-[#0a0a09] to-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 right-1/4 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[140px]"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src={sirNabeel}
                                alt="Sheikh Nabeel"
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            {/* Stats Overlay */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                        <div className="text-3xl font-light text-white">7+</div>
                                        <div className="text-xs text-white/60 tracking-wider uppercase mt-1">Years Experience</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                        <div className="text-3xl font-light text-white">100+</div>
                                        <div className="text-xs text-white/60 tracking-wider uppercase mt-1">Projects Done</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Header */}
                        <div>
                            <div className="inline-block mb-6">
                                <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                                    <Award className="w-3 h-3 text-white/40" />
                                    <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-medium">Why Choose Me</span>
                                </div>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                                The Best Service for<br />
                                <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    My Clients
                                </span>
                            </h2>

                            <p className="text-base text-white/50 leading-relaxed">
                                As a seasoned entrepreneur and digital strategist, I offer end-to-end solutions for brands aiming to grow, scale, and lead in a competitive digital space.
                            </p>
                        </div>

                        {/* Reasons List */}
                        <div className="space-y-2">
                            {reasons.map((reason, idx) => {
                                const Icon = reason.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + idx * 0.1 }}
                                        className="group flex items-start space-x-4 p-3 rounded-xl hover:bg-white/[0.02] transition-all duration-300"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                                                <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-light text-white mb-2">
                                                {reason.title}
                                            </h3>
                                            <p className="text-sm text-white/50 leading-relaxed">
                                                {reason.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                            <Link
                                to="/about"
                                className="group inline-flex items-center space-x-3 px-8 py-4 bg-white text-black text-sm font-semibold tracking-wide rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-white/20"
                            >
                                <span>Learn More About My Approach</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;
