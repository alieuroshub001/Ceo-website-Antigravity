import AboutHero from '../components/about/AboutHero';
import AboutServicesGrid from '../components/about/AboutServicesGrid';
import AboutBentoBio from '../components/about/AboutBentoBio';
import AboutExpertiseList from '../components/about/AboutExpertiseList';
import AboutMarquee from '../components/about/AboutMarquee';
import AboutTestimonials from '../components/about/AboutTestimonials';
import AboutPricing from '../components/about/AboutPricing';

const About = () => {
    return (
        <div className="pt-0"> {/* Removed pt to let Hero handle it */}
            <AboutHero />
            <AboutBentoBio />
            <AboutServicesGrid />
            <AboutExpertiseList />
            <AboutMarquee />
            <AboutTestimonials />
            <AboutPricing />
        </div>
    );
};

export default About;
