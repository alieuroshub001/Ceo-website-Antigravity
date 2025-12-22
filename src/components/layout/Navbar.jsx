import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'SERVICES', hasDropdown: true, path: '/services' },
        { name: 'ABOUT', hasDropdown: true, path: '/about' },
        { name: 'BLOG', hasDropdown: false, path: '/blog' },
        { name: 'BOOK APPOINTMENT', hasDropdown: false, path: '/appointment' },
        { name: 'CONTACT', hasDropdown: false, path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3">
                    <img
                        src="https://sheikhnabeel.com/wp-content/uploads/2025/04/1-1-1536x1536.png"
                        alt="Sheikh Nabeel Logo"
                        className="w-10 h-10 rounded-full object-cover border border-white/20"
                    />
                    <span className="text-2xl font-bold tracking-widest text-white">SHEIKH NABEEL</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-12 items-center">
                    {navLinks.map((link) => (
                        <div key={link.name} className="group relative">
                            <Link
                                to={link.path || '#'}
                                className="text-[10px] font-bold tracking-[0.3em] text-white/60 hover:text-white transition-colors uppercase block py-2"
                            >
                                {link.name}
                            </Link>

                            {/* Hover Bridge (invisible area to keep menu open) */}
                            {link.hasDropdown && (
                                <div className="absolute top-full left-0 w-full h-4 bg-transparent"></div>
                            )}

                            {link.hasDropdown && (
                                <div className="absolute top-[calc(100%+0.5rem)] left-0 w-56 pt-2 transition-all duration-300 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 z-50">
                                    <div className="bg-black border border-white/10 p-6 shadow-2xl shadow-accent/5">
                                        <div className="space-y-4">
                                            {link.name === 'SERVICES' ? (
                                                <>
                                                    <Link to="/independent-board-advisory" className="block text-[10px] tracking-widest text-white/40 hover:text-white transition-colors uppercase">Independent Board Advisory</Link>
                                                    <Link to="/c-suite" className="block text-[10px] tracking-widest text-white/40 hover:text-white transition-colors uppercase">C-Suite Advisory</Link>
                                                    <Link to="/digital-business-transform" className="block text-[10px] tracking-widest text-white/40 hover:text-white transition-colors uppercase">Digital Business Transformation</Link>
                                                </>
                                            ) : (
                                                <>
                                                    <Link to="/network" className="block text-[10px] tracking-widest text-white/40 hover:text-white transition-colors uppercase">Meet The Network</Link>
                                                    <Link to="/about" className="block text-[10px] tracking-widest text-white/40 hover:text-white transition-colors uppercase">About Sheikh Nabeel</Link>
                                                    <Link to="/about-interactive" className="block text-[10px] tracking-widest text-white/40 hover:text-white transition-colors uppercase">Interactive Bio (2.0)</Link>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-full bg-black border-t border-white/10 p-8 flex flex-col space-y-8 md:hidden h-screen"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path || '#'}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xs font-bold tracking-[0.3em] text-white uppercase"
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
