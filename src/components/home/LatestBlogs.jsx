import { Link } from 'react-router-dom';
import { blogs as allBlogs } from '../../data/blogs';

const LatestBlogs = () => {
    // Show only the first 2 blogs for the latest section
    const blogs = allBlogs.slice(0, 2);

    return (
        <section className="relative py-32 bg-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#17b6b2]/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#17b6b2]/5 rounded-full blur-[120px]"></div>
            </div>

            {/* Top Border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-[#17b6b2] to-transparent"></div>
                            <p className="text-[10px] tracking-[0.3em] text-[#17b6b2] font-medium uppercase">INSIGHTS & EXPERTISE</p>
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
                    <Link
                        to="/blog"
                        className="group relative inline-flex items-center gap-6 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#17b6b2]/30 transition-all duration-300 mt-8 lg:mt-0 rounded-lg"
                    >
                        <span className="text-[10px] font-medium tracking-wide text-white uppercase transition-colors">
                            VIEW ALL BLOGS
                        </span>
                        <svg
                            className="w-4 h-4 text-white/60 group-hover:translate-x-2 transition-transform duration-300 group-hover:text-[#17b6b2]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {blogs.map((blog, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white/[0.02] border border-white/5 hover:border-[#17b6b2]/30 transition-all duration-500 overflow-hidden rounded-xl h-full flex flex-col"
                        >
                            {/* Hover Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#17b6b2]/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 p-8 lg:p-10 flex-grow flex flex-col">
                                {/* Image with Overlay */}
                                <div className="relative aspect-[16/9] mb-8 overflow-hidden bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/5 group-hover:border-[#17b6b2]/20 transition-colors duration-500">
                                    {/* Blog Image */}
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300"></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/80 border border-white/10 backdrop-blur-md z-10 flex items-center gap-2 rounded-full">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#17b6b2] animate-pulse"></div>
                                        <span className="text-[9px] tracking-[0.1em] text-white/90 font-medium uppercase">
                                            {blog.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Meta Information */}
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-[#17b6b2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p className="text-[10px] tracking-widest text-white/50 uppercase">{blog.date}</p>
                                    </div>
                                    <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-[#17b6b2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="text-[10px] tracking-widest text-white/50 uppercase">{blog.readTime}</p>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl lg:text-3xl font-light text-white mb-6 group-hover:text-[#17b6b2] transition-colors duration-500 leading-tight">
                                    {blog.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-sm text-white/50 leading-relaxed mb-8 line-clamp-3">
                                    {blog.excerpt}
                                </p>

                                {/* Read More Link */}
                                <Link to={`/blog/${blog.slug}`} className="mt-auto flex items-center gap-4 group/link cursor-pointer">
                                    <div className="w-12 h-[1px] bg-white/20 group-hover/link:bg-[#17b6b2] group-hover/link:w-16 transition-all duration-300"></div>
                                    <span className="text-[10px] font-medium tracking-wide text-white group-hover/link:text-[#17b6b2] uppercase transition-colors duration-300">
                                        READ FULL ARTICLE
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>


            </div>

            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
    );
};

export default LatestBlogs;
