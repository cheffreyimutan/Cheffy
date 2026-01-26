import { motion } from 'framer-motion';

const crystals = [
  {
    name: 'Crystal Collections',
    description: 'Find Your Perfect Energy',
    image: '/images/crystal-display.jpg',
  },
  {
    name: 'Assorted Tumbles',
    description: 'Carry Good Vibes With You',
    image: '/images/assorted-crystals.jpeg',
  },
  {
    name: 'Moss Agate',
    description: 'Abundance & New Beginnings',
    image: '/images/moss-agate.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const FeaturedCrystals = () => {
  return (
    <section id="featured" className="scroll-mt-24">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 gradient-text uppercase tracking-tighter text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Crystals
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {crystals.map((crystal) => (
          <motion.div
            key={crystal.name}
            className="glass-card rounded-2xl overflow-hidden group border border-white/5"
            variants={cardVariants}
            whileHover={{ y: -10 }}
          >
            <div className="overflow-hidden">
              <motion.img
                src={crystal.image}
                alt={crystal.name}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <motion.div
              className="p-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">
                {crystal.name}
              </h3>
              <p className="text-purple-300 font-medium text-sm">{crystal.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <motion.a
          href="https://shop.cheffyscrystals.com"
          className="inline-block bg-white text-purple-900 font-black py-4 px-12 rounded-full text-xl hover:bg-purple-100 transition-all shadow-xl"
          whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(167, 139, 250, 0.3)' }}
          whileTap={{ scale: 0.95 }}
        >
          BROWSE SHOP & SAVE 10% DIRECT
        </motion.a>
      </motion.div>
    </section>
  );
};

export default FeaturedCrystals;
