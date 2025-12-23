import Hero from '../components/home/Hero';
import AboutSummary from '../components/home/AboutSummary';
import ServicesIndex from '../components/home/ServicesIndex';
import SkillsSection from '../components/home/SkillsSection';
import PortfolioSummary from '../components/home/PortfolioSummary';
import { Globe } from '../components/home/Globe/Globe';
import WhyChooseMe from '../components/home/WhyChooseMe';
import Testimonials from '../components/home/Testimonials';
import LatestBlogs from '../components/home/LatestBlogs';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutSummary />
            <ServicesIndex />
            <SkillsSection />
            <PortfolioSummary />
            <Globe />
            <WhyChooseMe />
            <Testimonials />
            <LatestBlogs />
        </>
    );
};

export default Home;
