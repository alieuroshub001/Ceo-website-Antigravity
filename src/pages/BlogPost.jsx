import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import SEO from '../components/shared/SEO';
import { blogs } from '../data/blogs';
import { useEffect } from 'react';
import authorImage from '../assets/hero.webp';

const BlogPost = () => {
    const { slug } = useParams();
    const blog = blogs.find(b => b.slug === slug);

    // Find related blogs (same category, excluding current)
    const relatedBlogs = blogs
        .filter(b => b.category === blog?.category && b.id !== blog?.id)
        .slice(0, 2);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!blog) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6">
                <h1 className="text-4xl font-light mb-4 text-center">Article Not Found</h1>
                <p className="text-white/60 mb-8 text-center max-w-md">The article you are looking for might have been removed or is temporarily unavailable.</p>
                <Link to="/blog" className="px-8 py-3 bg-white text-black text-sm font-medium rounded hover:bg-white/90 transition-colors">
                    Back to Blogs
                </Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-black text-white pt-24 pb-32">
            <SEO
                title={blog.title}
                description={blog.excerpt}
                image={blog.image}
                canonical={`/blog/${slug}`}
                type="article"
            />

            <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
                {/* Back Link */}
                <div className="mb-12">
                    <Link to="/blog" className="inline-flex items-center space-x-2 text-white/50 hover:text-white transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm tracking-wide">Back to Insights</span>
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-16 text-center lg:text-left">
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-white/50 mb-6 font-light uppercase tracking-widest">
                        <span className="text-[#17b6b2] font-medium">{blog.category}</span>
                        <div className="w-px h-3 bg-white/20"></div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            <span>{blog.date}</span>
                        </div>
                        <div className="w-px h-3 bg-white/20"></div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            <span>{blog.readTime}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-12">
                        {blog.title}
                    </h1>

                    {/* Featured Image */}
                    <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Sidebar / Social Share */}
                    <aside className="lg:col-span-2 order-2 lg:order-1">
                        <div className="sticky top-32 flex flex-row lg:flex-col items-center lg:items-start gap-6">
                            <p className="hidden lg:block text-xs uppercase tracking-widest text-white/40 mb-2">Share</p>
                            <button className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </button>
                            <button className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                                <Twitter className="w-5 h-5" />
                            </button>
                            <button className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                                <Facebook className="w-5 h-5" />
                            </button>
                        </div>
                    </aside>

                    {/* Content */}
                    <main className="lg:col-span-8 order-1 lg:order-2">
                        <div className="prose prose-invert prose-lg max-w-none text-white/80 font-light leading-relaxed">
                            <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-10 border-l-2 border-[#17b6b2] pl-6">
                                {blog.excerpt}
                            </p>

                            {/* Render HTML Content from Data */}
                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                        </div>

                        {/* Newsletter CTA */}
                        <div className="my-20 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 text-center">
                            <div className="w-12 h-12 bg-[#17b6b2]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Mail className="w-6 h-6 text-[#17b6b2]" />
                            </div>
                            <h3 className="text-2xl font-light text-white mb-3">Strategic Insights Delivered</h3>
                            <p className="text-white/60 mb-8 max-w-md mx-auto">Join 50K+ executives receiving our monthly briefing on governance, AI, and digital transformation.</p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Business Email"
                                    className="flex-grow bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-[#17b6b2] outline-none transition-colors"
                                />
                                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Author Bio */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-12 border-t border-white/10">
                            <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                                <img src={authorImage} alt={blog.author} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Written By</p>
                                <h4 className="text-xl font-medium text-white mb-2">{blog.author}</h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Strategic Advisor to Fortune 500 Boards and C-Suite leaders. Specializing in Corporate Governance, Digital Transformation, and AI Strategy.
                                </p>
                            </div>
                        </div>
                    </main>
                </div>

                {/* Related Articles */}
                {relatedBlogs.length > 0 && (
                    <div className="mt-32 pt-16 border-t border-white/10">
                        <div className="flex items-center justify-between mb-12">
                            <h3 className="text-3xl font-light text-white">Related Insights</h3>
                            <Link to="/blog" className="text-sm text-[#17b6b2] hover:text-white transition-colors">View All</Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedBlogs.map(item => (
                                <Link to={`/blog/${item.slug}`} key={item.id} className="group block">
                                    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 mb-6">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <h4 className="text-xl font-light text-white group-hover:text-[#17b6b2] transition-colors mb-2">{item.title}</h4>
                                    <p className="text-white/50 text-sm line-clamp-2">{item.excerpt}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
};

export default BlogPost;
