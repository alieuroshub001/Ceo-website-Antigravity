import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add subscription logic here
        console.log('Subscribing:', email);
        setEmail('');
        alert('Thank you for subscribing!');
    };

    return (
        <section id="newsletter-section" className="relative bg-black text-white py-24 lg:py-32 overflow-hidden">
            {/* Background Gradients for seamless integration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#17b6b2]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#17b6b2]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Typography & Context */}
                    <div className="space-y-12">
                        <div className="space-y-2">
                            <span className="text-[#17b6b2] text-xs font-bold tracking-[0.3em] uppercase">Private Briefing</span>
                            <div className="h-px w-12 bg-white/10"></div>
                        </div>

                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[0.9] text-white">
                            Strategic <br />
                            <span className="italic font-serif text-[#17b6b2]">Foresight</span> <br />
                            Delivered.
                        </h2>

                        <blockquote className="border-l-2 border-[#17b6b2] pl-6 py-2 italic text-white/50 text-lg max-w-md font-serif">
                            "The only way to predict the future is to create it. Join the network of leaders shaping tomorrow."
                        </blockquote>

                        <div className="flex items-center gap-8 pt-4">
                            <div className="text-center">
                                <div className="text-3xl font-light text-white">50K+</div>
                                <div className="text-[10px] tracking-widest uppercase text-white/30">Subscribers</div>
                            </div>
                            <div className="w-px h-12 bg-white/10"></div>
                            <div className="text-center">
                                <div className="text-3xl font-light text-white">Weekly</div>
                                <div className="text-[10px] tracking-widest uppercase text-white/30">Insights</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form & Interaction */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/[0.03] border border-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl relative overflow-hidden"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#17b6b2]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10">
                                    <Mail className="w-5 h-5 text-[#17b6b2]" />
                                </div>

                                <h3 className="text-2xl font-light mb-4 text-white">Join the Inner Circle</h3>
                                <p className="text-white/50 mb-8 font-light leading-relaxed">
                                    Get exclusive access to comprehensive breakdowns of AI governance, digital transformation plays, and board-level strategies.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="relative">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Boardroom Email Address"
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder:text-white/30 focus:border-[#17b6b2] focus:bg-black/80 outline-none transition-all"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full group bg-white text-black py-4 rounded-lg font-medium tracking-wide hover:bg-[#17b6b2] hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
                                    >
                                        <span>Subscribe Now</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>

                                <p className="text-white/20 text-[10px] uppercase tracking-widest text-center mt-6">
                                    No Spam. Unsubscribe Anytime.
                                </p>
                            </div>
                        </motion.div>

                        {/* Background Deco Line */}
                        <div className="absolute -z-10 top-1/2 -right-12 w-full h-px bg-white/5 -rotate-12"></div>
                        <div className="absolute -z-10 bottom-0 left-12 w-px h-full bg-white/5"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
