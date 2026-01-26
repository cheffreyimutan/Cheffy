import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'Are your crystals authentic?',
    answer:
      'Yes! All our crystals are 100% authentic spiritual stones, carefully sourced for their quality and energy.',
  },
  {
    question: 'Where is the best place to buy crystals in the Philippines?',
    answer:
      'We recommend ordering through our official store at shop.cheffyscrystals.com to get an additional 10% discount and the best prices.',
  },
  {
    question: 'What types of healing crystals do you sell?',
    answer:
      'We sell a wide variety of healing crystals, including raw crystals, tumbled stones, amethyst, clear quartz, rose quartz, citrine, and moss agate.',
  },
  {
    question: 'Do you ship to Cebu, Davao, and outside Manila?',
    answer:
      'Yes! We offer nationwide shipping across the Philippines and international shipping to Malaysia and Singapore via Shopee.',
  },
  {
    question: 'Are there holes in the crystals for jewelry making?',
    answer:
      'By default, our crystals do not have holes. If you need drilled crystals, please message us first before placing an order.',
  },
  {
    question: 'Do you accept same-day delivery?',
    answer:
      'We currently do not offer Lalamove or other same-day delivery services. All orders are processed through our e-commerce platforms for standard shipping.',
  },
  {
    question: 'How do I know which crystal is right for me?',
    answer:
      'Trust your intuition! We usually say to choose the crystal that "calls" to you first. You can also check our social media for guides on crystal meanings.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all standard payment options provided by our shop partners, including GCash, COD, and Credit/Debit cards.',
  },
];

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-gray-800/60 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <motion.button
        className="w-full p-4 text-left flex justify-between items-center cursor-pointer text-gray-200"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: 'rgba(107, 114, 128, 0.3)' }}
      >
        <span className="font-semibold text-lg text-white">{faq.question}</span>
        <motion.span
          className="text-2xl font-light text-gray-400"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.span>
      </motion.button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="px-4 pb-4 text-gray-300">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <motion.section
      id="faq"
      className="p-8 md:p-12 rounded-3xl glass-card"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-8 gradient-text uppercase tracking-tighter text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={faq.question} faq={faq} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default FAQ;
