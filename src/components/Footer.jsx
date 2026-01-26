import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="text-center p-8 mt-16 border-t border-gray-700 text-gray-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        className="font-medium italic mb-2 tracking-tight text-xl text-balance"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Born from a passion to make healing accessible to every Filipino.
      </motion.p>
      <motion.p
        className="text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        &copy; Cheffy's Crystals 2026. All Rights Reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
