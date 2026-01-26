import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Approachable & Good Energy',
    description:
      "We're easy to talk to! Whether you need a quick consult or advice on stones, we treat you like a friend.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Truly Affordable',
    description:
      'No 10x markups here. We keep our prices honest so healing remains within reach for every Filipino.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'No Complexity',
    description:
      'We make crystals easy to understand. No confusing jargon—just practical guidance for your journey.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const platforms = [
  { name: 'Shopee', badge: 'Preferred Seller' },
  { name: 'TikTok Shop', badge: 'Star Shop' },
  { name: 'Lazada', badge: 'Trending Shop' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="space-y-12">
      <motion.h2
        className="text-4xl font-bold text-center gradient-text uppercase tracking-tighter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Why our clients choose us
      </motion.h2>

      {/* Key Benefits Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            className="glass-card p-8 rounded-3xl text-center border border-white/5 hover:border-purple-500/30 transition-all"
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <motion.div
              className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {benefit.icon}
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
              {benefit.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Platform Ratings & Trust Credentials */}
      <motion.div
        className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-purple-500/30 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-2 mb-8">
          <motion.span
            className="text-purple-400 font-bold uppercase tracking-[0.3em] text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Verified Excellence
          </motion.span>
          <motion.h3
            className="text-3xl font-black text-white uppercase tracking-tighter italic"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Trusted Authentic Seller since 2020
          </motion.h3>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              className="space-y-2 group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-white font-black text-xl uppercase tracking-tighter">
                {platform.name}
              </p>
              <motion.div
                className="text-yellow-400 text-2xl drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {'★'.repeat(5)}
              </motion.div>
              <motion.p
                className="text-[10px] font-black text-purple-900 bg-purple-300 px-3 py-1 rounded-full uppercase inline-block shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                {platform.badge}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-10 text-gray-400 italic text-sm font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Over thousands of satisfied crystal buddies nationwide!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
