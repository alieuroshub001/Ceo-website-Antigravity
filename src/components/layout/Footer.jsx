
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { BsArrowUpRight, BsArrowRight } from 'react-icons/bs';
import { useLocation, Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const location = useLocation();

    const socialLinks = [
        { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/sheikhnabeelofficial/?originalSubdomain=pk', label: 'LinkedIn', color: 'hover:text-blue-500' },
        { icon: FaYoutube, href: 'https://www.youtube.com/@Euroshub', label: 'YouTube', color: 'hover:text-red-500' },
        { icon: FaInstagram, href: 'https://www.instagram.com/sheikhnabeel.official/?hl=en', label: 'Instagram', color: 'hover:text-pink-500' },
        { icon: FaFacebookF, href: 'https://www.facebook.com/Euroshub.meta', label: 'Facebook', color: 'hover:text-blue-600' },
        { icon: SiUpwork, href: 'https://www.upwork.com/freelancers/sheikhnabeelofficial', label: 'Upwork', color: 'hover:text-[#14a800]' }
    ];

    const services = [
        { label: 'C-Suite Advisory', href: '/c-suite' },
        { label: 'Independent Board Advisory', href: '/independent-board-advisory' },
        { label: 'Strategic Planning', href: '/services' },
        { label: 'Business Transformation', href: '/digital-business-transform' },
        { label: 'Digital Innovation', href: '/digital-business-transform' },
        { label: 'Leadership Development', href: '/c-suite' }
    ];

    const quickLinks = [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Portfolio', href: '/services' }, // Redirecting to services for now
        { label: 'Testimonials', href: '/about' }, // Included in About page
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' }
    ];

    const isContactPage = location.pathname === '/appointment' || location.pathname === '/contact';

    return (
        <footer className="relative w-full bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
            <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20 lg:pt-32">
                {/* Main Content - Conditionally Hidden on Contact/Appointment Pages */}
                {!isContactPage && (
                    <div className="flex-grow">
                        {/* Hero CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="text-center mb-24 lg:mb-32"
                        >
                            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light text-white mb-8 tracking-tight">
                                Ready to <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Transform</span> Your Business?
                            </h2>
                            <p className="text-base lg:text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                                Let's collaborate to unlock unprecedented growth and innovation for your organization
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-lg font-semibold tracking-wide text-sm shadow-lg hover:shadow-white/20 transition-all duration-300"
                            >
                                Let's Talk
                                <BsArrowUpRight className="text-lg" />
                            </Link>
                        </motion.div>

                        {/* Contact Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24 lg:mb-32"
                        >
                            {/* Left Column - Contact Info */}
                            <div className="space-y-12">
                                <div>
                                    <p className="text-[10px] tracking-[0.3em] text-white/40 mb-12 uppercase font-medium flex items-center gap-3">
                                        <span className="w-12 h-[1px] bg-gradient-to-r from-white/50 to-transparent"></span>
                                        EXCEED YOUR POTENTIAL
                                    </p>
                                    <div className="space-y-8">
                                        <a
                                            href="tel:+923000369622"
                                            className="group flex items-center gap-4 text-2xl lg:text-3xl font-light text-white hover:text-white/80 transition-all duration-300 tracking-wide"
                                        >
                                            <HiOutlinePhone className="text-white/60 group-hover:rotate-12 transition-transform" />
                                            +92 300 0369622
                                        </a>
                                        <a
                                            href="mailto:hello@sheikhnabeel.com"
                                            className="group flex items-center gap-4 text-xl lg:text-2xl font-light text-white hover:text-white/80 transition-all duration-300 uppercase tracking-wide"
                                        >
                                            <HiOutlineMail className="text-white/60 group-hover:scale-110 transition-transform" />
                                            hello@sheikhnabeel.com
                                        </a>
                                        <div className="group flex items-start gap-4 text-base text-white/60 mt-8">
                                            <HiOutlineLocationMarker className="text-white/60 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                            <span className="tracking-wide leading-relaxed">
                                                Office 509, 5th Floor, Kohistan Tower<br />
                                                Saddar, Rawalpindi, 46000, Pakistan
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media Links */}
                                <div className="pt-8 border-t border-white/5">
                                    <p className="text-[10px] tracking-widest text-white/30 mb-6 uppercase">Connect With Me</p>
                                    <div className="flex gap-4">
                                        {socialLinks.map((social, index) => (
                                            <motion.a
                                                key={index}
                                                href={social.href}
                                                whileHover={{ y: -4 }}
                                                className={`w-12 h-12 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/40 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
                                                aria-label={social.label}
                                            >
                                                <social.icon className="text-lg" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="backdrop-blur-sm bg-white/[0.02] border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl"
                            >
                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="FULL NAME"
                                                className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm text-white placeholder:text-white/30 focus:border-white/20 focus:bg-white/10 outline-none tracking-wider uppercase transition-all duration-300 rounded-xl"
                                            />
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                placeholder="EMAIL ADDRESS"
                                                className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm text-white placeholder:text-white/30 focus:border-white/20 focus:bg-white/10 outline-none tracking-wider uppercase transition-all duration-300 rounded-xl"
                                            />
                                        </div>
                                    </div>



                                    <div className="relative">
                                        <textarea
                                            placeholder="TELL US ABOUT YOUR PROJECT"
                                            rows="5"
                                            className="w-full bg-white/5 border border-white/10 p-6 text-sm text-white placeholder:text-white/30 focus:border-white/20 focus:bg-white/10 outline-none tracking-wider uppercase transition-all duration-300 resize-none rounded-xl"
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full flex items-center justify-center gap-4 bg-white text-black px-8 py-5 font-semibold tracking-wide text-sm rounded-xl shadow-lg hover:shadow-white/20 hover:bg-white/90 transition-all duration-300"
                                    >
                                        Send Message
                                        <BsArrowRight className="text-lg" />
                                    </motion.button>
                                </form>
                            </motion.div>
                        </motion.div>

                        {/* Decorative Divider */}
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20"></div>
                    </div>
                )}
                {/* Info Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-24"
                >
                    {/* Brand */}
                    <div className="space-y-8 lg:col-span-1">
                        <div className="flex items-center gap-4">
                            <img
                                src="https://sheikhnabeel.com/wp-content/uploads/2025/04/1-1-1536x1536.png"
                                alt="Sheikh Nabeel"
                                className="w-14 h-14 rounded-full object-cover border-2 border-white/10 shadow-xl"
                            />
                            <span className="text-xl font-bold tracking-[0.2em] text-white">
                                SHEIKH<br />NABEEL
                            </span>
                        </div>
                        <p className="text-xs text-white/40 leading-relaxed tracking-wide">
                            Empowering executives and organizations to achieve unprecedented success through strategic advisory and transformational leadership.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] tracking-[0.3em] font-medium text-white/40 uppercase flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-gradient-to-r from-white/50 to-transparent"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-300 tracking-wide"
                                    >
                                        <BsArrowRight className="text-white/60 group-hover:translate-x-1 transition-transform text-xs" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] tracking-[0.3em] font-medium text-white/40 uppercase flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-gradient-to-r from-white/50 to-transparent"></span>
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        to={service.href}
                                        className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-300 tracking-wide"
                                    >
                                        <BsArrowRight className="text-white/60 group-hover:translate-x-1 transition-transform text-xs" />
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] tracking-[0.3em] font-medium text-white/40 uppercase flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-gradient-to-r from-white/50 to-transparent"></span>
                            Newsletter
                        </h4>
                        <p className="text-xs text-white/40 leading-relaxed tracking-wide">
                            Subscribe to receive exclusive insights, industry trends, and leadership strategies.
                        </p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="YOUR EMAIL"
                                className="w-full bg-white/5 border border-white/10 px-6 py-4 pr-12 text-xs text-white placeholder:text-white/30 focus:border-white/20 outline-none transition-colors duration-300 rounded-xl tracking-wider"
                            />
                            <button
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-300 group"
                                aria-label="Subscribe to newsletter"
                            >
                                <BsArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                        <div className="flex items-center gap-2 text-[9px] text-white/30 tracking-wide">
                            <input type="checkbox" className="w-3 h-3 accent-white" id="privacy" />
                            <label htmlFor="privacy">I agree to the privacy policy</label>
                        </div>
                    </div>
                </motion.div>


                {/* Scroll to Top Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="pt-12 border-t border-white/5 flex justify-center"
                >
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:shadow-white/20 hover:bg-white/90 transition-all duration-300"
                        aria-label="Scroll to top"
                    >
                        <BsArrowUpRight className="text-2xl rotate-[-45deg]" />
                    </motion.button>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="pt-8 pb-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <p className="text-[9px] tracking-[0.3em] text-white/20 uppercase font-medium">
                            © {currentYear} Sheikh Nabeel Executive Advisory. Crafted with Excellence.
                        </p>
                        <div className="flex items-center flex-wrap justify-center gap-8 md:gap-12">
                            <a href="#terms" className="text-[9px] tracking-[0.3em] text-white/20 hover:text-white/60 transition-colors uppercase group flex items-center gap-2">
                                Terms & Conditions
                                <BsArrowUpRight className="text-[8px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                            <a href="#privacy" className="text-[9px] tracking-[0.3em] text-white/20 hover:text-white/60 transition-colors uppercase group flex items-center gap-2">
                                Privacy Policy
                                <BsArrowUpRight className="text-[8px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                            <a href="#cookies" className="text-[9px] tracking-[0.3em] text-white/20 hover:text-white/60 transition-colors uppercase group flex items-center gap-2">
                                Cookie Policy
                                <BsArrowUpRight className="text-[8px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer >
    );
};

export default Footer;
