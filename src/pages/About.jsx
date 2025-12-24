import AboutHero from '../components/about/AboutHero';
import AboutServicesGrid from '../components/about/AboutServicesGrid';
import AboutBentoBio from '../components/about/AboutBentoBio';
import AboutExpertiseList from '../components/about/AboutExpertiseList';
import AboutMarquee from '../components/about/AboutMarquee';
import Testimonials from '../components/home/Testimonials';

const About = () => {
    return (
        <div className="pt-0"> {/* Removed pt to let Hero handle it */}
            <AboutHero />
            <AboutMarquee />
            <AboutBentoBio />
            <AboutServicesGrid />
            <AboutExpertiseList />
            <Testimonials />
        </div>
    );
};

export default About;
