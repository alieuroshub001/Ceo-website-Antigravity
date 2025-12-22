import { motion } from 'framer-motion';

const AboutPricing = () => {
    return (
        <section className="bg-black py-32 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <p className="text-[10px] tracking-[0.4em] text-accent font-bold uppercase mb-6">Investment</p>
                        <h2 className="text-4xl md:text-5xl font-light text-white uppercase mb-6">Service Packages</h2>
                        <p className="text-white/50 font-light leading-relaxed max-w-xl">
                            Tailored service packages designed to drive clarity, efficiency, and sustainable growth.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Basic Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/30 border border-white/5 p-12 flex flex-col hover:border-white/10 transition-all duration-500"
                    >
                        <h3 className="text-sm text-white/60 font-medium uppercase tracking-[0.2em] mb-8">Basic Package</h3>
                        <div className="flex items-baseline mb-8">
                            <span className="text-xl text-white/40 mr-1">$</span>
                            <span className="text-5xl text-white font-light">199</span>
                        </div>
                        <div className="w-full h-px bg-white/5 mb-10"></div>
                        <ul className="space-y-5 flex-grow mb-12">
                            {[
                                "1:1 Strategy Consultation (45 mins)",
                                "Business Process Audit",
                                "Actionable Growth Recommendations",
                                "CRM & Project Tool Suggestions",
                                "Email Support (7 Days)"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start text-sm text-white/70 font-light">
                                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full mr-4 mt-1.5"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="w-full py-4 border border-white/10 text-center text-xs font-bold tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all uppercase">
                            Choose Basic
                        </a>
                    </motion.div>

                    {/* Standard Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative bg-zinc-900/50 border border-accent/20 p-12 flex flex-col group overflow-hidden"
                    >
                        {/* Radical gradient glow */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-accent/20 transition-all duration-700"></div>

                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-sm text-accent font-bold uppercase tracking-[0.2em]">Standard Package</h3>
                            <span className="text-[9px] font-bold text-black bg-accent px-2 py-1 uppercase tracking-widest rounded-sm">Popular</span>
                        </div>

                        <div className="flex items-baseline mb-8 relative z-10">
                            <span className="text-xl text-accent/50 mr-1">$</span>
                            <span className="text-5xl text-white font-light">499</span>
                        </div>
                        <div className="w-full h-px bg-accent/20 mb-10"></div>

                        <ul className="space-y-5 flex-grow mb-12 relative z-10">
                            {[
                                "1:1 Strategy Consultation (60 mins)",
                                "CRM Setup (HubSpot / Zoho / Salesforce)",
                                "Task & Workflow Management Setup",
                                "SOP Templates & Automation Roadmap",
                                "Email & Slack Support (14 Days)"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start text-sm text-white/90 font-light">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4 mt-1.5"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="relative z-10 w-full py-4 bg-accent text-center text-xs font-bold tracking-[0.2em] text-black hover:bg-white transition-all uppercase shadow-[0_0_20px_rgba(23,182,178,0.2)] hover:shadow-[0_0_30px_rgba(23,182,178,0.4)]">
                            Choose Standard
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutPricing;
