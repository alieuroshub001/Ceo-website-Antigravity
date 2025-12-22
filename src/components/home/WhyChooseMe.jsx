const WhyChooseMe = () => {
    return (
        <section className="py-32 bg-[#050505]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-[10px] tracking-[0.5em] text-accent font-bold uppercase mb-8">WHY CHOOSE ME</p>
                    <h2 className="text-3xl md:text-5xl font-light text-white uppercase mb-12 leading-tight">
                        The Best Service For Our Customers <br />
                        <span className="text-white/40">Tailored Solutions to Accelerate Growth</span>
                    </h2>
                    <p className="text-lg text-white/60 font-light leading-loose mb-16 max-w-2xl mx-auto">
                        As a seasoned entrepreneur and digital strategist, I offer end-to-end solutions for brands aiming to grow, scale, and lead in a competitive digital space.
                    </p>
                    <a href="#" className="inline-flex items-center space-x-6 group text-white">
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">/ LEARN MORE /</span>
                        <span className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-500"></span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;
