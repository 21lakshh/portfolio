'use client';

import { motion } from 'framer-motion';
import { ChatMessage, MessageType, MessageStatus } from '@/types/chat';
import { useTypewriter } from '@/hooks/useTypewriter';

interface ChatMessageBubbleProps {
  message: ChatMessage;
}

export const ChatMessageBubble = ({ message }: ChatMessageBubbleProps) => {
  const isUser = message.type === MessageType.USER;
  const isTyping = message.type === MessageType.AI && message.status === MessageStatus.TYPING;

  const { displayText, isComplete } = useTypewriter(
    isTyping ? message.content : message.content,
    message.type === MessageType.AI ? 10 : 0 // Faster typing speed
  );

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`
        relative max-w-[85%] sm:max-w-[75%] 
        px-5 py-3.5 
        shadow-sm
        ${isUser 
          ? 'bg-neutral-900 dark:bg-white text-white dark:text-black rounded-2xl rounded-tr-md' 
          : 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 border border-neutral-100 dark:border-neutral-700/50 rounded-2xl rounded-tl-md'
        }
      `}>
        <div className="text-[15px] sm:text-base leading-relaxed whitespace-pre-wrap">
          {isTyping ? displayText : message.content}
          
          {/* Cursor effect */}
          {isTyping && !isComplete && (
            <span className="inline-block w-1.5 h-4 ml-0.5 bg-neutral-400 align-middle animate-pulse rounded-full" />
          )}
        </div>
        
        {/* Timestamp */}
        <div className={`
          text-[10px] font-medium mt-1.5 select-none
          ${isUser 
            ? 'text-neutral-400 dark:text-neutral-500 text-right' 
            : 'text-neutral-400 dark:text-neutral-500'
          }
        `}>
          {formatTime(message.timestamp)}
        </div>
      </div>
    </motion.div>
  );
};