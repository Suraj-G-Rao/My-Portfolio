import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { SectionHeader } from './About';

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 1, x: 0 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="relative pl-16"
  >
    {/* Timeline dot */}
    <div
      className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-dark z-10"
      style={{
        background: exp.color,
        boxShadow: `0 0 20px ${exp.color}80`,
      }}
    />

    <motion.div
      whileHover={{ scale: 1.01 }}
      className="glass-card rounded-3xl p-7 relative overflow-hidden group"
    >
      {/* Left accent */}
      <div
        className="absolute left-0 top-0 w-1 h-full rounded-l-3xl"
        style={{ background: `linear-gradient(180deg, ${exp.color}, transparent)` }}
      />
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{ background: `radial-gradient(circle at left, ${exp.color}10 0%, transparent 60%)` }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{exp.icon}</span>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
            </div>
            <p className="text-gray-300 font-medium">{exp.company}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: `${exp.color}20`,
                border: `1px solid ${exp.color}40`,
                color: exp.color,
              }}
            >
              {exp.type}
            </span>
            <span
              className="text-sm text-gray-300 font-medium flex items-center gap-1.5"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {exp.period}
            </span>
            {exp.duration && (
              <span
                className="text-xs text-gray-400"
              >
                {exp.duration}
              </span>
            )}
          </div>
        </div>

        {/* Points */}
        <ul className="space-y-3">
          {exp.points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ background: exp.color }}
              />
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  </motion.div>
);

const Experience = () => {
  return (
    <section className="relative py-8">
      <div className="blob-3" style={{ top: '20%', right: '-5%', opacity: 0.4 }} />

      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader subtitle="Work History" title="Professional" accent="Experience" />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="timeline-line" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
