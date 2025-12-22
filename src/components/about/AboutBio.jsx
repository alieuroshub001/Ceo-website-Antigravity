import { motion } from 'framer-motion';

const AboutBio = () => {
    return (
        <section className="bg-black py-32 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:col-span-5 relative"
                    >
                        <div className="relative z-10 aspect-[3/4] overflow-hidden">
                            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 pointer-events-none"></div>
                            <img
                                src="https://sheikhnabeel.com/wp-content/uploads/2025/05/Untitled-6.png"
                                alt="Sheikh Nabeel"
                                className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform hover:scale-105"
                            />
                        </div>
                        {/* Decorative background box */}
                        <div className="absolute -bottom-8 -left-8 w-full h-full border border-white/5 z-0 hidden md:block"></div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="md:col-span-7 pl-0 md:pl-12"
                    >
                        <p className="text-[10px] tracking-[0.4em] text-accent font-bold uppercase mb-8 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-accent"></span>
                            Somethings About Me
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white uppercase mb-10 leading-[1.1]">
                            Global Strategist & <br /> <span className="font-normal text-white">Digital Transformation</span> Leader
                        </h2>
                        <div className="text-white/60 font-light leading-loose text-lg space-y-6 mb-12 max-w-2xl">
                            <p>
                                I’m Sheikh Nabeel – Entrepreneur, Business Strategist & CEO of EurosHub.
                            </p>
                            <p>
                                With over 7 years of experience, I help founders, startups, and global teams simplify complex operations, implement scalable systems, and grow through digital innovation.
                            </p>
                        </div>

                        <div className="flex space-x-10 border-t border-white/10 pt-8">
                            {['Facebook', 'Instagram', 'Linkedin', 'Youtube'].map((social) => (
                                <a key={social} href="#" className="group flex items-center space-x-2 text-[10px] tracking-[0.2em] text-white/50 hover:text-white uppercase transition-colors">
                                    <span>{social}</span>
                                    <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">→</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutBio;
