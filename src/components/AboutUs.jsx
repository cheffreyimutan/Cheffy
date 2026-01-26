import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.section
      id="about"
      className="p-8 md:p-12 rounded-3xl glass-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 gradient-text uppercase tracking-tighter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Authentic Crystals, Real Intentions
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <motion.div
          className="md:w-1/2 text-lg leading-relaxed text-gray-300 space-y-4 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p>
            Searching for an <strong>affordable gemstone shop in Manila</strong> that doesn't
            compromise on quality? At Cheffy's Crystals, we believe energy work should be for
            everyone.
          </p>
          <p>
            We offer authentic healing crystals shipped nationwide—from{' '}
            <strong>Metro Manila to Cebu and Davao</strong>. Our collection starts as low as{' '}
            <strong className="font-bold text-purple-300">P20</strong>, making spiritual wellness
            accessible to all Filipinos.
          </p>

          <motion.div
            className="mt-8 pt-6 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Our Mission</h3>
            <p>
              To provide high-quality, authentic spiritual stones at honest prices, ensuring every
              Filipino can manifest abundance and positivity through the power of crystals.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.img
            src="/images/owner-photo.jpg"
            alt="Cheffy, Founder of Cheffy's Crystals Philippines"
            className="rounded-2xl shadow-2xl shadow-purple-900/30 w-full h-auto object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
