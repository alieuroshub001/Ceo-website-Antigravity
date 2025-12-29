import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOllama } from '../../hooks/useOllama';

const ChatWidget = () => {
    // ... (state)
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Hi there! I'm Nabeel AI. How can I help you today?" }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const { sendMessage, loading } = useOllama();
    const avatarImage = "/chat-logo.png"; // Absolute path to public folder image

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const userMsg = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Pass context of conversation to the hook
        // Note: In a real app we might limit context window size
        const newContext = [...messages, userMsg].map(m => ({ role: m.role, content: m.content }));

        const responseContent = await sendMessage(newContext);

        setMessages(prev => [...prev, { role: 'assistant', content: responseContent }]);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 bg-[#0a0a09]/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl w-[90vw] sm:w-96 overflow-hidden flex flex-col"
                        style={{ height: '500px', boxShadow: '0 0 50px -12px rgba(23, 182, 178, 0.25)' }}
                    >
                        {/* Header */}
                        <div className="p-4 flex justify-between items-center border-b border-white/10 bg-white/5">
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[#17b6b2]/30">
                                        <img
                                            src={avatarImage}
                                            alt="Nabeel AI"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#17b6b2] border-2 border-[#0a0a09] rounded-full shadow-[0_0_8px_#17b6b2]"></div>
                                </div>
                                <div>
                                    <h3 className="text-white font-medium text-sm tracking-wide">Nabeel AI</h3>
                                    <p className="text-[#17b6b2] text-[10px] flex items-center gap-1 font-medium">
                                        <div className="w-1 h-1 rounded-full bg-[#17b6b2] animate-pulse"></div>
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                                aria-label="Close Chat"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.role === 'assistant' && (
                                        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 flex-shrink-0 mt-1">
                                            <img
                                                src={avatarImage}
                                                alt="AI"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}

                                    <div className={`
                    p-3.5 rounded-2xl text-sm max-w-[85%] whitespace-pre-wrap leading-relaxed
                    ${msg.role === 'user'
                                            ? 'bg-[#17b6b2] text-black font-medium rounded-tr-none shadow-[0_4px_20px_-5px_rgba(23,182,178,0.4)]'
                                            : 'bg-white/5 text-gray-200 border border-white/10 rounded-tl-none'
                                        }
                  `}>
                                        {msg.content}
                                    </div>

                                    {msg.role === 'user' && (
                                        <div className="w-8 h-8 bg-[#17b6b2]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-[#17b6b2]/20">
                                            <User className="w-4 h-4 text-[#17b6b2]" />
                                        </div>
                                    )}
                                </div>
                            ))}

                            {loading && (
                                <div className="flex justify-start gap-3">
                                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 flex-shrink-0 mt-1">
                                        <img
                                            src={avatarImage}
                                            alt="AI"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10 flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 text-[#17b6b2] animate-spin" />
                                        <span className="text-xs text-gray-400">Processing...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-black/20">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full pl-4 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#17b6b2]/50 focus:border-[#17b6b2]/50 text-sm text-white placeholder-gray-500 transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || loading}
                                    className="absolute right-2 p-2 bg-[#17b6b2] text-black rounded-lg hover:bg-[#15a3a0] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-[#17b6b2]/20"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="text-center mt-2.5">
                                <p className="text-[10px] text-gray-600 font-medium tracking-wide uppercase">AI Assistant v1.0 • Powered by Antigravity</p>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="h-14 w-14 bg-[#17b6b2] text-black rounded-full shadow-[0_0_30px_-5px_rgba(23,182,178,0.6)] hover:shadow-[0_0_40px_-5px_rgba(23,182,178,0.8)] flex items-center justify-center transition-all duration-300 z-50 border border-white/20"
                aria-label="Toggle Chat"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
