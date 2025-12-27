import ServicesHero from '../components/services/ServicesHero';
import SEO from '../components/shared/SEO';
import ServicesIntro from '../components/services/ServicesIntro';
import ServicesList from '../components/services/ServicesList';
import ServicesStats from '../components/services/ServicesStats';
import ServicesStory from '../components/services/ServicesStory';
import ServicesExpertise from '../components/services/ServicesExpertise';
import ServicesOffer from '../components/services/ServicesOffer';

const Services = () => {
    return (
        <div className="pt-0">
            <SEO
                title="Executive Advisory Services"
                description="Comprehensive service offerings including Business Strategy, Digital Transformation, and Board Governance for growing enterprises."
            />
            <ServicesHero />
            <ServicesIntro />
            <ServicesExpertise />
            <ServicesList />
            <ServicesStats />
            <ServicesStory />
            <ServicesOffer />
        </div>
    );
};

export default Services;
