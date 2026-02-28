import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Departments = lazy(() => import('./pages/Departments'));
const PatientCare = lazy(() => import('./pages/PatientCare'));
const Contact = lazy(() => import('./pages/Contact'));

function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
                <div
                    className="w-16 h-16 rounded-full animate-spin border-4 border-t-primary-500"
                    style={{ borderColor: 'rgba(10,102,194,0.15)', borderTopColor: '#0A66C2' }}
                />
                <span className="text-primary-600 font-semibold text-sm">Loading...</span>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <main>
                <Suspense fallback={<Loading />}>
                    <PageTransition>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/departments" element={<Departments />} />
                            <Route path="/patient-care" element={<PatientCare />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </PageTransition>
                </Suspense>
            </main>
            <Footer />
        </BrowserRouter>
    );
}
