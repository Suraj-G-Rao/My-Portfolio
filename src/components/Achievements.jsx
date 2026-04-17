import { motion } from 'framer-motion';
import { achievements, leadership } from '../data/portfolio';
import { SectionHeader } from './About';

const AchievementCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 1, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ scale: 1.03, y: -6 }}
    className="glass-card rounded-3xl p-8 relative overflow-hidden text-center group"
  >
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: `radial-gradient(circle at center, ${item.color}12, transparent 70%)` }}
    />
    <div
      className="absolute top-0 left-0 w-full h-1 rounded-t-3xl"
      style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
    />

    <div
      className="inline-flex items-center justify-center w-20 h-20 rounded-2xl text-5xl mb-5 relative z-10"
      style={{
        background: `${item.color}15`,
        border: `1px solid ${item.color}30`,
        boxShadow: `0 0 30px ${item.color}25`,
      }}
    >
      {item.icon}
    </div>

    <h3 className="text-2xl font-black text-white mb-1 relative z-10">{item.title}</h3>
    <p
      className="text-sm font-semibold mb-4 relative z-10"
      style={{ color: item.color }}
    >
      {item.event}
    </p>
    <p className="text-gray-400 text-sm leading-relaxed relative z-10">{item.description}</p>
  </motion.div>
);

const LeadershipCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 1, x: 0 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ x: 6 }}
    className="glass-card rounded-2xl p-5 flex items-center gap-4 group"
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
      style={{
        background: `${item.color}18`,
        border: `1px solid ${item.color}30`,
        boxShadow: `0 0 15px ${item.color}20`,
      }}
    >
      {item.icon}
    </div>
    <div>
      <p className="text-white font-semibold text-sm leading-snug">{item.role}</p>
      <p className="text-gray-400 text-xs mt-0.5">{item.org}</p>
    </div>
    <div
      className="ml-auto w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      style={{ background: item.color }}
    />
  </motion.div>
);

const Achievements = () => {
  return (
    <section className="relative py-8">
      <div className="blob-3" style={{ bottom: '20%', left: '-5%', opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader subtitle="Recognition & Impact" title="Achievements &" accent="Leadership" />

        {/* Achievements Row */}
        <div className="grid sm:grid-cols-2 gap-7 mb-16">
          {achievements.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(68,131,190,0.3))' }} />
          <h3 className="text-white font-bold text-lg px-4">Community & Leadership</h3>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(68,131,190,0.3), transparent)' }} />
        </div>

        {/* Leadership Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {leadership.map((item, i) => (
            <LeadershipCard key={item.role} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
