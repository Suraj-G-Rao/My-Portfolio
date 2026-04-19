import { motion } from 'framer-motion';
import { achievements } from '../data/portfolio';
import { SectionHeader } from './About';

const AchievementCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ scale: 1.03, y: -6 }}
    className="glass-card rounded-3xl relative overflow-hidden text-center group"
  >
    {/* Image at top */}
    {item.image && (
      <div className="relative w-full h-40 overflow-hidden rounded-t-3xl">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Dark gradient overlay for readability */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(11,15,25,0.85) 100%)' }}
        />
      </div>
    )}

    <div className="p-8">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
      className="text-sm font-semibold mb-2 relative z-10"
      style={{ color: item.color }}
    >
      {item.event}
    </p>

    {/* Date + Badge row */}
    <div className="flex items-center justify-center gap-3 mb-4 relative z-10">
      <span className="text-xs text-gray-500">{item.date}</span>
      {item.badge && (
        <span
          className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
          style={{
            background: `${item.color}18`,
            color: item.color,
            border: `1px solid ${item.color}30`,
          }}
        >
          {item.badge}
        </span>
      )}
    </div>

    <p className="text-gray-400 text-sm leading-relaxed relative z-10">{item.description}</p>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <section className="relative py-8">
      <div className="blob-3" style={{ bottom: '20%', left: '-5%', opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader subtitle="Recognition & Impact" title="" accent="Achievements" />

        {/* Achievements Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {achievements.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
