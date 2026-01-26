import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="p-4 md:p-6 sticky top-0 z-50 glass-card"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="/images/logo.png"
            alt="Cheffy's Crystals"
            className="h-10 w-10 md:h-12 md:w-12 rounded-full"
          />
          <h1 className="text-xl md:text-2xl font-bold tracking-wider gradient-text">
            Cheffy's Crystals
          </h1>
        </motion.div>

        <nav className="hidden lg:flex gap-6 text-lg font-medium text-white">
          <motion.a
            href="https://shop.cheffyscrystals.com"
            className="text-purple-300 hover:text-white transition-colors font-bold uppercase tracking-tighter"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Direct
          </motion.a>
          {['socials', 'featured', 'blog', 'events', 'faq'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="hover:text-purple-300 transition-colors capitalize"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05, color: '#c4b5fd' }}
            >
              {item === 'socials' ? 'Find Us' : item === 'featured' ? 'Crystals' : item === 'events' ? 'Community' : item.toUpperCase()}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="https://shop.cheffyscrystals.com"
          className="lg:hidden bg-purple-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Save 10% Now
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
