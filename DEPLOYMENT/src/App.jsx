import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CallForPaper from './pages/CallForPaper';
import ImportantDates from './pages/ImportantDates';
import OrganizingCommittee from './pages/OrganizingCommittee';
import AdvisoryCommittee from './pages/AdvisoryCommittee';
import AuthorGuidelines from './pages/AuthorGuidelines';
import Registration from './pages/Registration';
import ContactUs from './pages/ContactUs';

/* Fixed particle positions to avoid shifting on re-render */
const particles = [
    { w: 3, h: 3, l: 10, t: 15, c: '#0ea5e9', d: '0s', dur: '6s' },
    { w: 4, h: 4, l: 85, t: 25, c: '#8b5cf6', d: '1.2s', dur: '8s' },
    { w: 2, h: 2, l: 35, t: 70, c: '#0ea5e9', d: '2.4s', dur: '10s' },
    { w: 5, h: 5, l: 60, t: 45, c: '#8b5cf6', d: '3.6s', dur: '12s' },
    { w: 3, h: 3, l: 20, t: 85, c: '#0ea5e9', d: '4.8s', dur: '14s' },
    { w: 4, h: 4, l: 75, t: 5, c: '#8b5cf6', d: '6s', dur: '16s' },
];

function App() {
    const location = useLocation();

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            {/* Animated mesh background */}
            <div className="bg-mesh" />

            {/* Floating particles */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="animate-float"
                        style={{
                            position: 'absolute',
                            width: `${p.w}px`,
                            height: `${p.h}px`,
                            left: `${p.l}%`,
                            top: `${p.t}%`,
                            background: p.c,
                            borderRadius: '50%',
                            opacity: 0.3,
                            animationDelay: p.d,
                            animationDuration: p.dur,
                        }}
                    />
                ))}
            </div>

            <Navbar />

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/call-for-paper" element={<CallForPaper />} />
                    <Route path="/important-dates" element={<ImportantDates />} />
                    <Route path="/committees/organizing" element={<OrganizingCommittee />} />
                    <Route path="/committees/advisory" element={<AdvisoryCommittee />} />
                    <Route path="/author-guidelines" element={<AuthorGuidelines />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </AnimatePresence>

            <Footer />
        </div>
    );
}

export default App;
