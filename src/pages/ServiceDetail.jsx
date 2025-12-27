import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsArrowLeft, BsCheckCircleFill, BsArrowRight } from 'react-icons/bs';
import { services as servicesData } from '../data/services';
import SEO from '../components/shared/SEO';
import { useEffect } from 'react';

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = servicesData.find(item => item.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
                <h2 className="text-3xl font-light mb-4">Service Not Found</h2>
                <Link to="/services" className="text-white/60 hover:text-white transition-colors">
                    ← Back to Services
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen pt-20">
            {/* Background Effects */}
            <SEO
                title={service.name}
                description={service.description}
                canonical={`/services/${slug}`}
            />
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                     linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 py-12 lg:py-20">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/services')}
                    className="group inline-flex items-center gap-2 text-white/50 hover:text-white mb-12 transition-colors duration-300"
                >
                    <BsArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm tracking-widest uppercase font-medium">Back to Services</span>
                </motion.button>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Hero & Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Category Label */}
                        <div className="inline-block px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] tracking-[0.3em] text-white/40 uppercase font-medium mb-6">
                            {service.category === 'tech' ? 'Technical Expertise' : 'Business Expertise'}
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
                            {service.name}
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-white/60 leading-relaxed mb-12">
                            {service.description}
                        </p>

                        {/* CTA */}
                        <Link
                            to="/appointment"
                            className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-black rounded-full hover:bg-neutral-200 transition-all duration-300 font-medium"
                        >
                            <span>Book Consultation</span>
                            <BsArrowRight />
                        </Link>
                    </motion.div>

                    {/* Right Column: Features List */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 lg:p-12"
                    >
                        <h3 className="text-xl text-white font-light mb-8">Key Capabilities</h3>
                        <div className="space-y-6">
                            {service.features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="mt-1 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                                        <BsCheckCircleFill className="text-[10px] text-white/40 group-hover:text-white/80 transition-colors" />
                                    </div>
                                    <span className="text-white/70 font-light">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
