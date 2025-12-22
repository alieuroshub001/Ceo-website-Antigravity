import { motion } from 'framer-motion';

const ServicesList = () => {
    const services = [
        {
            title: "Business Strategy & Brand Consulting",
            desc: "Build a clear roadmap with actionable insights to scale your business, attract investors, and strengthen your market presence."
        },
        {
            title: "CRM Implementation & Account Management",
            desc: "Optimize the entire client lifecycle using HubSpot, Salesforce, and Zoho to enhance retention and drive revenue."
        },
        {
            title: "Brand Identity & Positioning",
            desc: "Brand Identity defines how a brand presents itself through visuals, messaging, and personality. Brand Positioning is about how the brand is perceived in the minds of customers compared to competitors."
        },
        {
            title: "Digital Operations & Project Management",
            desc: "Streamline backend systems, automate workflows, and manage cross-functional teams with tools like ClickUp, Airtable, and Notion."
        },
        {
            title: "Growth Marketing & Funnel Strategy",
            desc: "Design and execute data-driven growth strategies focused on lead generation, and brand visibility."
        },
        {
            title: "Digital Transformation & Tech Integration",
            desc: "Digital Transformation & Tech Integration empower businesses to modernize operations, enhance customer experiences, and drive innovation."
        }
    ];

    return (
        <section className="bg-black py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-zinc-900/30 border border-white/5 p-10 hover:border-accent/30 transition-all duration-300 group"
                        >
                            <h3 className="text-xl font-light text-white uppercase mb-6 group-hover:text-accent transition-colors leading-snug">
                                {service.title}
                            </h3>
                            <p className="text-sm text-white/50 leading-relaxed font-light">
                                {service.desc}
                            </p>
                            <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center group-hover:border-accent/10 transition-colors">
                                <span className="text-[10px] tracking-widest text-white/30 uppercase">0{idx + 1}</span>
                                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesList;
