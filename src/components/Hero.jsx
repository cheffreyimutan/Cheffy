import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="text-center py-16 md:py-24 rounded-3xl bg-gradient-to-br from-gray-900/40 via-purple-900/40 to-gray-900/40 glass-card mb-16 relative border border-purple-500/20 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.img
          src="/images/logo.png"
          alt="Cheffy's Crystals Official Online Shop"
          className="mx-auto h-32 w-32 md:h-40 md:w-40 rounded-full mb-8 shadow-2xl shadow-purple-500/30"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        />

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="inline-block">The Best Affordable </span>
          <span className="gradient-text">Crystal Store in the Philippines</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-purple-200 mb-10 text-balance mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Skip the high markups of big malls. Buy authentic crystals direct and save more on your healing journey.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex flex-col items-center gap-3">
            <motion.a
              href="https://shop.cheffyscrystals.com"
              className="w-full sm:w-auto cta-primary text-white font-black py-4 px-10 rounded-full text-xl shadow-2xl inline-block"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(124, 58, 237, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              SHOP OUR OFFICIAL STORE
            </motion.a>
            <motion.p
              className="text-purple-300 font-bold tracking-wide uppercase text-sm discount-badge bg-purple-900/40 px-4 py-1 rounded-full border border-purple-400/30"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              10% OFF WHEN YOU BUY DIRECT
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
