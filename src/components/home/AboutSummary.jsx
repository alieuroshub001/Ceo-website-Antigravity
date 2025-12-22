import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutSummary = () => {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <p className="text-[10px] tracking-[0.5em] text-accent mb-6 uppercase font-bold">SOMETHINGS ABOUT ME</p>
                    <h2 className="text-3xl md:text-5xl font-light text-white mb-8 leading-tight uppercase">
                        I'M A GLOBAL STRATEGIST & <br /> <span className="text-accent">DIGITAL TRANSFORMER</span> LEADER
                    </h2>
                    <div className="space-y-6 text-white/60 font-light leading-relaxed mb-8">
                        <p>
                            I’m Sheikh Nabeel – Entrepreneur, Business Strategist & CEO of EurosHub. With Over 7 years of experience, I help founders, startups, and global teams simplify complex operations, implement scalable systems, and grow through digital innovation.
                        </p>
                    </div>
                    <div className="flex justify-center space-x-6 text-[10px] tracking-widest text-white/40 uppercase mb-8">
                        <a href="#" className="hover:text-white transition-colors">Facebook</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Linkedin</a>
                        <a href="#" className="hover:text-white transition-colors">Youtube</a>
                    </div>
                    <Link to="/about-asif" className="inline-flex items-center space-x-6 group text-white">
                        <span className="w-12 h-[1px] bg-white group-hover:bg-accent group-hover:w-20 transition-all duration-500"></span>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">/ SEE MORE /</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSummary;
