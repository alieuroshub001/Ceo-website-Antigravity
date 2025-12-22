const ContactPreview = () => {
    return (
        <section className="py-32 bg-[#050505]">
            <div className="container mx-auto px-6 text-center">
                <p className="text-[10px] tracking-[0.5em] text-accent font-bold uppercase mb-8">LET'S TALK</p>
                <h2 className="text-4xl md:text-6xl font-light text-white uppercase mb-12 tracking-tight">
                    Keep In Touch
                </h2>
                <p className="text-lg text-white/60 font-light leading-loose mb-16 max-w-2xl mx-auto">
                    Have a question or a project in mind? Let’s connect. I’m always open to collaboration, consultation, or sharing insights to help your business grow.
                </p>
                <a href="mailto:hello@sheikhnabeel.com" className="inline-flex items-center space-x-6 group text-white">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">/ LETS CHAT /</span>
                    <span className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-500"></span>
                </a>
            </div>
        </section>
    );
};

export default ContactPreview;
