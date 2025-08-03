"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/app/components/ui/card';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage, MessageType, MessageStatus } from './types/chat';
import { ChatMessageBubble } from './chat/ChatMessageBubble';
import { TypingIndicator } from './chat/TypingIndicator';
import { ChatInput } from './chat/ChatInput';

// Main AskMe Component
export default function AskMe() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: MessageType.AI,
      content: "Hi! I'm here to help you learn more about Lakshya. What would you like to know?",
      timestamp: new Date(),
      status: MessageStatus.COMPLETE
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: MessageType.USER,
      content: inputValue,
      timestamp: new Date(),
      status: MessageStatus.SENT
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "Lakshya is a passionate full-stack developer with expertise in modern web technologies including React, Next.js, TypeScript, and various backend technologies. He enjoys creating innovative digital experiences through clean code and thoughtful design.",
        "He's currently working on several exciting projects including Finfluenzz, a financial literacy platform that gamifies money management. You can check out his work on his GitHub profile.",
        "Lakshya has experience in both frontend and backend development, with a focus on creating user-friendly applications. He's always learning new technologies and contributing to open-source projects.",
        "When he's not coding, Lakshya enjoys exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community. He believes in the power of collaboration and continuous growth.",
        "You can reach out to Lakshya through his portfolio website or connect with him on professional networks. He's always open to discussing new opportunities and collaborations."
      ];

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: MessageType.AI,
        content: randomResponse,
        timestamp: new Date(),
        status: MessageStatus.TYPING
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);

      // Mark as complete after typing animation
      setTimeout(() => {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === aiMessage.id 
              ? { ...msg, status: MessageStatus.COMPLETE }
              : msg
          )
        );
      }, randomResponse.length * 20 + 1000);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Ask Me
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about my experience, projects, or skills? Ask away! I'm here to help.
          </p>
        </div>

        {/* Chat Interface */}
        <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
          {/* Messages Area */}
          <ScrollArea ref={scrollAreaRef} className="h-96 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessageBubble key={message.id} message={message} />
              ))}
              
              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TypingIndicator />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollArea>

          {/* Input Area */}
          <ChatInput
            value={inputValue}
            onChange={setInputValue}
            onSend={handleSendMessage}
            onKeyPress={handleKeyPress}
            disabled={isTyping}
            placeholder="Ask me anything about Lakshya..."
          />
        </Card>
      </div>
    </section>
  );
}