
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BookingForm = () => {
    return (
        <section className="py-12 bg-[#0a0a09]">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Context */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-3xl text-white font-light mb-4 leading-tight">Transformation <br />Begins Here.</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                I don't just "chat." I diagnose, deconstruct, and rebuild. In this session, we cut through the noise to identify the single most leveragable action you can take immediately.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-accent/10 rounded-lg">
                                    <Clock className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1 text-sm">45-Minute Intensive</h4>
                                    <p className="text-xs text-white/50">Zero fluff. High impact.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-accent/10 rounded-lg">
                                    <Calendar className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1 text-sm">Priority Scheduling</h4>
                                    <p className="text-xs text-white/50">Executive slots reserved.</p>
                                </div>
                            </div>
                        </div>


                        {/* The 45-Minute Protocol - High Value ROI */}
                        <div className="pt-8 border-t border-white/10 space-y-6">
                            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] opacity-80">The 45-Minute Executive Protocol</h4>
                            <div className="space-y-4">
                                {[
                                    { step: "01", title: "Rapid Diagnosis", desc: "Deconstruct your current bottleneck." },
                                    { step: "02", title: "Strategic Calibration", desc: "Align vision with market reality." },
                                    { step: "03", title: "The Lever", desc: "Identify the one action with 10x ROI." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <span className="text-accent font-mono text-sm opacity-60 group-hover:opacity-100 transition-opacity">{item.step}</span>
                                        <div>
                                            <h5 className="text-white text-sm font-medium">{item.title}</h5>
                                            <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-white/60">First Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-white/60">Last Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-white/60">Work Email</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="john@company.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-white/60 font-medium">Focus Area</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-all hover:bg-white/[0.07]">
                                    <option className="bg-black">Custom Software Development</option>
                                    <option className="bg-black">Mobile & Web App Development</option>
                                    <option className="bg-black">AI & Machine Learning Solutions</option>
                                    <option className="bg-black">Enterprise ERP & CRM Solutions</option>
                                    <option className="bg-black">Cloud Infrastructure & DevOps</option>
                                    <option className="bg-black">UI/UX Design & Prototyping</option>
                                    <option className="bg-black">Cybersecurity & Compliance</option>
                                    <option className="bg-black">Blockchain & Web3 Development</option>
                                    <option className="bg-black">Legacy System Modernization</option>
                                    <option className="bg-black">Dedicated Development Teams</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-white/60 font-medium">The Strategic Bottleneck / Challenge</label>
                                <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-all hover:bg-white/[0.07] h-32 resize-none" placeholder="Briefly describe the core challenge preventing your next level of growth..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-accent text-black font-semibold py-4 rounded-lg hover:bg-accent/90 transition-all flex items-center justify-center space-x-2 group shadow-[0_0_20px_rgba(23,182,178,0.3)] hover:shadow-[0_0_30px_rgba(23,182,178,0.5)]">
                                <span>Request Consultation</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Privacy Note */}
                            <div className="text-center pt-2">
                                <p className="text-[10px] text-white/30 flex items-center justify-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-green-500/50 inline-block"></span>
                                    100% Confidential & Encrypted. No commitment required.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
