import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Absolutely love my crystals! The quality is amazing for the price. Will definitely buy again from this crystal shop!",
    author: 'Alex R.',
  },
  {
    text: 'My go-to for healing crystals in the Philippines. Fast shipping and the gemstones are so beautiful in person.',
    author: 'Bea C.',
  },
  {
    text: "I'm so happy I found Cheffy's Crystals. Their collection is perfect for anyone starting their spiritual journey.",
    author: 'Jess M.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      className="mb-16 p-8 md:p-12 rounded-3xl glass-card text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 gradient-text uppercase tracking-tighter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        What Our Customers Say
      </motion.h2>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            className="glass-card p-6 rounded-2xl flex flex-col items-center"
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-3xl text-yellow-400 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {'★'.repeat(5)}
            </motion.div>
            <p className="text-gray-300 mb-4 italic text-sm text-balance">"{testimonial.text}"</p>
            <p className="font-bold text-purple-300 text-xs uppercase tracking-widest">
              - {testimonial.author}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
