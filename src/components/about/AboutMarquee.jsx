import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useState } from 'react';

const AboutMarquee = () => {
    const x = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);
    const baseVelocity = -1; // Pixels per frame (negative = left movement)

    const items = [
        "Business Strategy",
        "Digital Systems",
        "Operations",
        "Client Experience",
        "Growth",
        "Management"
    ];

    // Duplicate items for seamless loop
    const duplicatedItems = [...items, ...items, ...items, ...items];

    // Infinite scroll animation
    useAnimationFrame((t, delta) => {
        if (!isDragging) {
            const currentX = x.get();
            const moveBy = baseVelocity * (delta / 16); // Normalize to 60fps

            // Calculate approximate width of one set
            const itemWidth = 500; // Increased width per item to prevent clipping
            const setWidth = items.length * itemWidth;

            // Reset position when we've scrolled one full set
            if (currentX <= -setWidth) {
                x.set(currentX + setWidth);
            } else if (currentX >= setWidth) {
                x.set(currentX - setWidth);
            } else {
                x.set(currentX + moveBy);
            }
        }
    });

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-black via-[#0a0a09] to-black border-y border-white/5 overflow-hidden">
            <div className="relative">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#0a0a09] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#0a0a09] to-transparent z-10 pointer-events-none"></div>

                <div className="overflow-hidden py-2">
                    <motion.div
                        drag="x"
                        dragConstraints={false}
                        dragElastic={0}
                        dragMomentum={true}
                        dragTransition={{ power: 0.2, timeConstant: 200 }}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={() => setIsDragging(false)}
                        whileTap={{ cursor: "grabbing" }}
                        className="flex space-x-16 md:space-x-20 lg:space-x-24 items-center cursor-grab select-none whitespace-nowrap"
                        style={{
                            x,
                            touchAction: 'pan-y'
                        }}
                    >
                        {duplicatedItems.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-16 md:space-x-20 lg:space-x-24">
                                <span className={`text-2xl md:text-4xl lg:text-5xl font-light tracking-tight ${idx % 2 === 0 ? 'text-white/20' : 'text-white'}`}>
                                    {item}
                                </span>
                                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/50 rounded-full"></span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMarquee;
