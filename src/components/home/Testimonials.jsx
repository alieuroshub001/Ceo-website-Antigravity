import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useState, useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const x = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);
    const baseVelocity = -1; // Pixels per frame (negative = left movement)
    const containerRef = useRef(null);

    const testimonials = [
        {
            quote: "We were struggling to position our brand internationally until Sheikh stepped in. His digital growth expertise, branding strategy, and personalized guidance gave us a powerful online presence that truly resonates with our audience.",
            author: "Lisa T.",
            role: "Chief Marketing Officer",
            company: "Global eCommerce Brand",
            rating: 5
        },
        {
            quote: "Working with Sheikh was a game-changer. He streamlined our project workflows using ClickUp and automated key processes with Zapier, saving our team hours every week. His strategic thinking helped us scale faster and operate with clarity.",
            author: "Sara Malik",
            role: "Chief Executive Officer",
            company: "SaaS Startup",
            rating: 5
        },
        {
            quote: "Nabeel helped us rebuild our Zoho CRM from the ground up. From lead automation to customer journey optimization, his CRM strategy directly boosted our retention rates and sales pipeline efficiency.",
            author: "Ahmed Khan",
            role: "Founder & CEO",
            company: "UAE Business Consultancy",
            rating: 5
        },
        {
            quote: "Sheikh Nabeel's board advisory transformed our governance framework. His expertise in AI stewardship and digital transformation strategy was instrumental in positioning our company for sustainable growth and securing investor confidence.",
            author: "David Anderson",
            role: "Board Chairman",
            company: "FutureTech Solutions",
            rating: 5
        },
        {
            quote: "The strategic roadmap Sheikh Nabeel developed for our Middle East expansion exceeded all expectations. His deep understanding of regional business dynamics and operational excellence helped us establish a strong market presence within months.",
            author: "Fatima Al-Mansouri",
            role: "Managing Director",
            company: "Gulf Commerce Group",
            rating: 5
        },
        {
            quote: "Sheikh Nabeel's leadership development program transformed our C-suite team. His mentorship and proven frameworks helped us scale from 50 to 200 employees while maintaining our culture and operational efficiency.",
            author: "James Thompson",
            role: "Chief People Officer",
            company: "ScaleUp Enterprises",
            rating: 5
        },
        {
            quote: "His hands-on approach to process optimization and operational excellence helped us achieve ISO certification ahead of schedule. Sheikh Nabeel's ability to identify inefficiencies and implement practical solutions made all the difference.",
            author: "Priya Sharma",
            role: "VP Operations",
            company: "Global Manufacturing Inc",
            rating: 5
        }
    ];

    // Duplicate testimonials for seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    // Handle horizontal scroll/swipe (two-finger swipe on trackpad)
    const handleWheel = (e) => {
        // Check if it's a horizontal scroll (deltaX) or if shift is pressed for horizontal scroll
        const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);

        if (isHorizontalScroll) {
            e.preventDefault();
            const currentX = x.get();
            const scrollAmount = e.deltaX * 1.5; // Adjust sensitivity

            // Calculate the width of one set of testimonials
            const cardWidth = 400 + 24; // card width + gap
            const setWidth = testimonials.length * cardWidth;

            let newX = currentX - scrollAmount;

            // Handle infinite loop wrapping
            if (newX <= -setWidth) {
                newX = newX + setWidth;
            } else if (newX >= setWidth) {
                newX = newX - setWidth;
            }

            x.set(newX);
        }
    };

    // Infinite scroll animation
    useAnimationFrame((t, delta) => {
        if (!isDragging) {
            const currentX = x.get();
            const moveBy = baseVelocity * (delta / 16); // Normalize to 60fps

            // Calculate the width of one set of testimonials (approximately)
            const cardWidth = 400 + 24; // card width + gap
            const setWidth = testimonials.length * cardWidth;

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
        <section className="relative py-16 lg:py-20 bg-black overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.02, 0.03, 0.02],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[120px]"
                />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 px-6"
                >
                    <div className="inline-flex items-center space-x-2 mb-4">
                        <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-white/20"></div>
                        <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase font-light">Testimonials</span>
                        <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-white/20"></div>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2 tracking-tight">
                        Trusted By Leaders
                    </h2>
                    <p className="text-sm text-white/40 font-light">
                        Real impact, real results
                    </p>
                </motion.div>

                {/* Infinite Marquee */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                    {/* Marquee Container */}
                    <div
                        ref={containerRef}
                        onWheel={handleWheel}
                        className="overflow-hidden group/marquee"
                    >
                        <motion.div
                            drag="x"
                            dragConstraints={false}
                            dragElastic={0}
                            dragMomentum={true}
                            dragTransition={{ power: 0.2, timeConstant: 200 }}
                            onDragStart={() => setIsDragging(true)}
                            onDragEnd={() => setIsDragging(false)}
                            whileTap={{ cursor: "grabbing" }}
                            className="flex gap-6 cursor-grab select-none"
                            style={{
                                x,
                                touchAction: 'pan-y'
                            }}
                        >
                            {duplicatedTestimonials.map((testimonial, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 w-[400px] group"
                                >
                                    <div className="relative h-full">
                                        <div className="absolute -inset-[1px] bg-gradient-to-r from-white/8 via-white/4 to-white/8 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        <div className="relative bg-white/[0.02] backdrop-blur-lg border border-white/[0.06] rounded-xl p-6 h-full flex flex-col">
                                            {/* Top accent */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

                                            {/* Quote Icon */}
                                            <div className="absolute top-4 right-4">
                                                <Quote className="w-7 h-7 text-white/[0.05]" />
                                            </div>

                                            {/* Stars */}
                                            <div className="flex space-x-1 mb-4">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-3.5 h-3.5 fill-white/35 text-white/35" />
                                                ))}
                                            </div>

                                            {/* Quote */}
                                            <p className="text-sm font-light text-white/80 leading-relaxed mb-6 flex-grow">
                                                "{testimonial.quote}"
                                            </p>

                                            {/* Author */}
                                            <div className="flex items-center space-x-3 border-t border-white/[0.05] pt-4">
                                                <div className="relative w-9 h-9 bg-white/[0.06] backdrop-blur-sm rounded-full flex items-center justify-center border border-white/[0.08] flex-shrink-0">
                                                    <span className="text-white/70 font-light text-sm">
                                                        {testimonial.author.charAt(0)}
                                                    </span>
                                                </div>
                                                <div className="min-w-0">
                                                    <h4 className="text-sm font-light text-white truncate">
                                                        {testimonial.author}
                                                    </h4>
                                                    <p className="text-xs text-white/35 font-light truncate">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
