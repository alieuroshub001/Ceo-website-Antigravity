import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SectionContent = ({ title, text, tags, align = 'left' }) => (
    <div className={`flex flex-col justify-center h-screen p-12 ${align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-light text-white uppercase mb-8"
        >
            {title}
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg font-light leading-relaxed max-w-sm mb-8"
        >
            {text}
        </motion.p>
        <div className={`flex flex-wrap gap-3 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
            {tags.map((tag, idx) => (
                <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="px-4 py-2 border border-white/10 rounded-full text-xs text-accent uppercase tracking-widest"
                >
                    {tag}
                </motion.span>
            ))}
        </div>
    </div>
);

const AboutScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={targetRef} className="relative bg-black">
            <div className="container mx-auto px-6 relative">

                {/* STICKY CENTER IMAGE */}
                <div className="sticky top-0 h-screen flex items-center justify-center z-0 pointer-events-none">
                    <div
                        className="relative w-full h-[90vh] max-w-[1400px]"
                    >
                        {/* Removed window backgrounds/gradients */}
                        <img
                            src="https://sheikhnabeel.com/wp-content/uploads/2025/05/Untitled-6.png"
                            alt="Sheikh Nabeel"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* SCROLLING CONTENT LAYERS */}
                <div className="relative z-10 -mt-[100vh]">

                    {/* SECTION 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen">
                        {/* Left Content */}
                        <SectionContent
                            title="The Visionary"
                            text="I help founders, startups, and global teams simplify complex operations and implement scalable systems. My mission is to translate vision into execution."
                            tags={['Strategy', 'Leadership', 'Growth']}
                            align="left"
                        />
                        <div /> {/* Center Spacer */}
                        {/* Right Content */}
                        <SectionContent
                            title="Prototyping"
                            text="I offer rapid prototyping services that could bring your product concepts to life, visualizing the future of your enterprise."
                            tags={['Design', 'Mockups', 'MVP']}
                            align="right"
                        />
                    </div>

                    {/* SECTION 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen">
                        <SectionContent
                            title="Industrial Design"
                            text="Bringing physical and digital worlds together. Whether it's hardware interfaces or complex software architectures, I ensure seamless integration."
                            tags={['Hardware', 'IoT', 'Integration']}
                            align="left"
                        />
                        <div />
                        <SectionContent
                            title="Global Scale"
                            text="Expanding businesses across borders with cultural intelligence and localized strategies that resonate with new markets."
                            tags={['Expansion', 'Localization', 'Market Entry']}
                            align="right"
                        />
                    </div>

                    {/* SECTION 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen">
                        <SectionContent
                            title="Design Consulting"
                            text="Providing expert guidance on design strategy, market trends, and product positioning to ensure your brand stands out."
                            tags={['Advisory', 'Mentorship', 'Audit']}
                            align="left"
                        />
                        <div />
                        <SectionContent
                            title="Results Driven"
                            text="100+ Projects delivered with a focus on tangible ROI and sustainable growth metrics."
                            tags={['ROI', 'KPIs', 'Analytics']}
                            align="right"
                        />
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
                <span className="text-[10px] tracking-widest uppercase">Scroll</span>
                <div className="w-px h-12 bg-white/20"></div>
            </div>

        </div>
    );
};

export default AboutScroll;
