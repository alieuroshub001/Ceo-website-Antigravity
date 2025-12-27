import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import BlogHero from '../components/blogs/BlogHero';
import Newsletter from '../components/shared/Newsletter';
import SEO from '../components/shared/SEO';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Extract unique categories
    const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

    const filteredBlogs = selectedCategory === 'All'
        ? blogs
        : blogs.filter(blog => blog.category === selectedCategory);

    // Featured blog is always the first one (index 0) from the full list, 
    // unless filtered.
    const featuredBlog = blogs[0];

    // If 'All' is selected, filter out the featured blog so it doesn't duplicate
    const gridBlogs = selectedCategory === 'All'
        ? filteredBlogs.filter(blog => blog.id !== featuredBlog.id)
        : filteredBlogs;

    return (
        <div className="bg-black min-h-screen text-white">
            <SEO
                title="Insights & Perspectives"
                description="Analysis of market trends, leadership strategies, and digital transformation for forward-thinking executives."
            />
            <BlogHero />

            <div className="container mx-auto px-6 lg:px-12 py-20">
                {/* Featured Post - Only show on 'All' view */}
                {selectedCategory === 'All' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-24"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-[#17b6b2] to-transparent"></div>
                            <span className="text-xs font-medium tracking-[0.3em] text-[#17b6b2] uppercase">Featured Story</span>
                        </div>

                        <Link to={`/blog/${featuredBlog.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="relative aspect-[16/9] lg:aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={featuredBlog.image}
                                    alt={featuredBlog.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-xs text-white/50 uppercase tracking-widest">
                                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/80">{featuredBlog.category}</span>
                                    <span>{featuredBlog.readTime}</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-light leading-tight group-hover:text-[#17b6b2] transition-colors">
                                    {featuredBlog.title}
                                </h2>
                                <p className="text-white/60 text-lg leading-relaxed line-clamp-3">
                                    {featuredBlog.excerpt}
                                </p>
                                <div className="flex items-center gap-3 text-sm font-medium text-white group-hover:gap-4 transition-all pt-4">
                                    <span>Read Full Article</span>
                                    <ArrowRight className="w-4 h-4 text-[#17b6b2]" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* Categories */}
                <div className="flex flex-wrap items-center gap-4 mb-16 border-b border-white/10 pb-8">
                    <span className="text-xs uppercase tracking-widest text-white/40 mr-4">Filter By:</span>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-xs font-medium tracking-wide border transition-all duration-300 ${selectedCategory === category
                                ? 'bg-[#17b6b2] border-[#17b6b2] text-black'
                                : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16"
                >
                    <AnimatePresence>
                        {gridBlogs.map((blog) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={blog.id}
                            >
                                <Link to={`/blog/${blog.slug}`} className="group block h-full">
                                    <article className="h-full flex flex-col">
                                        <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-white/10 mb-6">
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                                            <img
                                                src={blog.image}
                                                alt={blog.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4 z-20">
                                                <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white">
                                                    {blog.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col flex-grow">
                                            <div className="flex items-center gap-3 text-xs text-white/40 uppercase tracking-widest mb-3">
                                                <Calendar className="w-3 h-3" />
                                                <span>{blog.date}</span>
                                                <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                                <Clock className="w-3 h-3" />
                                                <span>{blog.readTime}</span>
                                            </div>

                                            <h3 className="text-xl text-white font-light leading-snug mb-3 group-hover:text-[#17b6b2] transition-colors">
                                                {blog.title}
                                            </h3>

                                            <p className="text-sm text-white/60 leading-relaxed line-clamp-3 mb-6">
                                                {blog.excerpt}
                                            </p>

                                            <div className="mt-auto flex items-center gap-2 text-xs font-medium text-white/50 group-hover:text-white transition-colors">
                                                <span>Read Article</span>
                                                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {gridBlogs.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-white/40 text-lg">No articles found in this category.</p>
                        <button
                            onClick={() => setSelectedCategory('All')}
                            className="text-[#17b6b2] text-sm mt-4 hover:underline"
                        >
                            View all articles
                        </button>
                    </div>
                )}
            </div>
            <Newsletter />
        </div>
    );
};

export default Blog;
