import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import heroImage from '../../assets/hero.webp';

const Hero = () => {
    const phrases = [
        "Excel as a Board",
        "Drive AI Stewardship",
        "Transform Your Business",
        "Advise C-Suite Leaders"
    ];

    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleType = () => {
            const currentPhrase = phrases[index % phrases.length];
            const updatedText = isDeleting
                ? currentPhrase.substring(0, displayText.length - 1)
                : currentPhrase.substring(0, displayText.length + 1);

            setDisplayText(updatedText);

            if (!isDeleting && updatedText === currentPhrase) {
                setTypingSpeed(2000);
                setIsDeleting(true);
            } else if (isDeleting && updatedText === "") {
                setIsDeleting(false);
                setIndex((prev) => prev + 1);
                setTypingSpeed(500);
            } else {
                setTypingSpeed(isDeleting ? 50 : 100);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, index, typingSpeed]);

    const highlights = [
        "7+ Years Leadership Experience",
        "Board & C-Suite Advisory",
        "Digital Transformation Expert"
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0a0a09] to-black">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-12 lg:pt-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side: Content */}
                    <div className="text-center lg:text-left space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            {/* Main Heading */}
                            <div className="space-y-4">
                                <h2 className="text-sm text-white/50 font-light tracking-wide">
                                    Helping C-Suite Leaders & Boards
                                </h2>
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight min-h-[6rem] lg:min-h-[8rem] flex flex-col justify-center">
                                    <span className="flex items-center justify-center lg:justify-start">
                                        <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                            {displayText}<span className="inline-block w-[2px] lg:w-[3px] h-8 md:h-16 bg-white/80 animate-blink ml-1"></span>
                                        </span>
                                    </span>
                                </h1>
                            </div>

                            {/* Description */}
                            <p className="text-base text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Navigating digital transformation, AI governance, and strategic growth for sustainable success in a complex global market.
                            </p>

                            {/* Highlights */}
                            <div className="space-y-3 pt-4">
                                {highlights.map((item, idx) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + idx * 0.1 }}
                                        className="flex items-center justify-center lg:justify-start space-x-3"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-white/40" />
                                        <span className="text-xs text-white/50 tracking-wide">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
                        >
                            <Link
                                to="/appointment"
                                className="group relative px-8 py-4 bg-white text-black text-sm font-semibold tracking-wide rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-white/20 flex items-center space-x-2"
                            >
                                <span>Schedule Consultation</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                to="/services"
                                className="px-8 py-4 bg-white/5 text-white text-sm font-medium tracking-wide rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                            >
                                Explore Services
                            </Link>
                        </motion.div>

                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="pt-8 border-t border-white/5"
                        >
                            <p className="text-[10px] tracking-widest text-white/70 uppercase mb-3">Trusted By</p>
                            <div className="flex items-center justify-center lg:justify-start space-x-8">
                                <div className="text-white/70 text-xs font-light">Fortune 500 Companies</div>
                                <div className="w-px h-4 bg-white/30"></div>
                                <div className="text-white/70 text-xs font-light">Global Enterprises</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Portrait */}
                    <div className="relative flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-full max-w-lg"
                        >
                            {/* Glow Effect Behind Image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 rounded-2xl blur-3xl"></div>

                            {/* Image Container */}
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={heroImage}
                                    alt="Sheikh Nabeel - Strategic Advisor"
                                    className="w-full h-full object-cover object-top"
                                    width="900"
                                    height="600"
                                    fetchPriority="high"
                                />
                                {/* Bottom Fade Gradient */}
                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div >

        </section >
    );
};

export default Hero;
