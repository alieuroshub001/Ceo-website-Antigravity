import { motion } from 'framer-motion';

const AboutTestimonials = () => {
    const reviews = [
        {
            text: "We were struggling to position our brand internationally until Sheikh stepped in. His digital growth expertise, branding strategy, and personalized guidance gave us a powerful online presence that truly resonates with our audience.",
            name: "Lisa Ali, CMO",
            company: "Global eCommerce Brand",
            role: "Brand Strategy | Digital Growth | Market Positioning"
        },
        {
            text: "Working with Sheikh was a game-changer. He streamlined our project workflows using ClickUp and automated key processes with Zapier, saving our team hours every week. His strategic thinking helped us scale faster and operate with clarity.",
            name: "Sara Malik",
            company: "CEO of a SaaS Startup",
            role: "Project Management Automation | Workflow Optimization"
        },
        {
            text: "Nabeel helped us rebuild our Zoho CRM from the ground up. From lead automation to customer journey optimization, his CRM strategy directly boosted our retention rates and sales pipeline efficiency.",
            name: "Ahmed Khan, Founder",
            company: "UAE Business Consultancy",
            role: "CRM Implementation | Lead Automation | Client Experience"
        }
    ];

    return (
        <section className="bg-black py-32">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white/5 p-12 border border-white/5 flex flex-col justify-between"
                        >
                            <div className="mb-8">
                                <span className="text-4xl text-accent font-serif">"</span>
                                <p className="text-white/70 italic leading-relaxed mt-4 font-light">
                                    {review.text}
                                </p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">{review.name}</h4>
                                <p className="text-accent text-[10px] uppercase tracking-widest mb-4">{review.company}</p>
                                <p className="text-white/30 text-[9px] uppercase tracking-widest">{review.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTestimonials;
