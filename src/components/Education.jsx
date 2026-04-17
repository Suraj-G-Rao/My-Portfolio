import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { SectionHeader } from './About';

const EducationCard = ({ edu, index }) => (
  <motion.div
    initial={{ opacity: 1, x: 0 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    whileHover={{ scale: 1.02 }}
    className="relative pl-16"
  >
    {/* Timeline dot */}
    <div
      className="absolute left-4 top-7 w-5 h-5 rounded-full z-10"
      style={{
        background: edu.color,
        boxShadow: `0 0 20px ${edu.color}80`,
        border: '2px solid #0B0F19',
      }}
    />

    <div
      className="glass-card rounded-3xl p-7 relative overflow-hidden group"
    >
      <div
        className="absolute left-0 top-0 w-1 h-full rounded-l-3xl"
        style={{ background: `linear-gradient(180deg, ${edu.color}, transparent)` }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at left, ${edu.color}08, transparent 60%)` }}
      />

      <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{
              background: `${edu.color}18`,
              border: `1px solid ${edu.color}30`,
            }}
          >
            {edu.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
            <p className="text-gray-300 text-sm font-medium">{edu.institution}</p>
            <p className="text-gray-500 text-xs mt-1">{edu.period}</p>
          </div>
        </div>

        <div
          className="text-right flex-shrink-0"
        >
          <div
            className="inline-flex items-center px-4 py-2 rounded-xl font-bold text-base"
            style={{
              background: `${edu.color}18`,
              border: `1px solid ${edu.color}35`,
              color: edu.color,
            }}
          >
            {edu.score}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <section className="relative py-8">
      <div className="blob-2" style={{ top: '10%', right: '-5%', opacity: 0.35 }} />

      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader subtitle="Academic Background" title="My" accent="Education" />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, #4483BE, #7C3AED, transparent)' }}
          />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <EducationCard key={edu.degree} edu={edu} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
