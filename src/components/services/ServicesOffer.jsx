import { motion } from 'framer-motion';

const ServicesOffer = () => {
    return (
        <section className="relative py-32 bg-accent overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[50%] h-full bg-black/5 skew-x-12 translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    <div className="w-full md:w-2/3">
                        <p className="text-black font-bold tracking-[0.3em] uppercase mb-4 text-xs">Ready to Get Started?</p>
                        <h2 className="text-4xl md:text-6xl font-light text-black uppercase leading-tight mb-8">
                            Transform Your Business with <span className="font-bold">Expert Solutions</span>
                        </h2>
                        <p className="text-black/70 text-lg max-w-2xl leading-relaxed mb-10">
                            Whether you need strategic business guidance or cutting-edge technology solutions, our team of experts is ready to help you achieve your goals and drive sustainable growth.
                        </p>
                        <div className="flex space-x-6">
                            <a href="/contact" className="px-8 py-4 bg-black text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">
                                Start Your Project
                            </a>
                            <a href="/portfolio" className="px-8 py-4 border border-black text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all">
                                View Our Work
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOffer;
