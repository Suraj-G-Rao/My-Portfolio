import { useRef } from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio';
import { SectionHeader } from './About';

const CertCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ scale: 1.03, y: -6 }}
    className="glass-card rounded-3xl relative overflow-hidden text-center group flex-shrink-0 w-[300px] sm:w-[350px] md:w-[380px] snap-start flex flex-col justify-between"
  >
    {/* Certificate image */}
    <div className="relative w-full h-44 overflow-hidden rounded-t-3xl flex-shrink-0">
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(11,15,25,0.9) 100%)' }}
      />
    </div>

    <div className="p-6 flex-1 flex flex-col justify-between">
      {/* Color accent line */}
      <div
        className="absolute top-0 left-0 w-full h-1 rounded-t-3xl"
        style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
      />

      <div>
        <h3 className="text-lg font-bold text-white mb-2 relative z-10 leading-snug">
          {cert.title}
        </h3>

        <p
          className="text-sm font-semibold mb-4 relative z-10"
          style={{ color: cert.color }}
        >
          {cert.issuer}
        </p>
      </div>

      <div>
        <a
          href={cert.credential}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:opacity-90 relative z-10"
          style={{
            background: `${cert.color}18`,
            border: `1px solid ${cert.color}35`,
            color: cert.color,
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Verify Credential
        </a>
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -390 : 390;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          <SectionHeader subtitle="Professional Credentials" title="" accent="Certifications" />

          {/* Scroll Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2 absolute right-0 top-1/2 -translate-y-1/2 mb-16">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous Certificate"
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 glass hover:bg-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next Certificate"
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 glass hover:bg-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-7 overflow-x-auto pb-6 pt-3 px-1 snap-x snap-mandatory scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
