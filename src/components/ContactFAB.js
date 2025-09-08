import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

const ContactFAB = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="flex flex-col items-end gap-2">
        <motion.a
          href="mailto:jagadeesh@example.com?subject=Hello%20Jagadeesh"
          className="glass rounded-full px-4 py-2 flex items-center gap-2 text-white/90 shadow-lg hover:shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          <Mail className="w-5 h-5" />
          <span className="text-sm font-semibold">Email</span>
        </motion.a>

        <motion.a
          href="https://wa.me/919876543210?text=Hi%20Jagadeesh%2C%20saw%20your%20portfolio!"
          target="_blank"
          rel="noopener noreferrer"
          className="glass rounded-full px-4 py-2 flex items-center gap-2 text-white/90 shadow-lg hover:shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-semibold">WhatsApp</span>
        </motion.a>
      </div>
    </div>
  );
};

export default ContactFAB;

