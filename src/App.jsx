import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
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
    <section id={id} className="scroll-mt-20 pt-20 pb-20 min-h-screen bg-[#0B0F19] relative">
      {children}
    </section>
  </ErrorBoundary>
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

  return (
    <>
      {loaded ? (
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
          <SectionContainer id="certifications" sectionName="Certifications">
            <Certifications />
          </SectionContainer>
          <Divider />
          <SectionContainer id="contact" sectionName="Contact">
            <Contact />
          </SectionContainer>
        </main>

        <Footer />
        <BackToTop />
      </div>
      ) : (
        <Loader onComplete={() => setLoaded(true)} />
      )}
    </>
  );
}

export default App;
