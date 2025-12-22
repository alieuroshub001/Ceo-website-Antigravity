import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'; // Force HMR update
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import CSuiteAdvisory from './pages/CSuiteAdvisory';
import About from './pages/About';
import AboutScroll from './pages/AboutScroll';
import IndependentBoardAdvisory from './pages/IndependentBoardAdvisory';
import DigitalTransformation from './pages/DigitalTransformation';
import MeetTheNetwork from './pages/MeetTheNetwork';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="bg-black min-h-screen text-white selection:bg-accent selection:text-white flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/c-suite" element={<CSuiteAdvisory />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/about-interactive" element={<AboutScroll />} />
                        <Route path="/independent-board-advisory" element={<IndependentBoardAdvisory />} />
                        <Route path="/digital-business-transform" element={<DigitalTransformation />} />
                        <Route path="/network" element={<MeetTheNetwork />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
