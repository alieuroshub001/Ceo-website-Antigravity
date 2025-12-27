import Hero from '../components/home/Hero';
import SEO from '../components/shared/SEO';

import AboutSummary from '../components/home/AboutSummary';
import ServicesIndex from '../components/home/ServicesIndex';
import SkillsSection from '../components/home/SkillsSection';
import PortfolioSummary from '../components/home/PortfolioSummary';
// Globe imported lazily below
import WhyChooseMe from '../components/home/WhyChooseMe';

import { Suspense, lazy } from 'react';

const Globe = lazy(() => import('../components/home/Globe/Globe').then(module => ({ default: module.Globe })));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const LatestBlogs = lazy(() => import('../components/home/LatestBlogs'));
const Newsletter = lazy(() => import('../components/shared/Newsletter'));

const Home = () => {
    return (
        <>
            <SEO
                title="Strategic Growth & Digital Transformation"
                description="Sheikh Nabeel is a strategic growth advisor for C-Suite executives, specializing in digital transformation, board governance, and operational excellence."
            />
            <Hero />

            <AboutSummary />
            <ServicesIndex />
            <SkillsSection />
            <PortfolioSummary />
            <Suspense fallback={<div className="h-[50vh] lg:h-96 w-full bg-black" />}>
                <Globe />
            </Suspense>
            <WhyChooseMe />
            <Testimonials />
            <LatestBlogs />
            <Newsletter />
        </>
    );
};

export default Home;
