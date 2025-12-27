import { motion } from 'framer-motion';
import { Mail, ArrowRight, ExternalLink, TrendingUp, BookOpen } from 'lucide-react';

const NewsletterIssue = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4 font-sans">
            {/* Email Container */}
            <div className="max-w-[600px] mx-auto bg-black border border-white/10 rounded-none md:rounded-xl overflow-hidden shadow-2xl">

                {/* Header */}
                <header className="bg-[#17b6b2]/10 border-b border-[#17b6b2]/20 p-8 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-black border border-[#17b6b2]/30 rounded-full flex items-center justify-center">
                            <Mail className="w-5 h-5 text-[#17b6b2]" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-serif italic tracking-wide text-white mb-2">Private Briefing</h1>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#17b6b2]">By Sheikh Nabeel</p>

                    <div className="flex justify-center gap-6 mt-6 text-[10px] text-white/40 uppercase tracking-widest">
                        <span>Issue #042</span>
                        <span>•</span>
                        <span>October 24, 2025</span>
                        <span>•</span>
                        <span>5 min read</span>
                    </div>
                </header>

                {/* Body Content */}
                <div className="p-8 md:p-12 space-y-12">

                    {/* Editor's Note */}
                    <section>
                        <h2 className="text-sm font-bold text-[#17b6b2] uppercase tracking-widest mb-6">Editor's Note</h2>
                        <div className="prose prose-invert prose-sm max-w-none text-white/80 leading-relaxed font-serif">
                            <p>
                                <span className="text-3xl float-left mr-2 mt-[-6px] text-white">W</span>
                                elcome back to the Private Briefing. This week, we're cutting through the noise around "Agentic AI." Everyone is talking about it, but few boards understand the governance implications.
                            </p>
                            <p>
                                When software starts making decisions—triggering payments, signing contracts, deploying code—without human approval, where does the liability sit? Let’s dive in.
                            </p>
                        </div>
                        <div className="mt-6 flex items-center gap-3">
                            <img
                                src="https://sheikhnabeel.com/wp-content/uploads/2025/04/1-1-1536x1536.png"
                                alt="Author"
                                className="w-10 h-10 rounded-full border border-white/20"
                            />
                            <div>
                                <p className="text-xs font-medium text-white">Sheikh Nabeel</p>
                                <p className="text-[10px] text-white/40 uppercase">Strategic Advisor</p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-white/10" />

                    {/* Deep Dive */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <TrendingUp className="w-4 h-4 text-[#17b6b2]" />
                            <h2 className="text-sm font-bold text-white uppercase tracking-widest">The Deep Dive</h2>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-light mb-6 text-white leading-tight">
                            The Liability of Autonomy
                        </h3>

                        <div className="prose prose-invert prose-sm max-w-none text-white/70 space-y-4">
                            <p>
                                Traditional SaaS tools are passive. You click a button, they do a task. Agentic AI is active. You give it a goal ("Increase sales leads"), and it figures out the steps.
                            </p>
                            <p>
                                <strong>The Risk:</strong> If your AI sales agent hallucinates and promises a discount you can't honor, is that a binding contract? In many jurisdictions, the answer is leaning towards "Yes."
                            </p>
                            <blockquote className="border-l-2 border-[#17b6b2] pl-4 italic text-white my-6">
                                "We are moving from a 'Pilot' model to a 'Co-pilot' model, and soon to an 'Autopilot' model. The governance rails must be built before the switch is flipped."
                            </blockquote>
                            <p>
                                <strong>The Playbook for Boards:</strong>
                            </p>
                            <ul className="list-disc pl-4 space-y-2 text-white/80">
                                <li><strong>Rate Limiting:</strong> Hard caps on dollar values an agent can authorize.</li>
                                <li><strong>Human-in-the-Loop (HITL):</strong> Mandatory review for "Type 1" irreversible decisions.</li>
                                <li><strong>Audit Logs:</strong> Immutable records of the agent's "Chain of Thought."</li>
                            </ul>
                        </div>

                        <button className="mt-8 group flex items-center gap-2 text-xs font-medium text-[#17b6b2] hover:text-white transition-colors">
                            READ THE FULL FRAMEWORK <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </section>

                    {/* Market Pulse */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <h2 className="text-xs font-bold text-white uppercase tracking-widest">Market Pulse</h2>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-4 items-start">
                                <span className="text-[#17b6b2] font-mono text-xs mt-1">01</span>
                                <div>
                                    <h4 className="text-sm font-medium text-white mb-1">NVIDIA's New Moat</h4>
                                    <p className="text-xs text-white/50 leading-relaxed">It's not just chips anymore. Their new software stack is locking in enterprise workflows for the next decade.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-[#17b6b2] font-mono text-xs mt-1">02</span>
                                <div>
                                    <h4 className="text-sm font-medium text-white mb-1">The cSaaS Pivot</h4>
                                    <p className="text-xs text-white/50 leading-relaxed">Cybersecurity-as-a-Service is seeing a 40% YoY valuation bump as threats become automated.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Curated */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="w-4 h-4 text-[#17b6b2]" />
                            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Curated</h2>
                        </div>
                        <div className="space-y-4">
                            <a href="#" className="block group p-4 border border-white/5 rounded-lg hover:border-white/20 transition-all bg-white/[0.02]">
                                <h4 className="text-sm font-medium text-white group-hover:text-[#17b6b2] transition-colors mb-1 flex items-center justify-between">
                                    The End of Software (The Atlantic)
                                    <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-[#17b6b2]" />
                                </h4>
                                <p className="text-xs text-white/40">A provocative look at how LLMs might replace traditional GUIs.</p>
                            </a>
                            <a href="#" className="block group p-4 border border-white/5 rounded-lg hover:border-white/20 transition-all bg-white/[0.02]">
                                <h4 className="text-sm font-medium text-white group-hover:text-[#17b6b2] transition-colors mb-1 flex items-center justify-between">
                                    McKinsey's State of AI 2025
                                    <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-[#17b6b2]" />
                                </h4>
                                <p className="text-xs text-white/40">The latest data on adoption curves in the Fortune 500.</p>
                            </a>
                        </div>
                    </section>

                </div>

                {/* Footer */}
                <footer className="bg-white/5 p-8 text-center border-t border-white/10">
                    <div className="flex justify-center gap-4 mb-6">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#17b6b2] transition-colors cursor-pointer">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#17b6b2] transition-colors cursor-pointer">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        </div>
                    </div>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest mb-4">
                        Sent to boardroom@stakeholders.com
                    </p>
                    <div className="flex justify-center gap-4 text-[10px] text-white/20">
                        <a href="#" className="hover:text-white transition-colors">Unsubscribe</a>
                        <span>•</span>
                        <a href="#" className="hover:text-white transition-colors">Preferences</a>
                        <span>•</span>
                        <a href="#" className="hover:text-white transition-colors">View Online</a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default NewsletterIssue;
