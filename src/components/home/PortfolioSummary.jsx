import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PortfolioSummary = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const works = [
        {
            title: "Scaled Operations for a Global eCommerce Brand",
            description: "Implemented ClickUp & Airtable systems to manage tasks, automate workflows, and improve team accountability – reducing operational overhead by 30%.",
            category: "Operations",
            id: "01"
        },
        {
            title: "CRM Overhaul for a UAE Business Consultancy",
            description: "Set up and optimized Zoho CRM, improving lead management and client communication across departments, resulting in a 2x increase in conversion rates.",
            category: "CRM",
            id: "02"
        },
        {
            title: "Digital Transformation for a Remote Marketing Agency",
            description: "Led the integration of Zapier and AI tools to automate repetitive tasks and reporting, saving 20+ hours weekly for the core team.",
            category: "Automation",
            id: "03"
        },
        {
            title: "Brand Strategy for a Fast-Growing Startup",
            description: "Developed brand identity, customer journey mapping, and go-to-market strategy – helping the startup secure its first round of funding.",
            category: "Brand Strategy",
            id: "04"
        },
        {
            title: "KPI Dashboards for a Leadership Team",
            description: "Built real-time tracking dashboards using Notion & Google Data Studio, giving executives data-driven insights for faster decision-making.",
            category: "Analytics",
            id: "05"
        }
    ];

    // Calculate Y translation to scroll the list upwards
    // We scroll from 0 to -X%, where X is enough to show all items
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col md:flex-row">
                {/* Left Side: Fixed Header - Top Aligned */}
                <div className="w-full md:w-1/3 p-12 md:p-24 flex flex-col justify-start z-10 bg-black h-full">
                    <p className="text-[10px] tracking-[0.5em] text-accent font-bold uppercase mb-4">MY PORTFOLIO</p>
                    <h2 className="text-3xl md:text-5xl font-light text-white uppercase tracking-tight leading-tight">
                        RECENT WORK <br /> COMPLETED
                    </h2>
                    <div className="mt-12 hidden md:block">
                        <a href="#" className="inline-flex items-center space-x-4 group text-white">
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">VIEW ALL PROJECTS</span>
                            <span className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300"></span>
                        </a>
                    </div>
                </div>

                {/* Right Side: Scrolling List */}
                <div className="w-full md:w-2/3 h-full flex items-center relative">
                    {/* Padding Top matches Sidebar padding to align '01' with 'MY PORTFOLIO' approx */}
                    <motion.div style={{ y }} className="w-full px-6 md:px-24 pt-12 md:pt-24 pb-[5vh]">
                        {works.map((work, idx) => (
                            <div key={idx} className="group border-b border-white/10 py-16 last:border-0 relative">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
                                    <div className="md:col-span-2">
                                        <span className="text-[10px] tracking-widest text-accent uppercase">0{idx + 1}</span>
                                    </div>
                                    <div className="md:col-span-10">
                                        <h3 className="text-2xl md:text-3xl font-light text-white mb-6 uppercase group-hover:text-accent transition-colors">
                                            {work.title}
                                        </h3>
                                        <p className="text-white/40 leading-relaxed max-w-xl mb-4">
                                            {work.description}
                                        </p>
                                        <span className="inline-block border border-white/5 py-1 px-3 bg-white/5 text-[9px] tracking-widest text-white/50 uppercase rounded-sm">
                                            {work.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Gradient Overlay for smooth transition feeling */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20 md:block hidden"></div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSummary;
