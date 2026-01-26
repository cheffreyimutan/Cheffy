import { motion } from 'framer-motion';

const CrystalMusings = () => {
  return (
    <motion.section
      id="blog"
      className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-900/10 via-black/40 to-purple-900/10 border border-purple-500/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-purple-400 uppercase tracking-widest font-bold text-sm">
          Feature Article
        </span>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mt-2">Crystal Musings</h2>
      </motion.div>

      <motion.article
        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-8 md:p-16 rounded-[2rem] border border-white/10 shadow-2xl text-center md:text-left relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.header
          className="mb-10 border-b border-white/10 pb-8 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 uppercase tracking-tighter">
            The Spark That Started It All: Why Every Filipino Deserves High-Vibe Healing
          </h3>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-purple-300">
            <span className="font-bold">By Cheffy</span>
            <span className="opacity-50">-</span>
            <span>5 min read</span>
          </div>
        </motion.header>

        <div className="text-lg md:text-xl text-gray-300 space-y-8 leading-relaxed font-light text-balance relative">
          <motion.div
            className="magazine-quote bg-purple-600 text-white p-6 rounded-2xl shadow-xl transform md:-rotate-3 relative z-10 text-left"
            initial={{ opacity: 0, x: -50, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <p className="text-lg font-bold italic leading-tight text-white">
              "Something so grounding shouldn't be kept away by greedy markups."
            </p>
          </motion.div>

          <motion.p
            className="article-dropcap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            The story of <strong>Cheffy's Crystals</strong> didn't start in a high-end mall. It
            began in the silence of the 2020 pandemic. Like so many others, I was searching for a
            way to ground myself—looking for <strong>authentic healing crystals in the Philippines</strong>{' '}
            to bring peace into a chaotic world.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            I noticed a disturbing pattern: stones were being sold at{' '}
            <strong>10x higher than their actual cost.</strong> It broke my heart to realize
            wellness was being treated as a luxury for the few.
          </motion.p>

          <motion.div
            className="bg-purple-600/10 border-l-4 border-purple-500 p-6 my-10 rounded-r-2xl clear-both text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-2xl text-white font-bold italic text-balance">
              "We aren't just a shop. We are here to be your crystal buddies, growing and healing
              together."
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            That realization was my turning point. Today, my mission is to make{' '}
            <strong>affordable gemstones in Manila</strong> and the provinces a reality. We are here
            for you.
          </motion.p>

          <motion.footer
            className="mt-12 pt-8 border-t border-white/10 text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <div className="inline-block text-left">
              <p className="text-gray-400 mb-1 font-medium">Stay shiny, crystal friend!</p>
              <motion.p
                className="signature text-5xl text-purple-300"
                whileHover={{ scale: 1.05 }}
              >
                Love, Cheffy~
              </motion.p>
            </div>
          </motion.footer>
        </div>
      </motion.article>
    </motion.section>
  );
};

export default CrystalMusings;
