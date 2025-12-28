import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'; // Force HMR update
import Footer from './components/layout/Footer';
import ChatWidget from './components/chat/ChatWidget'; // Chatbot Import
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const CSuiteAdvisory = lazy(() => import('./pages/CSuiteAdvisory'));
const About = lazy(() => import('./pages/About'));
const AboutScroll = lazy(() => import('./pages/AboutScroll'));
const IndependentBoardAdvisory = lazy(() => import('./pages/IndependentBoardAdvisory'));
const DigitalTransformation = lazy(() => import('./pages/DigitalTransformation'));
const MeetTheNetwork = lazy(() => import('./pages/MeetTheNetwork'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const NewsletterIssue = lazy(() => import('./pages/NewsletterIssue'));
const BookConsultation = lazy(() => import('./pages/BookConsultation'));
const Contact = lazy(() => import('./pages/Contact'));
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="bg-black min-h-screen text-white selection:bg-accent selection:text-white flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <ChatWidget /> {/* Chatbot Component */}
                    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/services/:slug" element={<ServiceDetail />} />
                            <Route path="/c-suite" element={<CSuiteAdvisory />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/about-interactive" element={<AboutScroll />} />
                            <Route path="/independent-board-advisory" element={<IndependentBoardAdvisory />} />
                            <Route path="/digital-business-transform" element={<DigitalTransformation />} />
                            <Route path="/network" element={<MeetTheNetwork />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:slug" element={<BlogPost />} />
                            <Route path="/newsletter-preview" element={<NewsletterIssue />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/appointment" element={<BookConsultation />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
