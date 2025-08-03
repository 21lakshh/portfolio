import { motion } from 'motion/react';

export const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-1 p-4">
      <div className="flex space-x-1">
        <motion.div
          className="w-2 h-2 bg-blue-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="w-2 h-2 bg-blue-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="w-2 h-2 bg-blue-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
        />
      </div>
      <span className="text-sm text-gray-400 ml-2">AI is thinking...</span>
    </div>
  );
};