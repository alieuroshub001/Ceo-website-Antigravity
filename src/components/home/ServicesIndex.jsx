import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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

    const services = [
        {
            title: "Business Strategy & Brand Consulting",
            description: "Build a clear roadmap with actionable insights to scale your business, attract investors, and strengthen your market presence.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
            link: "/services/business-strategy",
            number: "01"
        },
        {
            title: "Digital Operations & Project Management",
            description: "Streamline backend systems, automate workflows, and manage cross-functional teams with tools like ClickUp, Airtable, and Notion.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            link: "/services/digital-operations",
            number: "02"
        },
        {
            title: "CRM Implementation & Account Management",
            description: "Optimize the entire client lifecycle using HubSpot, Salesforce, and Zoho to enhance retention and drive revenue.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            link: "/services/crm-implementation",
            number: "03"
        },
        {
            title: "Growth Marketing & Funnel Strategy",
            description: "Design and execute data-driven growth strategies focused on lead generation and brand visibility.",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
            link: "/services/growth-marketing",
            number: "04"
        }
    ];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex flex-col h-screen overflow-hidden">
                {/* Header Section */}
                <div className="pt-16 pb-8 px-8 lg:px-16">
                    <div className="inline-block mb-4">
                        <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-medium">What I Do</span>
                        <div className="w-12 h-[1px] bg-gradient-to-r from-white/50 to-transparent mt-2"></div>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-light text-white tracking-tight leading-tight">
                        Services &<br />
                        <span className="text-white/60">Expertise</span>
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="flex-1 flex items-center overflow-hidden relative">
                    {/* Horizontal Scrolling Cards */}
                    <motion.div ref={contentRef} style={{ x }} className="flex gap-8 pl-8 pr-8 lg:gap-12 lg:pl-16 lg:pr-16">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="relative h-[65vh] w-[75vw] md:w-[55vw] lg:w-[38vw] flex-shrink-0 group"
                            >
                                {/* Card Container */}
                                <div className="relative h-full bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                                    {/* Image Section */}
                                    <div className="relative h-1/2 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="h-1/2 p-8 lg:p-10 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-2xl lg:text-3xl font-light text-white mb-4 leading-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-sm text-white/60 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* CTA Link */}
                                        <Link
                                            to={service.link}
                                            className="group/link inline-flex items-center space-x-3 text-white self-start mt-6"
                                        >
                                            <span className="text-xs font-medium tracking-wide">Learn More</span>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-8 h-[1px] bg-white/40 group-hover/link:w-12 group-hover/link:bg-white transition-all duration-300"></div>
                                                <ArrowRight className="w-4 h-4 text-white/40 group-hover/link:text-white group-hover/link:translate-x-1 transition-all duration-300" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesIndex;
