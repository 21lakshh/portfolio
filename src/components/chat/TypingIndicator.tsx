'use client';

import { motion } from 'motion/react';

export const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-1 p-3">
      <div className="flex space-x-1">
        <motion.div
          className="w-2 h-2 bg-white/60 dark:bg-white/40 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="w-2 h-2 bg-white/60 dark:bg-white/40 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="w-2 h-2 bg-white/60 dark:bg-white/40 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
        />
      </div>
      <span className="text-sm text-black/40 dark:text-white/40 ml-2">thinking...</span>
    </div>
  );
};
