import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                // We want the scroll to end such that the right edge of the content 
                // is significantly away from the right edge of the screen to avoid cutoff.
                // User requested reducing the gap to 20% of the screen width.
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
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "Digital Operations & Project Management",
            description: "Streamline backend systems, automate workflows, and manage cross-functional teams with tools like ClickUp, Airtable, and Notion.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "CRM Implementation & Account Management",
            description: "Optimize the entire client lifecycle using HubSpot, Salesforce, and Zoho to enhance retention and drive revenue.",
            image: "https://images.unsplash.com/photo-1573161158332-514c30930da0?q=80&w=2000&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "Growth Marketing & Funnel Strategy",
            description: "Design and execute data-driven growth strategies focused on lead generation, and brand visibility.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
            link: "#"
        }
    ];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-10 left-10 z-10 mix-blend-difference">
                    <p className="text-[10px] tracking-[0.5em] text-white font-bold uppercase mb-4">WHAT I DO</p>
                    <h2 className="text-4xl font-light text-white uppercase tracking-tight">MY SERVICES & EXPERTISE</h2>
                </div>

                <motion.div ref={contentRef} style={{ x }} className="flex gap-24 pl-24 pr-24">
                    {services.map((service, idx) => (
                        <div key={idx} className="relative h-[60vh] w-[80vw] md:w-[60vw] flex-shrink-0 flex flex-col md:flex-row bg-[#050505] overflow-hidden group">
                            <div className="w-full md:w-1/2 h-full overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-all duration-700"
                                />
                            </div>
                            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                                <h3 className="text-2xl md:text-4xl font-light text-white mb-6 uppercase leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-white/60 font-light leading-relaxed mb-8">
                                    {service.description}
                                </p>
                                <a href={service.link} className="inline-flex items-center space-x-6 group/link text-white">
                                    <span className="w-12 h-[1px] bg-white group-hover/link:w-20 transition-all duration-500"></span>
                                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">/ LEARN MORE /</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesIndex;
