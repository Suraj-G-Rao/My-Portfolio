import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

// Module-level flag to prevent double /hit/ call from React StrictMode
let hasHitApi = false;

const Loader = ({ onComplete }) => {
  const [visitorCount, setVisitorCount] = useState(null);
  const [showCount, setShowCount] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const confettiActive = useRef(false);

  // Step 1: Fetch visitor count — do NOT trigger confetti yet
  useEffect(() => {
    let cancelled = false;
    const fetchCount = async () => {
      try {
        // Only hit (increment) the API once per page load
        const url = hasHitApi
          ? 'https://countapi.mileshilliard.com/api/v1/get/suraj-g-rao-portfolio-2026'
          : 'https://countapi.mileshilliard.com/api/v1/hit/suraj-g-rao-portfolio-2026';
        hasHitApi = true;
        const res = await fetch(url);
        const data = await res.json();
        if (!cancelled) setVisitorCount(Number(data.value) || 1);
      } catch {
        // Fail-safe: if API fails, still set count and run animation
        if (!cancelled) setVisitorCount(1);
      }
    };
    fetchCount();
    return () => { cancelled = true; };
  }, []);

  // Step 2: Start confetti + show count ONLY when visitorCount is ready
  useEffect(() => {
    if (visitorCount === null) return;

    setShowCount(true);
    confettiActive.current = true;

    // Immediate initial burst so confetti is visible right away
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x: 0.45, y: 0.52 },
      angle: 60,
      colors: ['#4483BE', '#7C3AED', '#22D3EE'],
    });
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x: 0.55, y: 0.52 },
      angle: 120,
      colors: ['#4483BE', '#7C3AED', '#22D3EE'],
    });

    // Continued bursts every 350ms for 2 seconds
    const interval = setInterval(() => {
      if (!confettiActive.current) return;
      confetti({
        particleCount: 60,
        spread: 65,
        origin: { x: 0.45, y: 0.52 },
        angle: 60,
        colors: ['#4483BE', '#7C3AED', '#22D3EE'],
      });
      confetti({
        particleCount: 60,
        spread: 65,
        origin: { x: 0.55, y: 0.52 },
        angle: 120,
        colors: ['#4483BE', '#7C3AED', '#22D3EE'],
      });
    }, 250);

    // Stop confetti after 0.8 seconds
    const confettiTimeout = setTimeout(() => {
      clearInterval(interval);
      confettiActive.current = false;
    }, 800);

    // Step 5: Fade out loader after confetti + buffer
    const loaderTimeout = setTimeout(() => {
      if (onCompleteRef.current) onCompleteRef.current();
    }, 1300);

    return () => {
      clearInterval(interval);
      clearTimeout(confettiTimeout);
      clearTimeout(loaderTimeout);
      confettiActive.current = false;
      confetti.reset();
    };
  }, [visitorCount]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
        style={{ background: '#0B0F19' }}
      >
        {/* Visitor count section */}
        <div className="flex flex-col items-center relative">
          {/* Radial glow behind number */}
          {showCount && (
            <div
              className="absolute w-56 h-56 rounded-full blur-3xl"
              style={{ top: '20%', background: 'radial-gradient(circle, rgba(68,131,190,0.2) 0%, rgba(124,58,237,0.1) 40%, transparent 70%)' }}
            />
          )}

          {/* Welcome */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white text-3xl font-bold tracking-widest uppercase relative z-10"
          >
            Welcome
          </motion.span>

          {/* You are visitor # */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-white text-2xl tracking-wide relative z-10 mt-4"
          >
            You are visitor #
          </motion.span>

          {/* Number — MAIN FOCUS: pure white, large, glowing */}
          {showCount && visitorCount !== null && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
              className="relative z-10 text-7xl font-black text-white mt-2"
              style={{
                textShadow: '0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(68,131,190,0.4), 0 0 100px rgba(124,58,237,0.2)',
              }}
            >
              {visitorCount}
            </motion.span>
          )}
        </div>

        {/* Progress bar */}
        <div className="mt-12 w-48 h-0.5 rounded-full overflow-hidden bg-white/5">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #4483BE, #7C3AED, #06B6D4)' }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
