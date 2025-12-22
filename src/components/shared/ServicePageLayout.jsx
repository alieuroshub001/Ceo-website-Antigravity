import { motion } from 'framer-motion';

const ServicePageLayout = ({ title, subtitle, mainImage, description, sections }) => {
    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[10px] tracking-[0.5em] text-accent font-bold uppercase mb-8"
                >
                    {subtitle}
                </motion.p>
                <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-16 uppercase whitespace-pre-line">
                    {title}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start border-t border-white/5 pt-24">
                    <div className="aspect-[4/5] bg-white/5 overflow-hidden">
                        <img
                            src={mainImage}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="text-xl font-light leading-loose text-white/60 mb-12 uppercase">
                            {description}
                        </p>
                        <div className="space-y-12">
                            {sections.map((section, idx) => (
                                <div key={idx}>
                                    <h4 className="text-xs tracking-[0.3em] font-bold text-white mb-6 uppercase">{section.title}</h4>
                                    <p className="text-sm font-light text-white/40 leading-relaxed uppercase">
                                        {section.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePageLayout;
