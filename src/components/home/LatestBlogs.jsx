const LatestBlogs = () => {
    const blogs = [
        {
            date: "05/06/2025",
            category: "SEO & STRATEGY",
            title: "Top SEO Trends in 2025: What's Changing & How to Stay Ahead",
            excerpt: "Search Engine Optimization (SEO) is always evolving, and staying ahead means adapting to new trends before your competitors do. Discover the latest algorithmic shifts, AI-powered search features, and optimization strategies that will define success in 2025.",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        },
        {
            date: "03/06/2025",
            category: "AI & INNOVATION",
            title: "How to Use AI Tools to Grow Your Business Online",
            excerpt: "Artificial Intelligence (AI) is transforming digital marketing by automating tasks and improving decision-making. Learn how to leverage cutting-edge AI tools to enhance customer engagement, optimize campaigns, and accelerate your business growth in the digital landscape.",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
        }
    ];

    return (
        <section className="relative py-32 bg-gradient-to-b from-black via-[#0a0a09] to-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px]"></div>
            </div>

            {/* Top Border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-white/50 to-transparent"></div>
                            <p className="text-[10px] tracking-[0.3em] text-white/40 font-medium uppercase">INSIGHTS & EXPERTISE</p>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
                            Latest <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Blogs</span>
                        </h2>
                        <p className="text-base text-white/60 leading-relaxed">
                            Stay ahead with cutting-edge insights on business transformation, digital marketing strategies,
                            and innovative solutions that drive measurable results.
                        </p>
                    </div>

                    {/* View All Button */}
                    <a
                        href="#"
                        className="group relative inline-flex items-center gap-6 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 mt-8 lg:mt-0 rounded-lg"
                    >
                        <span className="text-[10px] font-medium tracking-wide text-white uppercase transition-colors">
                            VIEW ALL BLOGS
                        </span>
                        <svg
                            className="w-4 h-4 text-white/60 group-hover:translate-x-2 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {blogs.map((blog, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden rounded-xl"
                        >
                            {/* Hover Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10 p-8 lg:p-10">
                                {/* Image with Overlay */}
                                <div className="relative aspect-[16/9] mb-8 overflow-hidden bg-gradient-to-br from-white/10 to-white/5 rounded-lg">
                                    {/* Blog Image */}
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/60 group-hover:via-black/20 group-hover:to-transparent transition-all duration-300"></div>

                                    {/* Animated Corner Accent */}
                                    <div className="absolute top-0 right-0 w-0 h-[1px] bg-white/60 group-hover:w-20 transition-all duration-300 z-10"></div>
                                    <div className="absolute top-0 right-0 w-[1px] h-0 bg-white/60 group-hover:h-20 transition-all duration-300 delay-100 z-10"></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-black/90 border border-white/20 backdrop-blur-sm z-10">
                                        <span className="text-[9px] tracking-[0.2em] text-white/80 font-medium uppercase">
                                            {blog.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Meta Information */}
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p className="text-[10px] tracking-widest text-white/50 uppercase">{blog.date}</p>
                                    </div>
                                    <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="text-[10px] tracking-widest text-white/50 uppercase">{blog.readTime}</p>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl lg:text-3xl font-light text-white mb-6 group-hover:text-white/80 transition-colors duration-300 leading-tight">
                                    {blog.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-sm text-white/50 leading-relaxed mb-8 line-clamp-3">
                                    {blog.excerpt}
                                </p>

                                {/* Read More Link */}
                                <div className="flex items-center gap-4 group/link cursor-pointer">
                                    <div className="w-12 h-[1px] bg-white/20 group-hover/link:bg-white group-hover/link:w-16 transition-all duration-300"></div>
                                    <span className="text-[10px] font-medium tracking-wide text-white uppercase transition-colors duration-300">
                                        READ FULL ARTICLE
                                    </span>
                                    <svg
                                        className="w-3 h-3 text-white/60 opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Bottom Accent Line */}
                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-white/50 to-transparent group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <div className="inline-flex flex-col items-center gap-6 p-8 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300 rounded-xl">
                        <p className="text-white/60 text-sm max-w-md">
                            Want to receive the latest insights directly to your inbox?
                        </p>
                        <a
                            href="#"
                            className="group inline-flex items-center gap-4 px-8 py-4 bg-white hover:bg-white/90 transition-all duration-300 rounded-lg shadow-lg hover:shadow-white/20"
                        >
                            <span className="text-xs font-semibold tracking-wide text-black uppercase">
                                SUBSCRIBE TO NEWSLETTER
                            </span>
                            <svg
                                className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
    );
};

export default LatestBlogs;
