import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'Official Store',
    href: 'https://shop.cheffyscrystals.com',
    badge: 'Save 10%',
    featured: true,
    icon: (
      <svg className="w-10 h-10 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.5 8 12 11.2 4.5 8 12 4.8zM4 15.8V9.7l7 3.1v6.1l-7-3.1zm9 3.1v-6.1l7-3.1v6.1l-7 3.1z" />
      </svg>
    ),
  },
  { name: 'Shopee', href: 'https://shopee.ph/cheffyyyy', target: '_blank' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@cheffyscrystals', target: '_blank' },
  { name: 'Facebook', href: 'https://facebook.com/cheffyscrystals', target: '_blank' },
  { name: 'Email Us', href: 'mailto:storetgf@gmail.com' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FindUsOnline = () => {
  return (
    <motion.section
      id="socials"
      className="p-8 md:p-12 rounded-3xl glass-card text-center scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-8 gradient-text uppercase tracking-tighter"
        variants={itemVariants}
      >
        Find Us Online
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 text-center text-white font-bold"
        variants={containerVariants}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target={link.target}
            rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
            className={`glass-card p-4 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all relative group ${
              link.featured
                ? 'border-2 border-purple-400 bg-purple-900/20 hover:bg-purple-900/40'
                : 'hover:bg-purple-900/40'
            }`}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.badge && (
              <motion.div
                className="absolute -top-3 -right-3 bg-white text-purple-900 text-[10px] font-black px-2 py-1 rounded-md shadow-xl uppercase"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1 }}
              >
                {link.badge}
              </motion.div>
            )}
            {link.icon}
            <span>{link.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FindUsOnline;
