import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'Shopee',
    href: 'https://shopee.ph/cheffyyyy',
    badge: 'Shop now',
    featured: true,
    target: '_blank',
    icon: (
      <svg className="w-10 h-10 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.2c-2.3 0-4.1 1.9-4.2 4.2H4.7c-.5 0-.9.4-1 .9l-.8 12.1c0 1.2.9 2.2 2.1 2.3h13.9c1.2-.1 2.2-1.1 2.1-2.3l-.8-12.1c0-.5-.5-.9-1-.9h-3.1C16.1 4.1 14.3 2.2 12 2.2zm0 1.8c1.3 0 2.3 1 2.4 2.4H9.6C9.7 5 10.7 4 12 4zm-.3 6c1.9 0 3.2 1 3.2 2.6 0 1.4-1.1 2.2-2.5 2.6-1 .3-1.4.5-1.4.9 0 .4.4.6 1.1.6.7 0 1.4-.2 1.9-.5l.4 1.5c-.6.3-1.5.5-2.4.5-1.9 0-3.1-1-3.1-2.5 0-1.3 1-2.2 2.5-2.6 1-.3 1.4-.5 1.4-.9 0-.4-.4-.6-1.1-.6-.8 0-1.7.3-2.2.6l-.4-1.5c.6-.4 1.6-.7 2.7-.7z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@cheffyscrystals',
    badge: 'Shop now',
    featured: true,
    target: '_blank',
    icon: (
      <svg className="w-10 h-10 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.6 5.8c-1-.7-1.7-1.7-1.9-3h-2.5v10.3c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.3 0 .5 0 .8.1V7.6c-.3 0-.5-.1-.8-.1-2.8 0-5 2.3-5 5s2.2 5 5 5 5-2.3 5-5V8.9c1 .7 2.2 1.1 3.5 1.1V7.5c-.7 0-1.4-.2-2.1-.6z" />
      </svg>
    ),
  },
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
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 text-center text-white font-bold"
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
