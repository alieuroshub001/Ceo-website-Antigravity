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
        <section className="bg-black py-24 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group bg-black p-10 hover:bg-white/[0.02] transition-colors relative"
                        >
                            <div className="mb-6 w-8 h-[1px] bg-accent/50 group-hover:w-12 transition-all duration-300"></div>
                            <h3 className="text-lg font-light text-white uppercase mb-4 leading-snug group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-white/40 leading-relaxed font-light">
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
