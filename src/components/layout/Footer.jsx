import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black pt-32 pb-12">
            <div className="container mx-auto px-6">
                {/* Contact Form Section exactly like Original */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
                    <div>
                        <p className="text-[10px] tracking-[0.5em] text-white/40 mb-10 uppercase font-bold">
                            EXCEED YOUR POTENTIAL
                        </p>
                        <div className="space-y-6 mb-16">
                            <a href="tel:+923000369622" className="block text-xl font-light text-white hover:text-accent transition-colors">
                                +92 300 0369622
                            </a>
                            <a href="mailto:hello@sheikhnabeel.com" className="block text-xl font-light text-white hover:text-accent transition-colors uppercase">
                                hello@sheikhnabeel.com
                            </a>
                        </div>
                        <a href="#" className="inline-flex items-center space-x-6 group text-accent">
                            <span className="w-12 h-[1px] bg-accent group-hover:w-20 transition-all duration-500"></span>
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">/ BOOK AN APPOINTMENT /</span>
                        </a>
                    </div>

                    <div>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex items-center space-x-4">
                                    <input type="checkbox" id="csuite" className="accent-accent w-4 h-4" />
                                    <label htmlFor="csuite" className="text-[10px] tracking-widest text-white/60 uppercase">C-Suite Advisory</label>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <input type="checkbox" id="ned" className="accent-accent w-4 h-4" />
                                    <label htmlFor="ned" className="text-[10px] tracking-widest text-white/60 uppercase">NED Independent Board Director</label>
                                </div>
                            </div>
                            <div className="relative">
                                <textarea
                                    placeholder="MESSAGE"
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 p-6 text-sm text-white focus:border-accent outline-none tracking-widest uppercase transition-colors"
                                ></textarea>
                            </div>
                            <button className="flex items-center space-x-6 group text-white">
                                <span className="w-12 h-[1px] bg-white group-hover:bg-accent group-hover:w-20 transition-all duration-500"></span>
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase">/ SUBMIT /</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Global Footer info */}
                <div className="pt-24 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 items-start">
                    <div>
                        <h4 className="text-[10px] tracking-[0.5em] font-bold text-white mb-8 uppercase">Keep in touch!</h4>
                        <div className="relative max-w-xs">
                            <input type="email" placeholder="Your email" className="w-full bg-white/5 border-b border-white/20 pb-4 text-[10px] tracking-widest text-white focus:border-accent outline-none" />
                            <button className="absolute right-0 bottom-4 text-white hover:text-accent group">
                                <span className="sr-only">Submit</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="text-center">
                            <div className="flex items-center justify-center space-x-3 mb-8">
                                <img
                                    src="https://sheikhnabeel.com/wp-content/uploads/2025/04/1-1-1536x1536.png"
                                    alt="Sheikh Nabeel Logo"
                                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                                />
                                <span className="text-xl font-bold tracking-widest text-white">SHEIKH NABEEL</span>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] tracking-widest text-white/40 uppercase">+92 300 0369622</p>
                                <p className="text-[10px] tracking-widest text-white/40 uppercase">hello@sheikhnabeel.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:text-right">
                        <p className="text-[10px] tracking-widest leading-relaxed text-white/40 uppercase mb-4">
                            Sheikh Nabeel <br />
                            Office 509, 5th Floor, Kohistan Tower <br />
                            Saddar, Rawalpindi, 46000, Pakistan
                        </p>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[9px] tracking-widest text-white/20 uppercase font-medium">
                        © {currentYear} Sheikh Nabeel Executive Advisory. All rights reserved.
                    </p>
                    <div className="flex space-x-12">
                        <a href="#" className="text-[9px] tracking-widest text-white/20 hover:text-white transition-colors uppercase">Terms & Conditions</a>
                        <a href="#" className="text-[9px] tracking-widest text-white/20 hover:text-white transition-colors uppercase">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
