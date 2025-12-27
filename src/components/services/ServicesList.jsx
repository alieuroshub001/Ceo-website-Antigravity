import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';

const ServicesList = () => {
    // Filter out the "highlight" services if they are duplicates of standard ones, 
    // but in our data structure, they are distinct or aliases. 
    // We will render all services that have a 'description' to ensure valid cards.
    const allServices = services.filter(service => service.description);

    return (
        <section id="services-list" className="relative py-32 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                     linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                        <p className="text-[10px] tracking-[0.3em] text-white/50 uppercase font-medium">
                            OUR EXPERTISE
                        </p>
                        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
                        Comprehensive Executive
                        <br />
                        <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            Advisory Services
                        </span>
                    </h2>
                    <p className="text-base text-white/60 leading-relaxed max-w-2xl mx-auto">
                        Leveraging 7+ years of experience to deliver transformative solutions for boards, C-suite executives, and growing organizations.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {allServices.map((service, idx) => (
                        <Link
                            to={service.link || `/services/${service.slug}`}
                            key={idx}
                            className="block"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, duration: 0.6 }}
                                className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 h-full flex flex-col"
                            >
                                {/* Number Badge */}
                                <div className="absolute -top-3 -left-3 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center z-10">
                                    <span className="text-xs lg:text-sm font-light text-white">{String(idx + 1).padStart(2, '0')}</span>
                                </div>

                                {/* Content */}
                                <div className="space-y-4 lg:space-y-6 pt-4 flex-grow">
                                    <h3 className="text-xl lg:text-2xl font-light text-white leading-tight group-hover:text-white transition-colors">
                                        {service.title || service.name}
                                    </h3>
                                    <p className="text-sm text-white/60 leading-relaxed font-light line-clamp-3">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Arrow for indication */}
                                <div className="mt-6 pt-6 border-t border-white/5 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <BsArrowRight className="text-white/60" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-20 pt-20 border-t border-white/5"
                >
                    <h3 className="text-2xl lg:text-3xl font-light text-white mb-6">
                        Ready to Transform Your Organization?
                    </h3>
                    <p className="text-base text-white/60 mb-10 max-w-2xl mx-auto">
                        Schedule a consultation to discuss how we can help achieve your strategic objectives.
                    </p>
                    <Link
                        to="/appointment"
                        className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-black text-sm font-semibold tracking-wide rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-white/20"
                    >
                        <span>Book Consultation</span>
                        <BsArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesList;
