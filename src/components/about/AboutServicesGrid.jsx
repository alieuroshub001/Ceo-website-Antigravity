import { motion } from 'framer-motion';

const AboutServicesGrid = () => {
    const services = [
        {
            title: "Business Strategy & Brand Consulting",
            desc: "Build a clear roadmap with actionable insights to scale your business, attract investors, and strengthen your market presence."
        },
        {
            title: "Digital Operations & Project Management",
            desc: "Streamline backend systems, automate workflows, and manage cross-functional teams with tools like ClickUp, Airtable, and Notion."
        },
        {
            title: "CRM Implementation & Account Management",
            desc: "Optimize the entire client lifecycle using HubSpot, Salesforce, and Zoho to enhance retention and drive revenue."
        },
        {
            title: "Growth Marketing & Funnel Strategy",
            desc: "Design and execute data-driven growth strategies focused on lead generation, and brand visibility."
        },
        {
            title: "Brand Identity & Positioning",
            desc: "Brand Identity defines how a brand presents itself through visuals, messaging, and personality. Brand Positioning is about how the brand is perceived in the minds of customers compared to competitors."
        },
        {
            title: "Digital Transformation & Tech Integration",
            desc: "Digital Transformation & Tech Integration empower businesses to modernize operations, enhance customer experiences, and drive innovation through smart technology adoption."
        },
        {
            title: "CRM & Client Experience",
            desc: "CRM & Client Experience work together to deliver personalized interactions, build trust, and enhance customer satisfaction throughout the entire journey."
        },
        {
            title: "Business Systems & Operations",
            desc: "Business Systems & Operations optimize workflows, enhance productivity, and ensure seamless coordination across all functional areas of an organization."
        }
    ];

    return (
        <section className="bg-gradient-to-b from-black via-[#0a0a09] to-black py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group bg-black/50 border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-black/70 transition-colors relative"
                        >
                            <div className="mb-6 w-8 h-[1px] bg-white/50 group-hover:w-12 transition-all duration-300"></div>
                            <h3 className="text-base md:text-lg font-light text-white mb-4 leading-snug group-hover:text-white/90 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-xs md:text-sm text-white/60 leading-relaxed font-light">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutServicesGrid;
