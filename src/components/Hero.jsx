import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { personalInfo, techIcons } from '../data/portfolio';

const socialLinks = [
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub', color: '#fff' },
  { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: '#0A66C2' },
  { icon: FaXTwitter, href: personalInfo.twitter, label: 'X', color: '#fff' },
  { icon: FaInstagram, href: personalInfo.instagram, label: 'Instagram', color: '#E1306C' },
];

const floatPositions = [
  { top: '10%', left: '2%', delay: '0s', duration: '6s', size: 'w-14 h-14' },
  { top: '75%', left: '5%', delay: '1s', duration: '7s', size: 'w-12 h-12' },
  { top: '20%', right: '3%', delay: '0.5s', duration: '8s', size: 'w-16 h-16' },
  { top: '65%', right: '6%', delay: '1.5s', duration: '6.5s', size: 'w-13 h-13' },
  { top: '45%', left: '0%', delay: '2s', duration: '9s', size: 'w-11 h-11' },
  { top: '85%', right: '2%', delay: '0.8s', duration: '7.5s', size: 'w-14 h-14' },
  { top: '5%', left: '45%', delay: '1.2s', duration: '8s', size: 'w-12 h-12' },
  { top: '90%', left: '40%', delay: '2.5s', duration: '6.5s', size: 'w-11 h-11' },
];

const CanvasParticles = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(68,131,190,${p.alpha})`;
        ctx.fill();
      });
      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(68,131,190,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Blobs */}
      <div className="blob-1" style={{ top: '-10%', left: '-5%' }} />
      <div className="blob-2" style={{ bottom: '-5%', right: '-5%' }} />
      <div className="blob-3" style={{ top: '40%', left: '40%' }} />

      {/* Particles */}
      <CanvasParticles />

      {/* Floating Tech Badges */}
      {techIcons.map((tech, i) => (
        <motion.div
          key={tech.label}
          className={`floating-badge ${floatPositions[i].size} hidden xl:flex flex-col gap-0.5 px-3 py-2 z-10`}
          style={{
            top: floatPositions[i].top,
            left: floatPositions[i].left,
            right: floatPositions[i].right,
            '--float-duration': floatPositions[i].duration,
            '--float-delay': floatPositions[i].delay,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 + i * 0.1, duration: 0.5, type: 'spring' }}
        >
          <span className="text-xl">{tech.emoji}</span>
          <span className="text-[9px] font-medium text-gray-400 leading-none">{tech.label}</span>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16 w-full">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 tracking-widest uppercase"
            style={{
              background: 'rgba(68,131,190,0.12)',
              border: '1px solid rgba(68,131,190,0.25)',
              color: '#7BB8E8',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text block sm:inline">Suraj G Rao</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-medium text-gray-300 mb-6 h-8"
          >
            <TypeAnimation
              sequence={[
                'AI/ML Engineer',
                2000,
                'Software Engineer',
                2000,
                'Generative AI Enthusiast',
                2000,
                'Deep Learning Practitioner',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text-static"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
          >
            {personalInfo.intro}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <Link to="projects" smooth duration={700} offset={-100}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <span className="relative z-10">View Projects</span>
                <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </Link>
            <motion.a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
          className="flex-shrink-0 relative"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Spinning ring */}
            <div
              className="absolute inset-[-12px] rounded-full animate-spin-slow"
              style={{
                background: 'conic-gradient(from 0deg, #4483BE, #7C3AED, #06B6D4, #4483BE)',
                padding: '2px',
                borderRadius: '50%',
              }}
            >
              <div className="w-full h-full rounded-full bg-dark" />
            </div>
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full animate-pulse-slow"
              style={{
                background: 'radial-gradient(circle, rgba(68,131,190,0.3) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            {/* Profile */}
            <div
              className="relative w-full h-full rounded-full overflow-hidden glow-border"
              style={{ border: '3px solid rgba(68,131,190,0.3)' }}
            >
              <div
                className="w-full h-full flex items-center justify-center rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #1A2333 0%, #111827 40%, #1E2D42 100%)',
                }}
              >
                <span className="text-8xl select-none">👨‍💻</span>
              </div>
            </div>
            {/* Badge - bottom right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 glass-dark rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xl"
            >
              <span className="text-xl">🤖</span>
              <div>
                <p className="text-xs font-bold text-white">AI/ML</p>
                <p className="text-[10px] text-gray-400">Engineer</p>
              </div>
            </motion.div>
            {/* Badge - top left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-4 -left-4 glass-dark rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl"
            >
              <span className="text-lg">⚡</span>
              <div>
                <p className="text-xs font-bold text-white">9.46</p>
                <p className="text-[10px] text-gray-400">CGPA</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
