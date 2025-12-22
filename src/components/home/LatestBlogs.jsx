const LatestBlogs = () => {
    const blogs = [
        {
            date: "05/06/2025",
            title: "Top SEO Trends in 2025: What’s Changing & How to Stay Ahead",
            excerpt: "Search Engine Optimization (SEO) is always evolving, and staying ahead means adapting to new trends before your competitors do. As we step deeper into 2025..."
        },
        {
            date: "03/06/2025",
            title: "How to Use AI Tools to Grow Your Business Online",
            excerpt: "Artificial Intelligence (AI) is transforming digital marketing by automating tasks and improving decision-making. Ways AI Can Help Entrepreneurs..."
        }
    ];

    return (
        <section className="py-32 bg-black border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                    <div className="max-w-xl">
                        <p className="text-[10px] tracking-[0.5em] text-accent font-bold uppercase mb-6">LATEST BLOGS</p>
                        <h2 className="text-3xl md:text-5xl font-light text-white uppercase mb-8">READ MY LATEST BLOGS</h2>
                        <p className="text-white/40 font-light leading-relaxed">
                            Stay ahead with our latest insights and updates. From innovative strategies in business transformation to tips on CRM and digital marketing.
                        </p>
                    </div>
                    <a href="#" className="inline-flex items-center space-x-6 group text-white whitespace-nowrap pt-4">
                        <span className="w-12 h-[1px] bg-white group-hover:bg-accent group-hover:w-20 transition-all duration-500"></span>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">/ VIEW MY BLOGS /</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {blogs.map((blog, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="aspect-[16/9] bg-white/5 mb-8 overflow-hidden">
                                {/* Placeholder for blog image */}
                                <div className="w-full h-full bg-white/5 group-hover:bg-white/10 transition-colors"></div>
                            </div>
                            <p className="text-[10px] tracking-widest text-accent mb-4">{blog.date}</p>
                            <h3 className="text-2xl font-light text-white mb-6 uppercase group-hover:text-accent transition-colors leading-snug">
                                {blog.title}
                            </h3>
                            <p className="text-sm text-white/40 leading-relaxed mb-6 line-clamp-3">
                                {blog.excerpt}
                            </p>
                            <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase group-hover:text-accent transition-colors">READ MORE »</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestBlogs;
