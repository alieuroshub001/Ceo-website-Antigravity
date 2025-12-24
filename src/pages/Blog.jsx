import BlogHero from '../components/blogs/BlogHero';

const Blog = () => {
    const handleSearch = (query) => {
        console.log('Searching for:', query);
        // Add your search logic here
    };

    return (
        <>
            <BlogHero onSearch={handleSearch} />
            {/* Add more blog components here as they are created */}
        </>
    );
};

export default Blog;
