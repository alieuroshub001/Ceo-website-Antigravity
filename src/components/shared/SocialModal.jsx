
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn, FaYoutube, FaInstagram, FaTwitter, FaFacebookF, FaTimes } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { BsArrowRight, BsCalendarCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';

const SocialModal = ({ isOpen, onClose }) => {
    const socialLinks = [
        {
            icon: FaLinkedinIn,
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/sheikhnabeelofficial/?originalSubdomain=pk',
            color: 'hover:bg-[#0077b5] hover:border-[#0077b5]',
            handle: 'Sheikh Nabeel'
        },
        {
            icon: FaYoutube,
            label: 'YouTube',
            href: 'https://www.youtube.com/@Euroshub',
            color: 'hover:bg-[#ff0000] hover:border-[#ff0000]',
            handle: '@Euroshub'
        },
        {
            icon: FaInstagram,
            label: 'Instagram',
            href: 'https://www.instagram.com/sheikhnabeel.official/?hl=en',
            color: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent',
            handle: '@sheikhnabeel.official'
        },
        {
            icon: FaTwitter,
            label: 'Twitter',
            href: 'https://twitter.com/Euroshub',
            color: 'hover:bg-[#1da1f2] hover:border-[#1da1f2]',
            handle: '@Euroshub'
        },
        {
            icon: FaFacebookF,
            label: 'Facebook',
            href: 'https://www.facebook.com/Euroshub.meta',
            color: 'hover:bg-[#1877f2] hover:border-[#1877f2]',
            handle: 'Euroshub'
        },
        {
            icon: SiUpwork,
            label: 'Upwork',
            href: 'https://www.upwork.com/freelancers/sheikhnabeelofficial',
            color: 'hover:bg-[#14a800] hover:border-[#14a800]',
            handle: 'Sheikh Nabeel'
        }
    ];

    if (typeof document === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#0a0a09] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10"
                    >
                        {/* Header Image/Banner */}
                        <div className="h-32 bg-gradient-to-r from-neutral-900 to-black relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://sheikhnabeel.com/wp-content/uploads/2025/05/Untitled-6.png')] bg-cover bg-center opacity-40"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09] to-transparent"></div>

                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all z-20"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <div className="px-8 pb-8 -mt-12 relative">
                            {/* Profile Info */}
                            <div className="flex flex-col items-center text-center mb-8">
                                <div className="w-24 h-24 rounded-full border-4 border-[#0a0a09] shadow-xl overflow-hidden mb-4">
                                    <img
                                        src="https://sheikhnabeel.com/wp-content/uploads/2025/04/1-1-1536x1536.png"
                                        alt="Sheikh Nabeel"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h2 className="text-2xl font-light text-white mb-2">Sheikh Nabeel</h2>
                                <p className="text-xs tracking-[0.2em] text-white/50 uppercase mb-4">Strategic Advisor & Executive Leadership</p>
                                <p className="text-white/60 text-sm max-w-md leading-relaxed">
                                    Empowering founders and global teams to simplify operations, implement scalable systems, and achieve sustainable growth.
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <Link
                                    to="/appointment"
                                    onClick={onClose}
                                    className="flex items-center justify-center gap-3 bg-white text-black py-4 rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors"
                                >
                                    <BsCalendarCheck className="text-lg" />
                                    Book Consultation
                                </Link>
                                <button className="flex items-center justify-center gap-3 bg-white/5 text-white border border-white/10 py-4 rounded-xl font-medium text-sm hover:bg-white/10 transition-colors">
                                    Subscribe to Newsletter
                                    <BsArrowRight />
                                </button>
                            </div>

                            {/* Social Grid */}
                            <div>
                                <h3 className="text-[10px] tracking-[0.2em] text-white/30 uppercase text-center mb-6">Connect across platforms</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {socialLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p - 4 rounded - xl bg - white / [0.03] border border - white / 5 flex flex - col items - center gap - 3 hover: -translate - y - 1 transition - all duration - 300 group ${link.color} hover: text - white`}
                                        >
                                            <link.icon className="text-xl text-white/70 group-hover:text-white transition-colors" />
                                            <div className="text-center">
                                                <div className="text-xs font-medium text-white/90">{link.label}</div>
                                                <div className="text-[10px] text-white/40 group-hover:text-white/80">{link.handle}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default SocialModal;

