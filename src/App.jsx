import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught error in', this.props.sectionName, ':', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', backgroundColor: '#0B0F19', color: '#ff4444', fontSize: '16px', minHeight: '100vh', paddingTop: '120px' }}>
          <h2>Error in {this.props.sectionName} section:</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.error?.message}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const SectionContainer = ({ id, sectionName, children }) => (
  <ErrorBoundary sectionName={sectionName}>
    <div id={id} style={{ minHeight: '100vh', backgroundColor: '#0B0F19', paddingTop: '120px', paddingBottom: '80px', position: 'relative' }}>
      {children}
    </div>
  </ErrorBoundary>
);

// ── Preloader ──────────────────────────────────────────────────────────────────
const Preloader = ({ done }) => (
  <AnimatePresence mode="wait">
    {!done && (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark"
        style={{ background: '#0B0F19' }}
      >
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-black mb-6 relative"
          style={{ background: 'linear-gradient(135deg, #4483BE, #7C3AED)' }}
        >
          S
          {/* Pulse ring */}
          <div
            className="absolute inset-0 rounded-2xl animate-ping"
            style={{ background: 'rgba(68,131,190,0.3)' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="gradient-text-static text-xl font-bold tracking-widest"
        >
          Suraj G Rao
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-500 text-xs mt-2 tracking-wider uppercase"
        >
          AI/ML Engineer
        </motion.p>

        {/* Loading bar */}
        <div className="mt-8 w-48 h-0.5 rounded-full overflow-hidden bg-white/5">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #4483BE, #7C3AED, #06B6D4)' }}
          />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ── Back-to-top button ─────────────────────────────────────────────────────────
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-xl flex items-center justify-center shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #4483BE, #7C3AED)',
            boxShadow: '0 0 25px rgba(68,131,190,0.4)',
          }}
          aria-label="Back to top"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ── Section divider ────────────────────────────────────────────────────────────
const Divider = () => (
  <div className="max-w-7xl mx-auto px-6">
    <div
      className="h-px w-full"
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(68,131,190,0.2), rgba(124,58,237,0.2), transparent)',
      }}
    />
  </div>
);

// ── App ────────────────────────────────────────────────────────────────────────
function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader done={loaded} />

      <div className="min-h-screen bg-dark" style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />

        <main>
          <ErrorBoundary sectionName="Hero">
            <Hero />
          </ErrorBoundary>
          <Divider />
          <SectionContainer id="about" sectionName="About">
            <About />
          </SectionContainer>
          <Divider />
          <SectionContainer id="skills" sectionName="Skills">
            <Skills />
          </SectionContainer>
          <Divider />
          <SectionContainer id="experience" sectionName="Experience">
            <Experience />
          </SectionContainer>
          <Divider />
          <SectionContainer id="projects" sectionName="Projects">
            <Projects />
          </SectionContainer>
          <Divider />
          <SectionContainer id="achievements" sectionName="Achievements">
            <Achievements />
          </SectionContainer>
          <Divider />
          <SectionContainer id="leadership" sectionName="Leadership">
            <Leadership />
          </SectionContainer>
          <Divider />
          <SectionContainer id="education" sectionName="Education">
            <Education />
          </SectionContainer>
          <Divider />
          <SectionContainer id="contact" sectionName="Contact">
            <Contact />
          </SectionContainer>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
