import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { services as servicesData } from '../../data/services';

const ServicesIndex = () => {
    const targetRef = useRef(null);
    const contentRef = useRef(null);
    const [xRange, setXRange] = useState(["0px", "0px"]);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    useEffect(() => {
        const calculateScroll = () => {
            if (contentRef.current) {
                const contentWidth = contentRef.current.scrollWidth;
                const windowWidth = window.innerWidth;
                const buffer = windowWidth * 0.2;
                const distance = contentWidth - windowWidth + buffer;
                setXRange(["0px", `-${distance}px`]);
            }
        };

        calculateScroll();
        window.addEventListener('resize', calculateScroll);
        return () => window.removeEventListener('resize', calculateScroll);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], xRange);

    const services = servicesData.filter(s => s.isHighlight);

    return (
        <section className="bg-black py-20 lg:h-[300vh] lg:py-0 relative">
            <div className="lg:sticky lg:top-0 flex flex-col lg:h-screen overflow-hidden">
                {/* Header Section */}
                <div className="pt-8 pb-8 px-6 lg:pt-16 lg:px-16">
                    <div className="inline-block mb-4">
                        <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-medium">What I Do</span>
                        <div className="w-12 h-[1px] bg-gradient-to-r from-white/50 to-transparent mt-2"></div>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-light text-white tracking-tight leading-tight">
                        Services &<br />
                        <span className="text-white/60">Expertise</span>
                    </h2>
                </div>

                {/* Content Container */}
                <div className="lg:flex-1 lg:flex lg:items-center relative">
                    {/* Mobile: Horizontal Scroll Snap | Desktop: Scroll Animation */}
                    <div className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-8 scrollbar-hide">
                        {services.map((service, idx) => (
                            <div key={idx} className="snap-center shrink-0 w-[85vw]">
                                <ServiceCard service={service} />
                            </div>
                        ))}
                    </div>

                    <motion.div ref={contentRef} style={{ x }} className="hidden lg:flex gap-12 pl-16 pr-16">
                        {services.map((service, idx) => (
                            <div key={idx} className="w-[38vw] shrink-0">
                                <ServiceCard service={service} />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service }) => (
    <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[65vh] bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group">
        {/* Image Section */}
        <div className="relative h-1/2 overflow-hidden">
            <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
        </div>

        {/* Content Section */}
        <div className="h-1/2 p-6 lg:p-10 flex flex-col justify-between">
            <div>
                <h3 className="text-xl lg:text-3xl font-light text-white mb-3 lg:mb-4 leading-tight">
                    {service.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed line-clamp-3 lg:line-clamp-none">
                    {service.description}
                </p>
            </div>

            {/* CTA Link */}
            <Link
                to={service.link}
                className="group/link inline-flex items-center space-x-3 text-white self-start mt-4 lg:mt-6"
                aria-label={`Learn more about ${service.title}`}
            >
                <span className="text-xs font-medium tracking-wide">Learn More</span>
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-[1px] bg-white/40 group-hover/link:w-12 group-hover/link:bg-white transition-all duration-300"></div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover/link:text-white group-hover/link:translate-x-1 transition-all duration-300" />
                </div>
            </Link>
        </div>
    </div>
);

export default ServicesIndex;
