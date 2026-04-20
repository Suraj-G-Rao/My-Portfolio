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
    className="glass-card rounded-3xl relative overflow-hidden text-center group"
  >
    {/* Certificate image */}
    <div className="relative w-full h-44 overflow-hidden rounded-t-3xl">
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

    <div className="p-6">
      {/* Color accent line */}
      <div
        className="absolute top-0 left-0 w-full h-1 rounded-t-3xl"
        style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
      />

      <h3 className="text-lg font-bold text-white mb-2 relative z-10 leading-snug">
        {cert.title}
      </h3>

      <p
        className="text-sm font-semibold mb-4 relative z-10"
        style={{ color: cert.color }}
      >
        {cert.issuer}
      </p>

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
  </motion.div>
);

const Certifications = () => {
  return (
    <section className="relative py-8">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader subtitle="Professional Credentials" title="" accent="Certifications" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
