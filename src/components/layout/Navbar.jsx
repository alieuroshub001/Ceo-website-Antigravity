import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const navLinks = [
        {
            name: 'Services',
            hasDropdown: true,
            path: '/services',
            items: [
                { name: 'Independent Board Advisory', path: '/independent-board-advisory' },
                { name: 'C-Suite Advisory', path: '/c-suite' },
                { name: 'Digital Business Transformation', path: '/digital-business-transform' }
            ]
        },
        {
            name: 'About',
            hasDropdown: true,
            path: '/about',
            items: [
                { name: 'Meet The Network', path: '/network' },
                { name: 'About Sheikh Nabeel', path: '/about' },
                { name: 'Interactive Bio', path: '/about-interactive' }
            ]
        },
        { name: 'Blog', hasDropdown: false, path: '/blog' },
        { name: 'Contact', hasDropdown: false, path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            isScrolled
                ? 'bg-black/95 backdrop-blur-xl border-b border-white/5 py-3 shadow-lg shadow-black/50'
                : 'bg-gradient-to-b from-black/60 to-transparent py-5'
        }`}>
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-sm group-hover:blur-md transition-all"></div>
                            <img
                                src="https://sheikhnabeel.com/wp-content/uploads/2025/04/1-1-1536x1536.png"
                                alt="Sheikh Nabeel"
                                className="w-11 h-11 rounded-full object-cover border border-white/30 relative z-10 shadow-lg"
                            />
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="text-xl font-semibold tracking-tight text-white leading-none">Sheikh Nabeel</span>
                            <span className="text-[9px] tracking-[0.2em] text-white/50 uppercase mt-0.5">Strategic Advisor</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    to={link.path}
                                    className={`flex items-center space-x-1 px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 rounded-md ${
                                        location.pathname === link.path
                                            ? 'text-white bg-white/5'
                                            : 'text-white/70 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    <span>{link.name}</span>
                                    {link.hasDropdown && (
                                        <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 duration-300" />
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {link.hasDropdown && (
                                    <>
                                        <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
                                        <div className="absolute top-[calc(100%+0.5rem)] left-0 w-64 transition-all duration-300 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                                            <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                                                <div className="p-2">
                                                    {link.items.map((item) => (
                                                        <Link
                                                            key={item.path}
                                                            to={item.path}
                                                            className="block px-4 py-3 text-xs text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200 rounded-md"
                                                        >
                                                            <div className="flex items-center justify-between">
                                                                <span>{item.name}</span>
                                                                <div className="w-1 h-1 rounded-full bg-white/20"></div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}

                        {/* CTA Button */}
                        <Link
                            to="/appointment"
                            className="ml-4 px-6 py-2.5 bg-white text-black text-xs font-semibold tracking-wide rounded-md hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-white/20"
                        >
                            Book Consultation
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <motion.button
                        className="lg:hidden text-white p-2 hover:bg-white/5 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden overflow-hidden"
                    >
                        <div className="bg-black/95 backdrop-blur-xl border-t border-white/10">
                            <div className="container mx-auto px-6 py-6 space-y-1">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        <div className="flex items-center justify-between">
                                            <Link
                                                to={link.path}
                                                onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                                                className={`flex-1 px-4 py-3 text-sm font-medium transition-all rounded-md ${
                                                    location.pathname === link.path
                                                        ? 'text-white bg-white/10'
                                                        : 'text-white/70'
                                                }`}
                                            >
                                                {link.name}
                                            </Link>
                                            {link.hasDropdown && (
                                                <button
                                                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                                    className="p-3 text-white/70"
                                                >
                                                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                                </button>
                                            )}
                                        </div>

                                        {/* Mobile Dropdown */}
                                        <AnimatePresence>
                                            {link.hasDropdown && activeDropdown === link.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="ml-4 mt-1 space-y-1 overflow-hidden"
                                                >
                                                    {link.items.map((item) => (
                                                        <Link
                                                            key={item.path}
                                                            to={item.path}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="block px-4 py-2.5 text-xs text-white/60 hover:text-white hover:bg-white/5 transition-all rounded-md"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}

                                <Link
                                    to="/appointment"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full mt-4 px-4 py-3 bg-white text-black text-sm font-semibold text-center rounded-md hover:bg-white/90 transition-all"
                                >
                                    Book Consultation
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
