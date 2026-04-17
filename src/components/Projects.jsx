import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import { SectionHeader } from './About';

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group cursor-default"
    >
      <motion.div
        animate={{
          scale: hovered ? 1.02 : 1,
          y: hovered ? -8 : 0,
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative rounded-3xl overflow-hidden h-full"
        style={{
          background: 'rgba(17,24,39,0.65)',
          border: `1px solid ${hovered ? project.color + '50' : 'rgba(255,255,255,0.07)'}`,
          boxShadow: hovered
            ? `0 30px 80px ${project.color}25, 0 0 0 1px ${project.color}30`
            : '0 4px 30px rgba(0,0,0,0.3)',
          backdropFilter: 'blur(20px)',
          transition: 'all 0.35s ease',
        }}
      >
        {/* Card top gradient strip */}
        <div
          className="absolute top-0 left-0 w-full h-1"
          style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        />

        {/* Background glow */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at top left, ${project.color}12 0%, transparent 65%)`,
              }}
            />
          )}
        </AnimatePresence>

        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-5 right-5 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase"
            style={{
              background: `${project.color}25`,
              border: `1px solid ${project.color}40`,
              color: project.color,
            }}
          >
            Featured
          </div>
        )}

        <div className="p-7 h-full flex flex-col">
          {/* Icon + category */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{
                background: `${project.color}18`,
                border: `1px solid ${project.color}30`,
              }}
            >
              {project.icon}
            </div>
            <div>
              <span
                className="text-[11px] font-semibold tracking-wider uppercase"
                style={{ color: project.color }}
              >
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-white leading-tight mt-0.5">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium px-2.5 py-1 rounded-md"
                style={{
                  background: `${project.color}12`,
                  border: `1px solid ${project.color}25`,
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium flex-1 justify-center transition-all duration-300"
              style={{
                background: `${project.color}18`,
                border: `1px solid ${project.color}35`,
                color: 'white',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${project.color}30`;
                e.currentTarget.style.borderColor = `${project.color}60`;
                e.currentTarget.style.boxShadow = `0 0 20px ${project.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `${project.color}18`;
                e.currentTarget.style.borderColor = `${project.color}35`;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaGithub size={15} />
              View on GitHub
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{
                background: `${project.color}15`,
                border: `1px solid ${project.color}30`,
                color: project.color,
              }}
            >
              <FaExternalLinkAlt size={13} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="relative py-8">
      <div className="blob-1" style={{ top: '0%', right: '-10%', opacity: 0.35 }} />
      <div className="blob-2" style={{ bottom: '10%', left: '-10%', opacity: 0.35 }} />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader subtitle="What I've Built" title="Featured" accent="Projects" />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/Suraj-G-Rao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center gap-2.5"
            >
              <FaGithub size={18} />
              View All Projects on GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
