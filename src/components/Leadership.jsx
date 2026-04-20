import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadership } from '../data/portfolio';
import { SectionHeader } from './About';

const OrgLogo = ({ src, name, color }) => {
  const [imgError, setImgError] = useState(false);

  if (!src || imgError) {
    return (
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-lg font-bold"
        style={{ background: `${color}18`, border: `1px solid ${color}30`, boxShadow: `0 0 15px ${color}20`, color }}
      >
        {name?.charAt(0) || '?'}
      </div>
    );
  }

  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden p-1.5"
      style={{
        background: '#f0f0f0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      }}
    >
      <img
        src={src}
        alt={name}
        onError={() => setImgError(true)}
        className="w-full h-full object-contain rounded-lg"
      />
    </div>
  );
};

const OrgGroup = ({ group, index }) => {
  const [expanded, setExpanded] = useState(true);
  const isMultiRole = group.roles.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card rounded-2xl overflow-hidden group/card"
      style={{
        border: `1px solid ${group.color}15`,
      }}
    >
      {/* Hover glow border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 20px ${group.color}20, inset 0 0 20px ${group.color}08`,
          border: `1px solid ${group.color}30`,
        }}
      />

      {/* Org Header */}
      <div
        className="flex items-center gap-4 p-6 cursor-pointer select-none"
        onClick={() => isMultiRole && setExpanded(!expanded)}
      >
        <OrgLogo src={group.logo} name={group.org} color={group.color} />
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-white leading-snug">{group.org}</h3>
          <p className="text-sm text-gray-400 mt-0.5">
            {group.roles.length} role{group.roles.length > 1 ? 's' : ''}
          </p>
        </div>
        {isMultiRole && (
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: `${group.color}12` }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke={group.color}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        )}
      </div>

      {/* Roles Timeline */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              {group.roles.map((role, i) => (
                <div key={i} className="relative flex gap-4">
                  {/* Timeline line + dot */}
                  <div className="flex flex-col items-center flex-shrink-0 w-5">
                    <div
                      className="w-3 h-3 rounded-full border-2 flex-shrink-0 mt-1.5"
                      style={{
                        borderColor: role.current ? group.color : `${group.color}60`,
                        background: role.current ? group.color : 'transparent',
                        boxShadow: role.current ? `0 0 8px ${group.color}60` : 'none',
                      }}
                    />
                    {i < group.roles.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                        className="w-px flex-1 origin-top"
                        style={{ background: `linear-gradient(to bottom, ${group.color}50, ${group.color}15)` }}
                      />
                    )}
                  </div>

                  {/* Role Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                    className={`flex-1 pb-5 ${i === group.roles.length - 1 ? 'pb-0' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-lg font-semibold text-white leading-snug">
                            {role.title}
                          </h4>
                          {role.current && (
                            <span
                              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                              style={{
                                background: `${group.color}20`,
                                color: group.color,
                                border: `1px solid ${group.color}40`,
                              }}
                            >
                              Latest
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-400 mt-0.5">{role.period}</p>
                      </div>
                    </div>
                    <p className="text-base text-gray-400 leading-relaxed mt-2">
                      {role.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Leadership = () => {
  return (
    <section className="relative py-8">
      <div className="blob-3" style={{ bottom: '20%', left: '-5%', opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader subtitle="Roles & Positions" title="" accent="Leadership" />

        {/* Leadership Timeline */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {leadership.map((group, i) => (
            <OrgGroup key={group.org} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
