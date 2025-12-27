import { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactHero from '../components/contact/ContactHero';
import InquiryTypeSelector from '../components/contact/InquiryTypeSelector';
import MeetingScheduler from '../components/contact/MeetingScheduler';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
    const [inquiryType, setInquiryType] = useState('project'); // project, general, careers
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSlotSelect = (slot) => {
        setSelectedSlot(slot);
        // smooth scroll to form
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-black">
            <ContactHero />

            <div className="container mx-auto px-6 lg:px-12 pb-12 md:pb-20">
                <InquiryTypeSelector
                    selectedType={inquiryType}
                    onSelect={(type) => {
                        setInquiryType(type);
                        setSelectedSlot(null);
                    }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
                    {/* Left Column: Dynamic Form (Moved First per user request) */}
                    <motion.div
                        id="contact-form"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="h-full"
                    >
                        <ContactForm
                            inquiryType={inquiryType}
                            selectedSlot={selectedSlot}
                        />
                    </motion.div>

                    {/* Right Column: Scheduler or Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-full"
                    >
                        {inquiryType === 'project' ? (
                            <div className="space-y-8 h-full flex flex-col">
                                <div>
                                    <h3 className="text-2xl font-light text-white mb-4">Fast-Track Your Project</h3>
                                    <p className="text-white/60 leading-relaxed">
                                        Select a time on our engineering calendar to discuss your technical requirements directly with a Solution Architect.
                                    </p>
                                    <div className="mt-4 inline-block bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                                        <p className="text-xs text-accent font-medium flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                            Limited Advisory Slots Available for Q1
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <MeetingScheduler onSelectSlot={handleSlotSelect} />
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-12 h-full flex flex-col justify-center">
                                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-xl font-medium text-white mb-4">Global Headquarters</h3>
                                    <p className="text-white/60 leading-relaxed mb-6">
                                        Office 509, 5th Floor, Kohistan Tower<br />
                                        Saddar, Rawalpindi, 46000<br />
                                        Pakistan
                                    </p>
                                    <p className="text-white/60">Mon-Fri: 9am - 6pm PKT</p>
                                </div>
                                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-xl font-medium text-white mb-4">Direct Contact</h3>
                                    <div className="space-y-4">
                                        <a href="mailto:hello@sheikhnabeel.com" className="block text-accent hover:text-white transition-colors">
                                            hello@sheikhnabeel.com
                                        </a>
                                        <a href="tel:+923000369622" className="block text-white/60 hover:text-white transition-colors">
                                            +92 300 0369 622
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
