import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ReactCountUp from 'react-countup';
import { personalInfo, stats } from '../data/portfolio';

const CountUp = ReactCountUp.default || ReactCountUp;

const SectionHeader = ({ subtitle, title, accent }) => (
  <motion.div
    initial={{ opacity: 1, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">{subtitle}</p>
    <h2 className="section-title">
      {title}{' '}
      <span className="gradient-text">{accent}</span>
    </h2>
  </motion.div>
);

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="glass-card rounded-2xl p-6 text-center relative overflow-hidden group"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at center, rgba(68,131,190,0.08) 0%, transparent 70%)',
        }}
      />
      <div className="text-3xl mb-3">{stat.icon}</div>
      <div className="text-4xl font-black gradient-text-static mb-2">
        {inView ? (
          <CountUp
            start={0}
            end={stat.value}
            duration={2}
            decimals={stat.decimals || 0}
            suffix={stat.suffix}
          />
        ) : (
          `0${stat.suffix}`
        )}
      </div>
      <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="relative py-8">
      <div className="blob-2" style={{ top: '20%', right: '-10%', opacity: 0.5 }} />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader subtitle="Get to Know Me" title="About" accent="Me" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full h-1 rounded-t-3xl"
                style={{ background: 'linear-gradient(90deg, #4483BE, #7C3AED, #06B6D4)' }}
              />
              <h3 className="text-2xl font-bold text-white mb-6">
                Building Intelligent Systems that Matter
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-base">
                {personalInfo.about}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['ML Engineer', 'Deep Learning', 'Generative AI', 'Backend Dev', 'Researcher'].map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Email CTA */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.02 }}
              className="mt-6 flex items-center gap-3 glass-card rounded-2xl p-5 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, rgba(68,131,190,0.3), rgba(124,58,237,0.3))' }}
              >
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Reach out at</p>
                <p className="text-white font-medium group-hover:text-primary transition-colors">
                  {personalInfo.email}
                </p>
              </div>
              <svg className="w-4 h-4 text-gray-500 group-hover:text-primary ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right: Stats + Visual */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>

            {/* Study Info Card */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="text-4xl">🎓</div>
              <div>
                <p className="text-white font-semibold">B.E. in CSE (AI & ML)</p>
                <p className="text-gray-400 text-sm">The National Institute of Engineering, Mysore</p>
                <p className="text-primary text-sm font-medium mt-0.5">2022 – 2026 · CGPA 9.46/10</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SectionHeader };
export default About;
