import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { SectionHeader } from './About';

const SkillCategory = ({ category, data, index }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-3xl p-7 relative overflow-hidden group"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 w-full h-0.5 rounded-t-3xl"
        style={{ background: `linear-gradient(90deg, ${data.color}, transparent)` }}
      />
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
        style={{
          background: `radial-gradient(circle at top left, ${data.color}15 0%, transparent 60%)`,
        }}
      />

      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
          style={{ background: `${data.color}20`, border: `1px solid ${data.color}30` }}
        >
          {data.icon}
        </div>
        <div>
          <h3 className="text-white font-bold text-base">{category}</h3>
          <p className="text-gray-500 text-xs">{data.items.length} skills</p>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {data.items.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 + i * 0.04 }}
            whileHover={{ scale: 1.08, y: -2 }}
            onHoverStart={() => setHovered(skill)}
            onHoverEnd={() => setHovered(null)}
            className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-medium cursor-default transition-all duration-300"
            style={{
              background: hovered === skill ? `${data.color}25` : `${data.color}12`,
              border: `1px solid ${hovered === skill ? data.color + '60' : data.color + '25'}`,
              color: hovered === skill ? 'white' : 'rgba(255,255,255,0.75)',
              boxShadow: hovered === skill ? `0 0 15px ${data.color}30` : 'none',
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="relative py-8">
      <div className="blob-1" style={{ bottom: '10%', left: '-5%', opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader subtitle="What I Know" title="Technical" accent="Skills" />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, data], i) => (
            <SkillCategory key={category} category={category} data={data} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
