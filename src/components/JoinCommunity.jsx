import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const JoinCommunity = () => {
  return (
    <motion.section
      id="events"
      className="p-8 md:p-12 rounded-3xl glass-card text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold mb-12 gradient-text uppercase tracking-tighter"
        variants={itemVariants}
      >
        Join Our Community
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left"
        variants={containerVariants}
      >
        {/* TarotCon Event */}
        <motion.div
          className="flex flex-col gap-6 bg-white/5 p-6 rounded-[2rem] border border-white/10"
          variants={itemVariants}
          whileHover={{ y: -5, borderColor: 'rgba(167, 139, 250, 0.3)' }}
        >
          <div className="grid grid-cols-2 gap-3">
            <motion.img
              src="/images/tarotcon_spring2026.jpg"
              alt="TarotCon 2026"
              className="rounded-2xl shadow-xl w-full h-64 object-cover object-top"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="/images/tarotcon_speaker_spring2026.jpg"
              alt="Cheffy guest speaker"
              className="rounded-2xl shadow-xl w-full h-64 object-cover object-top"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
              TarotCon Spring Festival 2026
            </h3>
            <p className="text-purple-300 font-semibold text-sm uppercase">
              April 25, 2026 | Astbury, Poblacion Makati
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              Join us at the festival! I'll be a guest speaker and merchant. Come say hi and let's
              talk crystals!
            </p>
            <motion.a
              href="https://tarotcon.ph"
              target="_blank"
              rel="noopener"
              className="inline-block w-full bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-center shadow-lg hover:bg-purple-700 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Event Tickets
            </motion.a>
          </div>
        </motion.div>

        {/* Facebook Community */}
        <motion.div
          className="flex flex-col gap-6 bg-white/5 p-6 rounded-[2rem] border border-white/10"
          variants={itemVariants}
          whileHover={{ y: -5, borderColor: 'rgba(167, 139, 250, 0.3)' }}
        >
          <motion.img
            src="/images/cheffy_community.jpg"
            alt="Facebook Community"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
              Crystals & Conversations
            </h3>
            <p className="text-purple-300 font-semibold text-sm uppercase">
              Cheffy's Crystals Facebook Group
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              A safe space for crystal lovers to share hauls, ask questions, and learn together.
              Join your crystal buddies today!
            </p>
            <motion.a
              href="https://www.facebook.com/share/g/1Cze2UffTn/"
              target="_blank"
              rel="noopener"
              className="inline-block w-full border-2 border-purple-500 text-white font-bold py-3 px-8 rounded-full text-center hover:bg-purple-500 transition-all uppercase text-xs"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(147, 51, 234, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              Join the Group
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default JoinCommunity;
