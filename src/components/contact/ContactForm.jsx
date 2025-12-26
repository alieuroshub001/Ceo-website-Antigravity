import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

const ContactForm = ({ inquiryType, selectedSlot }) => {
    return (
        <div className="space-y-8 h-full flex flex-col">
            <div className="space-y-2 flex-shrink-0">
                <h3 className="text-3xl font-light text-white">
                    {inquiryType === 'project' ? 'Tell us about your project' :
                        inquiryType === 'careers' ? 'Apply for a position' : 'Get in touch'}
                </h3>
                <p className="text-white/50">
                    {selectedSlot
                        ? `Scheduling for ${selectedSlot.date.toLocaleDateString()} at ${selectedSlot.time}`
                        : "Fill out the form below and I'll get back to you within 24 hours."}
                </p>
            </div>

            <form className="space-y-6 flex-grow flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs text-white/40 uppercase tracking-widest font-medium">Full Name</label>
                        <input
                            type="text"
                            className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:border-white/30 focus:bg-white/10 outline-none transition-all duration-300 rounded-xl"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs text-white/40 uppercase tracking-widest font-medium">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:border-white/30 focus:bg-white/10 outline-none transition-all duration-300 rounded-xl"
                            placeholder="john@company.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs text-white/40 uppercase tracking-widest font-medium">Company / Organization</label>
                    <input
                        type="text"
                        className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:border-white/30 focus:bg-white/10 outline-none transition-all duration-300 rounded-xl"
                        placeholder="Company Name Ltd."
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs text-white/40 uppercase tracking-widest font-medium">
                        {inquiryType === 'project' ? 'Project Details' : 'Message'}
                    </label>
                    <textarea
                        rows="5"
                        className="w-full bg-white/5 border border-white/10 p-6 text-white focus:border-white/30 focus:bg-white/10 outline-none transition-all duration-300 rounded-xl resize-none"
                        placeholder={inquiryType === 'project' ? "Tell us about your goals, timeline, and requirements..." : "How can we help you?"}
                    ></textarea>
                </div>

                {selectedSlot && (
                    <div className="p-4 bg-accent/10 border border-accent/20 rounded-xl flex items-center gap-3 text-accent text-sm">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        Meeting requested for {selectedSlot.date.toLocaleDateString()} at {selectedSlot.time}
                    </div>
                )}

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-auto bg-white text-black py-5 rounded-xl font-semibold tracking-wide flex items-center justify-center gap-3 hover:bg-white/90 transition-all shadow-lg hover:shadow-white/20"
                >
                    {selectedSlot ? 'Confirm Schedule & Send' : 'Send Message'}
                    <BsArrowRight className="text-lg" />
                </motion.button>
            </form>
        </div>
    );
};

export default ContactForm;
