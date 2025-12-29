import { motion } from 'framer-motion';
import aboutImage from '../../assets/about.jpg';

const ServicesOffer = () => {
    return (
        <section className="relative py-32 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={aboutImage}
                    alt="Background"
                    className="w-full h-full object-cover opacity-40 object-[70%] md:object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                     linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}></div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-white/5 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    <div className="w-full md:w-2/3">
                        <p className="text-white/50 font-medium tracking-[0.3em] uppercase mb-4 text-[10px]">Ready to Get Started?</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
                            Transform Your Business with <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Expert Solutions</span>
                        </h2>
                        <p className="text-white/60 text-base lg:text-lg max-w-2xl leading-relaxed mb-10">
                            Whether you need strategic business guidance or cutting-edge technology solutions, our team of experts is ready to help you achieve your goals and drive sustainable growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <a href="/contact" className="px-10 py-5 bg-white text-black text-sm font-semibold tracking-wide rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-white/20 text-center">
                                Start Your Project
                            </a>
                            <a href="/portfolio" className="px-10 py-5 bg-white/5 text-white text-sm font-medium tracking-wide rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-center">
                                View My Work
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOffer;
