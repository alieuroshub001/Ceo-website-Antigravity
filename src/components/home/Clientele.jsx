import { motion } from 'framer-motion';

const Clientele = () => {
    const logos = [
        { name: 'ABN AMRO', url: 'https://logo.clearbit.com/abnamro.com' },
        { name: 'Swiss Re', url: 'https://logo.clearbit.com/swissre.com' },
        { name: 'UBS', url: 'https://logo.clearbit.com/ubs.com' },
        { name: 'SMBC', url: 'https://logo.clearbit.com/smbc-group.com' },
        { name: 'PwC', url: 'https://logo.clearbit.com/pwc.com' },
    ];

    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="container mx-auto px-6">
                {/* Intro Text from Original */}
                <div className="max-w-3xl mx-auto text-center mb-32">
                    <h2 className="text-[10px] tracking-[0.5em] text-white/60 mb-12 uppercase leading-relaxed font-bold">
                        SPECIALISING IN DIGITAL BUSINESS <br /> TRANSFORMATION & AI BOARD STEWARDSHIP
                    </h2>
                    <p className="text-sm md:text-base font-light text-white/40 leading-loose mb-12 uppercase">
                        With over 7 years of international consulting and advisory experience, I specialise in <span className="text-white font-medium">digital strategy and implementation, board governance and risk oversight</span>. Providing a bridge between boards and businesses, I lead <span className="text-white font-medium">digital transformations, turnarounds, and restructures</span>, fostering growth-oriented organisations to achieve sustainable success.
                    </p>
                    <p className="text-sm font-light text-white/40 uppercase">
                        A DE&I advocate, I am driven to nurture the <span className="text-white font-medium">next generation of digital leaders</span> through collaborative and culturally diverse working environments.
                    </p>
                </div>

                {/* Clientele Grid exactly like Original */}
                <div className="pt-24 border-t border-white/5">
                    <h2 className="text-5xl md:text-7xl font-light tracking-widest text-white text-center mb-24 uppercase">
                        CLIENTELE
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-24 items-center justify-items-center opacity-50">
                        {logos.map((logo, idx) => (
                            <div key={idx} className="flex items-center justify-center transition-all duration-500 cursor-pointer w-full max-w-[140px]">
                                <img
                                    src={logo.url}
                                    alt={logo.name}
                                    className="max-h-8 md:max-h-11 w-auto object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'block';
                                    }}
                                />
                                <span className="hidden text-[10px] tracking-widest font-bold text-white/40">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clientele;
