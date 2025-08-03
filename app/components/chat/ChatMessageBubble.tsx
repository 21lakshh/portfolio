import { motion } from 'motion/react';
import { ChatMessage, MessageType, MessageStatus } from '../types/chat';
import { useTypewriter } from '../hooks/useTypewriter';

interface ChatMessageBubbleProps {
  message: ChatMessage;
}

export const ChatMessageBubble = ({ message }: ChatMessageBubbleProps) => {
  const { displayText, isComplete } = useTypewriter(
    message.type === MessageType.AI && message.status === MessageStatus.TYPING 
      ? message.content 
      : message.content,
    message.type === MessageType.AI ? 20 : 0
  );

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${message.type === MessageType.USER ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
        message.type === MessageType.USER
          ? 'bg-blue-600 text-white'
          : 'bg-gray-800 text-gray-100 border border-gray-700'
      }`}>
        <p className="text-sm leading-relaxed">
          {message.type === MessageType.AI && message.status === MessageStatus.TYPING
            ? displayText
            : message.content}
          {message.type === MessageType.AI && message.status === MessageStatus.TYPING && !isComplete && (
            <span className="animate-pulse">|</span>
          )}
        </p>
        <p className={`text-xs mt-2 ${
          message.type === MessageType.USER ? 'text-blue-100' : 'text-gray-400'
        }`}>
          {formatTime(message.timestamp)}
        </p>
      </div>
    </motion.div>
  );
};