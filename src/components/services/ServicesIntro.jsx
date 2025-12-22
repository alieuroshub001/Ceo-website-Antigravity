import { motion } from 'framer-motion';

const ServicesIntro = () => {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2">
                        <p className="text-[10px] tracking-[0.5em] text-accent font-bold uppercase mb-6">WHY CHOOSE ME</p>
                        <h2 className="text-4xl md:text-5xl font-light text-white uppercase mb-8 leading-tight">
                            The Best Service <br /><span className="text-white/50">For Our Clients</span>
                        </h2>
                        <h3 className="text-xl text-white font-light uppercase mb-6 tracking-wide">
                            Tailored Solutions to Accelerate Growth & Operational Excellence
                        </h3>
                        <p className="text-white/60 font-light leading-relaxed mb-8">
                            As a seasoned entrepreneur and digital strategist, I offer end-to-end solutions for brands aiming to grow, scale, and lead in a competitive digital space.
                        </p>

                        <div className="flex flex-col space-y-2 mb-8 border-l-2 border-accent pl-6 py-2">
                            <h4 className="text-lg text-white uppercase tracking-widest">Unlock Your Brand’s Potential Online</h4>
                        </div>

                        <a href="#" className="inline-flex items-center space-x-4 group text-white">
                            <span className="w-12 h-[1px] bg-white group-hover:bg-accent group-hover:w-20 transition-all duration-500"></span>
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase group-hover:text-accent transition-colors">Learn More</span>
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                        <div className="bg-white/5 aspect-square rounded-sm overflow-hidden relative group">
                            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Consulting" />
                        </div>
                        <div className="bg-accent aspect-square rounded-sm overflow-hidden relative group translate-y-8">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Strategy" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-6xl text-white font-light">100+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesIntro;
