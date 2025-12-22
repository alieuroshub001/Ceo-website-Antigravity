import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "We were struggling to position our brand internationally until Sheikh stepped in. His digital growth expertise, branding strategy, and personalized guidance gave us a powerful online presence that truly resonates with our audience.",
            author: "Lisa T., CMO",
            company: "Global eCommerce Brand"
        },
        {
            quote: "Working with Sheikh was a game-changer. He streamlined our project workflows using ClickUp and automated key processes with Zapier, saving our team hours every week. His strategic thinking helped us scale faster and operate with clarity.",
            author: "Sara Malik, CEO",
            company: "SaaS Startup"
        },
        {
            quote: "Nabeel helped us rebuild our Zoho CRM from the ground up. From lead automation to customer journey optimization, his CRM strategy directly boosted our retention rates and sales pipeline efficiency.",
            author: "Ahmed Khan, Founder",
            company: "UAE Business Consultancy"
        }
    ];

    return (
        <section className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="flex-1"
                        >
                            <div className="mb-8">
                                <span className="text-4xl text-accent font-serif">"</span>
                            </div>
                            <p className="text-lg md:text-xl font-light text-white leading-relaxed mb-8 italic italic">
                                {t.quote}
                            </p>
                            <div>
                                <h5 className="text-[10px] tracking-[0.3em] font-bold text-white uppercase mb-1">{t.author}</h5>
                                <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase">{t.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
