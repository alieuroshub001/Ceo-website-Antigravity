import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import SocialModal from '../shared/SocialModal';
import snImage from '../../assets/sn.webp';

const AboutBentoBio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-gradient-to-b from-black via-[#0a0a09] to-black py-12 md:py-24">
            <SocialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 h-auto md:h-[600px]">

                    {/* LEFT COLUMN */}
                    <div className="md:col-span-1 flex flex-col gap-4 md:gap-6">
                        {/* Services Card */}
                        <div className="flex-1 min-h-[200px] md:min-h-0 bg-black/50 border border-white/5 rounded-2xl md:rounded-3xl p-4 md:p-6 relative group overflow-hidden hover:bg-black/70 transition-colors">
                            <div className="absolute top-4 left-4 z-10">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] text-white/70 uppercase tracking-wider backdrop-blur-md">Expertise</span>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
                                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                                alt="Services"
                            />
                            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-10">
                                <h3 className="text-white text-lg md:text-xl font-light leading-tight mb-2">Explore <br /> Services</h3>
                            </div>
                            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-8 h-8 md:w-10 md:h-10 bg-white text-black rounded-full flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
                                <span className="text-lg md:text-xl">↗</span>
                            </div>
                        </div>

                        {/* Podcast/Blog Card */}
                        <div className="flex-1 min-h-[200px] md:min-h-0 bg-black/50 border border-white/5 rounded-2xl md:rounded-3xl p-4 md:p-6 relative group overflow-hidden hover:bg-black/70 transition-colors">
                            <div className="absolute top-4 left-4 z-10">
                                <span className="px-3 py-1 bg-white/20 text-white/70 rounded-full text-[10px] uppercase tracking-wider backdrop-blur-md">Latest</span>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&auto=format&fit=crop"
                                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                                alt="Blog"
                            />
                            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-10">
                                <h3 className="text-white text-lg md:text-xl font-light leading-tight mb-2">Read <br /> Insights</h3>
                            </div>
                            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-8 h-8 md:w-10 md:h-10 bg-white text-black rounded-full flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
                                <span className="text-lg md:text-xl">↗</span>
                            </div>
                        </div>
                    </div>

                    {/* CENTER COLUMN (MAIN IMAGE) */}
                    <div className="md:col-span-2 relative min-h-[400px] md:min-h-0 bg-black/50 border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden group">
                        <img
                            src={snImage}
                            alt="Sheikh Nabeel"
                            className="w-full h-full object-contain object-center transition-transform duration-1000 group-hover:scale-105"
                        />
                        {/* Bottom Fade Gradient */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
                        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 text-center z-20">
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-light text-white mb-2">Sheikh Nabeel</h2>
                            <p className="text-white/70 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-medium bg-black/50 inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-md">
                                Your Strategic Business Partner
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="md:col-span-1 flex flex-col gap-4 md:gap-6">
                        {/* Bio/Social Text Card */}
                        <div className="flex-1 min-h-[300px] md:min-h-0 bg-black/50 border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-center">
                            <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
                                "I help founders and global teams simplify operations and implement scalable systems."
                            </p>

                            <div className="flex items-center space-x-3 mb-6">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-white/20 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-xs text-white/50 font-medium">100+ Happy Clients</span>
                            </div>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full py-2.5 md:py-3 bg-white text-black text-[10px] md:text-xs font-bold uppercase tracking-widest text-center rounded-full hover:bg-white/90 transition-colors"
                            >
                                Follow Me
                            </button>
                            <div className="flex justify-center space-x-3 md:space-x-4 mt-4 md:mt-6">
                                <a href="https://www.linkedin.com/in/sheikhnabeelofficial/?originalSubdomain=pk" className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] md:text-sm text-white/40 uppercase hover:border-white hover:text-white transition-all cursor-pointer">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://www.instagram.com/sheikhnabeel.official/?hl=en" className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] md:text-sm text-white/40 uppercase hover:border-white hover:text-white transition-all cursor-pointer">
                                    <FaInstagram />
                                </a>
                                <a href="https://twitter.com/Euroshub" className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] md:text-sm text-white/40 uppercase hover:border-white hover:text-white transition-all cursor-pointer">
                                    <FaTwitter />
                                </a>
                                <a href="https://www.upwork.com/freelancers/sheikhnabeelofficial" className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] md:text-sm text-white/40 uppercase hover:border-white hover:text-white transition-all cursor-pointer" target="_blank" rel="noopener noreferrer">
                                    <SiUpwork />
                                </a>
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="min-h-[160px] md:h-1/3 bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 relative group overflow-hidden cursor-pointer">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-black/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
                            <p className="text-black/70 font-bold tracking-widest text-[10px] md:text-xs uppercase mb-1 md:mb-2">Ready?</p>
                            <h3 className="text-black text-xl md:text-2xl font-light leading-none mb-1">Start a <br /> Project</h3>
                            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-8 h-8 md:w-10 md:h-10 bg-black text-white rounded-full flex items-center justify-center transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
                                <span className="text-lg md:text-xl">↗</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutBentoBio;
