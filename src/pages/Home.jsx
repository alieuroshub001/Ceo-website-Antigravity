import Hero from '../components/home/Hero';
import AboutSummary from '../components/home/AboutSummary';
import ServicesIndex from '../components/home/ServicesIndex';
import SkillsSection from '../components/home/SkillsSection';
import PortfolioSummary from '../components/home/PortfolioSummary';
import WhyChooseMe from '../components/home/WhyChooseMe';
import Testimonials from '../components/home/Testimonials';
import LatestBlogs from '../components/home/LatestBlogs';
import ContactPreview from '../components/home/ContactPreview';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutSummary />
            <ServicesIndex />
            <SkillsSection />
            <PortfolioSummary />
            <WhyChooseMe />
            <Testimonials />
            <LatestBlogs />
            <ContactPreview />
        </>
    );
};

export default Home;
