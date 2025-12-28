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
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-[90vw] sm:w-96 max-h-[600px] flex flex-col border border-gray-100 dark:border-gray-800 overflow-hidden"
                        style={{ height: '500px' }}
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex justify-between items-center text-white">
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                                        <img
                                            src={avatarImage}
                                            alt="Nabeel AI"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0a0a09] rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="text-white font-medium text-sm">Nabeel AI</h3>
                                    <p className="text-white/40 text-[10px] flex items-center gap-1">
                                        <div className="w-1 h-1 rounded-full bg-green-500"></div>
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                                aria-label="Close Chat"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900/50">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.role === 'assistant' && (
                                        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 dark:border-gray-700 flex-shrink-0 mt-1">
                                            <img
                                                src={avatarImage}
                                                alt="AI"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}

                                    <div className={`
                    p-3 rounded-2xl text-sm max-w-[80%] whitespace-pre-wrap
                    ${msg.role === 'user'
                                            ? 'bg-primary text-white rounded-tr-none'
                                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-none shadow-sm'
                                        }
                  `}>
                                        {msg.content}
                                    </div>

                                    {msg.role === 'user' && (
                                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <User className="w-4 h-4 text-gray-500" />
                                        </div>
                                    )}
                                </div>
                            ))}

                            {loading && (
                                <div className="flex justify-start gap-3">
                                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 dark:border-gray-700 flex-shrink-0 mt-1">
                                        <img
                                            src={avatarImage}
                                            alt="AI"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none border border-gray-100 dark:border-gray-700 shadow-sm flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 text-primary animate-spin" />
                                        <span className="text-xs text-gray-400">Thinking...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-3 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask me anything..."
                                    className="w-full pl-4 pr-12 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || loading}
                                    className="absolute right-2 p-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="text-center mt-2">
                                <p className="text-[10px] text-gray-400">Powered by Ollama Cloud AI</p>
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
                className="h-14 w-14 bg-primary text-white rounded-full shadow-lg hover:shadow-primary/30 flex items-center justify-center transition-all duration-300 z-50"
                aria-label="Toggle Chat"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
