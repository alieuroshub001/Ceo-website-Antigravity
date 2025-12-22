import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
    const phrases = [
        "EXCEL AS A BOARD",
        "DRIVE AI STEWARDSHIP",
        "TRANSFORM YOUR BUSINESS",
        "ADVISE C-SUITE LEADERS"
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

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a09]">
            {/* Background Subtle Radial Glow */}
            <div className="absolute inset-0">
                <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[140px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
                {/* Left Side: Typewriter Text */}
                <div className="w-full md:w-[55%] text-center md:text-left z-20">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[10px] tracking-[0.5em] text-white/40 mb-10 uppercase font-medium"
                    >
                        WE HELP YOU
                    </motion.p>

                    <h1 className="text-2xl md:text-[3rem] font-light tracking-tighter text-white mb-8 h-20 md:h-auto min-h-[6rem] md:min-h-[8rem] flex items-center justify-center md:justify-start leading-tight">
                        <span className="inline-block whitespace-nowrap">{displayText}</span>
                        <span className="inline-block w-[2px] h-8 md:h-12 bg-white/80 animate-blink ml-3"></span>
                    </h1>
                </div>

                {/* Right Side: Portrait */}
                <div className="w-full md:w-[45%] relative mt-12 md:mt-0 flex justify-end">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full max-w-lg aspect-[5/6]"
                    >
                        <img
                            src="https://sheikhnabeel.com/wp-content/uploads/2025/05/Untitled-6.png"
                            alt="Sheikh Nabeel"
                            className="w-full h-full object-cover object-top mask-image-fade"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
