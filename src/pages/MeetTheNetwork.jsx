import NetworkHero from '../components/network/NetworkHero';
import AdvisorGrid from '../components/network/AdvisorGrid';

const MeetTheNetwork = () => {
    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <NetworkHero />
                <AdvisorGrid />
            </div>
        </div>
    );
};

export default MeetTheNetwork;
